<?php

namespace Manggala\DashboardBuilder\DataSources;

use Illuminate\Support\Collection;
use InvalidArgumentException;
use Manggala\DashboardBuilder\Core\AggregationEngine;

class CollectionDataSource extends BaseDataSource
{
    protected AggregationEngine $engine;

    public function __construct(?AggregationEngine $engine = null)
    {
        $this->engine = $engine ?? new AggregationEngine;
    }

    public function getType(): string
    {
        return 'collection';
    }

    public function getName(): string
    {
        return 'Collection / Array Data Source';
    }

    public function fetchData(array $config): array
    {
        $items = $config['items'] ?? [];

        if (! is_array($items) && ! ($items instanceof Collection)) {
            throw new InvalidArgumentException('Items for CollectionDataSource must be an array or collection instance.');
        }

        $filters = $this->parseFilters($config);
        $aggregation = $this->parseAggregation($config);
        $column = $this->parseColumn($config);

        $result = $this->engine->calculateCollectionAggregate($items, $aggregation, $column, $filters);

        return [
            'type' => $this->getType(),
            'aggregation' => $aggregation,
            'column' => $column,
            'result' => $result,
        ];
    }
}
