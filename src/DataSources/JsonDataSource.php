<?php

namespace Manggala\DashboardBuilder\DataSources;

use InvalidArgumentException;

class JsonDataSource extends BaseDataSource
{
    public function getType(): string
    {
        return 'json';
    }

    public function getName(): string
    {
        return 'JSON File / Payload Data Source';
    }

    public function fetchData(array $config): array
    {
        $payload = null;

        if (isset($config['json_string'])) {
            $payload = json_decode($config['json_string'], true);
        } elseif (isset($config['file_path']) && file_exists($config['file_path'])) {
            $content = file_get_contents($config['file_path']);
            $payload = json_decode($content, true);
        } else {
            throw new InvalidArgumentException('Missing valid json_string or file_path in JsonDataSource config.');
        }

        return [
            'type' => $this->getType(),
            'result' => $payload,
        ];
    }
}
