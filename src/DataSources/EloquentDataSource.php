<?php

namespace Manggala\DashboardBuilder\DataSources;

use InvalidArgumentException;
use Manggala\DashboardBuilder\Core\AggregationEngine;

class EloquentDataSource extends BaseDataSource
{
    protected AggregationEngine $engine;

    public function __construct(?AggregationEngine $engine = null)
    {
        $this->engine = $engine ?? new AggregationEngine;
    }

    public function getType(): string
    {
        return 'eloquent';
    }

    public function getName(): string
    {
        return 'Eloquent Model Data Source';
    }

    public function fetchData(array $config): array
    {
        $modelClass = $config['model'] ?? null;

        if (! $modelClass || ! class_exists($modelClass)) {
            throw new InvalidArgumentException("Invalid or non-existent Eloquent model class: [{$modelClass}]");
        }

        $query = $modelClass::query();

        // Apply filters
        $filters = $this->parseFilters($config);
        $this->engine->applyFilters($query, $filters);

        $aggregation = $this->parseAggregation($config);
        $column = $this->parseColumn($config);

        $result = $this->engine->calculateQueryAggregate($query, $aggregation, $column);

        return [
            'type' => $this->getType(),
            'model' => $modelClass,
            'aggregation' => $aggregation,
            'column' => $column,
            'result' => $result,
        ];
    }
}
