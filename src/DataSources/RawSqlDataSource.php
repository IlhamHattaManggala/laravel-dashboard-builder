<?php

namespace Manggala\DashboardBuilder\DataSources;

use Illuminate\Support\Facades\DB;
use InvalidArgumentException;

class RawSqlDataSource extends BaseDataSource
{
    public function getType(): string
    {
        return 'raw_sql';
    }

    public function getName(): string
    {
        return 'Raw SQL Query Data Source';
    }

    public function fetchData(array $config): array
    {
        $query = trim($config['query'] ?? '');
        $bindings = $config['bindings'] ?? [];
        $connection = $config['connection'] ?? null;

        if (empty($query)) {
            throw new InvalidArgumentException('Raw SQL query cannot be empty.');
        }

        // Security check: Only allow SELECT or WITH queries to prevent SQL injection / data manipulation
        if (! preg_match('/^(SELECT|WITH)\s+/i', $query)) {
            throw new InvalidArgumentException('Raw SQL queries must be read-only SELECT statements.');
        }

        $results = DB::connection($connection)->select($query, $bindings);

        return [
            'type' => $this->getType(),
            'result' => json_decode(json_encode($results), true),
        ];
    }
}
