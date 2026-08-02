<?php

namespace Manggala\DashboardBuilder\Contracts;

interface DataSourceContract
{
    /**
     * Get the unique data source identifier (e.g. 'eloquent', 'rest_api').
     */
    public function getType(): string;

    /**
     * Get human readable name of the data source.
     */
    public function getName(): string;

    /**
     * Query or fetch data based on configuration.
     *
     * @param  array<string, mixed>  $config
     * @return array<string, mixed>
     */
    public function fetchData(array $config): array;
}
