<?php

namespace Manggala\DashboardBuilder\Contracts;

interface ChartContract
{
    /**
     * Get chart type key (e.g. 'line', 'bar', 'pie', 'donut').
     */
    public function getChartType(): string;

    /**
     * Format ApexCharts or chart configuration options.
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public function formatChartOptions(array $data): array;
}
