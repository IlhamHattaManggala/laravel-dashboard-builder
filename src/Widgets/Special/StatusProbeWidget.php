<?php

namespace Manggala\DashboardBuilder\Widgets\Special;

use Manggala\DashboardBuilder\Widgets\Widget;

class StatusProbeWidget extends Widget
{
    protected string $type = 'status_probe';

    protected string $category = 'content';

    protected array $probes = ['database', 'cache'];

    public function probes(array $probes): static
    {
        $this->probes = $probes;

        return $this;
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'probes' => $this->probes,
        ]);
    }
}
