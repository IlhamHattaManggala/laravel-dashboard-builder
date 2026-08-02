<?php

namespace Manggala\DashboardBuilder\Core;

use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Collection;
use InvalidArgumentException;

class AggregationEngine
{
    /**
     * Apply filter conditions to a database query builder.
     *
     * @param  EloquentBuilder|QueryBuilder  $query
     * @param  array<int, array<string, mixed>>  $filters
     * @return EloquentBuilder|QueryBuilder
     */
    public function applyFilters($query, array $filters)
    {
        foreach ($filters as $filter) {
            $column = $filter['column'] ?? null;
            $operator = strtolower($filter['operator'] ?? 'equals');
            $value = $filter['value'] ?? null;

            if (! $column) {
                continue;
            }

            switch ($operator) {
                case 'equals':
                case '=':
                    $query->where($column, '=', $value);
                    break;
                case 'not_equals':
                case '!=':
                case '<>':
                    $query->where($column, '!=', $value);
                    break;
                case 'greater_than':
                case '>':
                    $query->where($column, '>', $value);
                    break;
                case 'less_than':
                case '<':
                    $query->where($column, '<', $value);
                    break;
                case 'greater_than_or_equal':
                case '>=':
                    $query->where($column, '>=', $value);
                    break;
                case 'less_than_or_equal':
                case '<=':
                    $query->where($column, '<=', $value);
                    break;
                case 'between':
                    if (is_array($value) && count($value) >= 2) {
                        $query->whereBetween($column, [$value[0], $value[1]]);
                    }
                    break;
                case 'contains':
                case 'like':
                    $query->where($column, 'LIKE', "%{$value}%");
                    break;
                case 'in':
                    if (is_array($value)) {
                        $query->whereIn($column, $value);
                    }
                    break;
            }
        }

        return $query;
    }

    /**
     * Calculate aggregate value on a query builder.
     *
     * @param  EloquentBuilder|QueryBuilder  $query
     */
    public function calculateQueryAggregate($query, string $aggregation = 'count', string $column = '*')
    {
        $agg = strtolower($aggregation);

        return match ($agg) {
            'count' => $column === '*' ? $query->count() : $query->count($column),
            'sum' => $query->sum($column),
            'avg' => $query->avg($column),
            'min' => $query->min($column),
            'max' => $query->max($column),
            default => throw new InvalidArgumentException("Unsupported aggregation type: [{$aggregation}]"),
        };
    }

    /**
     * Filter and calculate aggregate value on an array/collection.
     *
     * @param  array<int, array<string, mixed>>  $filters
     */
    public function calculateCollectionAggregate(Collection|array $items, string $aggregation = 'count', string $column = '*', array $filters = []): mixed
    {
        $collection = $items instanceof Collection ? $items : collect($items);

        // Filter collection items
        foreach ($filters as $filter) {
            $col = $filter['column'] ?? null;
            $op = strtolower($filter['operator'] ?? 'equals');
            $val = $filter['value'] ?? null;

            if (! $col) {
                continue;
            }

            $collection = $collection->filter(function ($item) use ($col, $op, $val) {
                $itemVal = is_array($item) ? ($item[$col] ?? null) : ($item->{$col} ?? null);

                return match ($op) {
                    'equals', '=' => $itemVal == $val,
                    'not_equals', '!=', '<>' => $itemVal != $val,
                    'greater_than', '>' => $itemVal > $val,
                    'less_than', '<' => $itemVal < $val,
                    'greater_than_or_equal', '>=' => $itemVal >= $val,
                    'less_than_or_equal', '<=' => $itemVal <= $val,
                    'between' => is_array($val) && count($val) >= 2 && $itemVal >= $val[0] && $itemVal <= $val[1],
                    'contains', 'like' => str_contains(strtolower((string) $itemVal), strtolower((string) $val)),
                    default => true,
                };
            });
        }

        $agg = strtolower($aggregation);

        return match ($agg) {
            'count' => $collection->count(),
            'sum' => $collection->sum($column),
            'avg' => $collection->avg($column),
            'min' => $collection->min($column),
            'max' => $collection->max($column),
            default => throw new InvalidArgumentException("Unsupported aggregation type: [{$aggregation}]"),
        };
    }
}
