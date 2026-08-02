<?php

namespace Manggala\DashboardBuilder\DataSources;

class StaticDataSource extends BaseDataSource
{
    public function getType(): string
    {
        return 'static';
    }

    public function getName(): string
    {
        return 'Static Value / Array Data Source';
    }

    public function fetchData(array $config): array
    {
        $data = $config['data'] ?? null;

        return [
            'type' => $this->getType(),
            'result' => $data,
        ];
    }
}
