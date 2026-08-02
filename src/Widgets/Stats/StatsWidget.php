<?php

namespace Manggala\DashboardBuilder\Widgets\Stats;

use Manggala\DashboardBuilder\Widgets\Widget;

class StatsWidget extends Widget
{
    protected string $type = 'stats';

    protected string $category = 'stats';

    protected ?string $valuePrefix = null;

    protected ?string $valueSuffix = null;

    protected ?float $trendPercentage = null;

    public function prefix(string $prefix): static
    {
        $this->valuePrefix = $prefix;

        return $this;
    }

    public function suffix(string $suffix): static
    {
        $this->valueSuffix = $suffix;

        return $this;
    }

    public function trend(float $percentage): static
    {
        $this->trendPercentage = $percentage;

        return $this;
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'prefix' => $this->valuePrefix,
            'suffix' => $this->valueSuffix,
            'trend' => $this->trendPercentage,
        ]);
    }
}
