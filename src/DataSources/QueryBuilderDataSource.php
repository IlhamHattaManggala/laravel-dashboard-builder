<?php

namespace Manggala\DashboardBuilder\DataSources;

use Illuminate\Support\Facades\DB;
use InvalidArgumentException;
use Manggala\DashboardBuilder\Core\AggregationEngine;

class QueryBuilderDataSource extends BaseDataSource
{
    protected AggregationEngine $engine;

    public function __construct(?AggregationEngine $engine = null)
    {
        $this->engine = $engine ?? new AggregationEngine;
    }

    public function getType(): string
    {
        return 'query_builder';
    }

    public function getName(): string
    {
        return 'Query Builder Data Source';
    }

    public function fetchData(array $config): array
    {
        $table = $config['table'] ?? null;

        if (! $table) {
            throw new InvalidArgumentException('Missing table name in QueryBuilderDataSource configuration.');
        }

        $connection = $config['connection'] ?? null;
        $query = DB::connection($connection)->table($table);

        // Apply filters
        $filters = $this->parseFilters($config);
        $this->engine->applyFilters($query, $filters);

        $aggregation = $this->parseAggregation($config);
        $column = $this->parseColumn($config);

        $result = $this->engine->calculateQueryAggregate($query, $aggregation, $column);

        return [
            'type' => $this->getType(),
            'table' => $table,
            'aggregation' => $aggregation,
            'column' => $column,
            'result' => $result,
        ];
    }
}
