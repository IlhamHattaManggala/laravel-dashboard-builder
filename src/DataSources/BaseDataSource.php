<?php

namespace Manggala\DashboardBuilder\DataSources;

use Manggala\DashboardBuilder\Contracts\DataSourceContract;

abstract class BaseDataSource implements DataSourceContract
{
    /**
     * Parse filters from configuration.
     *
     * @param  array<string, mixed>  $config
     * @return array<int, array<string, mixed>>
     */
    protected function parseFilters(array $config): array
    {
        return $config['filters'] ?? [];
    }

    /**
     * Get aggregation operation type from configuration.
     *
     * @param  array<string, mixed>  $config
     */
    protected function parseAggregation(array $config): string
    {
        return strtolower($config['aggregation'] ?? 'count');
    }

    /**
     * Get target column for aggregation from configuration.
     *
     * @param  array<string, mixed>  $config
     */
    protected function parseColumn(array $config): string
    {
        return $config['column'] ?? '*';
    }

    /**
     * Get group_by period from configuration.
     *
     * @param  array<string, mixed>  $config
     */
    protected function parseGroupBy(array $config): ?string
    {
        return isset($config['group_by']) ? strtolower($config['group_by']) : null;
    }
}
