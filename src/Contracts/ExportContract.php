<?php

namespace Manggala\DashboardBuilder\Contracts;

interface ExportContract
{
    /**
     * Get format identifier (e.g. 'json', 'pdf', 'png', 'csv', 'excel').
     */
    public function getFormat(): string;

    /**
     * Export dashboard data into format binary/string output.
     *
     * @param  array<string, mixed>  $dashboardData
     */
    public function export(array $dashboardData): mixed;
}
