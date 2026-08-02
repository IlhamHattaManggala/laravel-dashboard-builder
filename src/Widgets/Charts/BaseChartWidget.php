<?php

namespace Manggala\DashboardBuilder\Widgets\Charts;

use Manggala\DashboardBuilder\Contracts\ChartContract;
use Manggala\DashboardBuilder\Widgets\Widget;

abstract class BaseChartWidget extends Widget implements ChartContract
{
    protected string $category = 'charts';

    protected string $chartType = 'line';

    protected ?string $groupByPeriod = null;

    protected ?string $dateColumn = 'created_at';

    public function getChartType(): string
    {
        return $this->chartType;
    }

    public function groupBy(string $period, string $dateColumn = 'created_at'): static
    {
        $this->groupByPeriod = strtolower($period);
        $this->dateColumn = $dateColumn;

        return $this;
    }

    public function groupByMonth(string $dateColumn = 'created_at'): static
    {
        return $this->groupBy('month', $dateColumn);
    }

    public function groupByDay(string $dateColumn = 'created_at'): static
    {
        return $this->groupBy('day', $dateColumn);
    }

    public function groupByYear(string $dateColumn = 'created_at'): static
    {
        return $this->groupBy('year', $dateColumn);
    }

    public function formatChartOptions(array $data): array
    {
        return [
            'chart' => [
                'type' => $this->getChartType(),
            ],
            'title' => [
                'text' => $this->getTitle(),
            ],
            'series' => $data['series'] ?? [],
            'xaxis' => [
                'categories' => $data['categories'] ?? [],
            ],
        ];
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'chart_type' => $this->chartType,
            'group_by' => $this->groupByPeriod,
            'date_column' => $this->dateColumn,
        ]);
    }
}
