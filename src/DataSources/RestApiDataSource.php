<?php

namespace Manggala\DashboardBuilder\DataSources;

use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use InvalidArgumentException;

class RestApiDataSource extends BaseDataSource
{
    public function getType(): string
    {
        return 'rest_api';
    }

    public function getName(): string
    {
        return 'REST API Endpoint Data Source';
    }

    public function fetchData(array $config): array
    {
        $url = $config['url'] ?? null;
        $method = strtoupper($config['method'] ?? 'GET');
        $headers = $config['headers'] ?? [];
        $params = $config['query_params'] ?? [];
        $jsonPath = $config['json_path'] ?? null;
        $cacheTtl = $config['cache_ttl'] ?? 0;

        if (! $url || ! filter_var($url, FILTER_VALIDATE_URL)) {
            throw new InvalidArgumentException("Invalid REST API endpoint URL: [{$url}]");
        }

        $cacheKey = 'dashboard_builder_rest_'.md5($url.$method.json_encode($params));

        $executeRequest = function () use ($url, $method, $headers, $params, $jsonPath) {
            $client = Http::withHeaders($headers);

            $response = match ($method) {
                'POST' => $client->post($url, $params),
                'PUT' => $client->put($url, $params),
                'PATCH' => $client->patch($url, $params),
                'DELETE' => $client->delete($url, $params),
                default => $client->get($url, $params),
            };

            if (! $response->successful()) {
                throw new Exception("REST API request failed with status [{$response->status()}]: {$response->body()}");
            }

            $data = $response->json();

            if ($jsonPath && is_array($data)) {
                $data = Arr::get($data, $jsonPath, $data);
            }

            return $data;
        };

        $result = ($cacheTtl > 0)
            ? Cache::remember($cacheKey, $cacheTtl, $executeRequest)
            : $executeRequest();

        return [
            'type' => $this->getType(),
            'url' => $url,
            'result' => $result,
        ];
    }
}
