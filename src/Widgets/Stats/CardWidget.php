<?php

namespace Manggala\DashboardBuilder\Widgets\Stats;

use Manggala\DashboardBuilder\Widgets\Widget;

class CardWidget extends Widget
{
    protected string $type = 'card';

    protected string $category = 'stats';

    protected ?string $description = null;

    protected ?string $icon = null;

    protected ?string $color = null;

    public function description(string $desc): static
    {
        $this->description = $desc;

        return $this;
    }

    public function icon(string $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    public function color(string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'description' => $this->description,
            'icon' => $this->icon,
            'color' => $this->color,
        ]);
    }
}
