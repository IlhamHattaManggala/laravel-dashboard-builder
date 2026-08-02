<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Manggala\DashboardBuilder\Core\AggregationEngine;
use Manggala\DashboardBuilder\DataSources\CollectionDataSource;
use Manggala\DashboardBuilder\DataSources\EloquentDataSource;
use Manggala\DashboardBuilder\DataSources\JsonDataSource;
use Manggala\DashboardBuilder\DataSources\QueryBuilderDataSource;
use Manggala\DashboardBuilder\DataSources\RawSqlDataSource;
use Manggala\DashboardBuilder\DataSources\RestApiDataSource;
use Manggala\DashboardBuilder\DataSources\StaticDataSource;
use Manggala\DashboardBuilder\Models\DashboardCategory;

uses(RefreshDatabase::class);

it('calculates aggregates using AggregationEngine on collection', function () {
    $engine = new AggregationEngine;
    $items = [
        ['name' => 'Item A', 'price' => 100, 'category' => 'electronics'],
        ['name' => 'Item B', 'price' => 200, 'category' => 'electronics'],
        ['name' => 'Item C', 'price' => 300, 'category' => 'books'],
    ];

    $count = $engine->calculateCollectionAggregate($items, 'count', '*', [
        ['column' => 'category', 'operator' => 'equals', 'value' => 'electronics'],
    ]);

    $sum = $engine->calculateCollectionAggregate($items, 'sum', 'price', [
        ['column' => 'category', 'operator' => 'equals', 'value' => 'electronics'],
    ]);

    $avg = $engine->calculateCollectionAggregate($items, 'avg', 'price');

    expect($count)->toBe(2);
    expect($sum)->toBe(300);
    expect($avg)->toBe(200);
});

it('fetches data using EloquentDataSource', function () {
    DashboardCategory::create(['name' => 'Category A', 'slug' => 'cat-a']);
    DashboardCategory::create(['name' => 'Category B', 'slug' => 'cat-b']);

    $ds = new EloquentDataSource;
    $res = $ds->fetchData([
        'model' => DashboardCategory::class,
        'aggregation' => 'count',
    ]);

    expect($res['type'])->toBe('eloquent');
    expect($res['result'])->toBe(2);
});

it('fetches data using QueryBuilderDataSource', function () {
    DB::table('dashboard_categories')->insert([
        ['name' => 'Sales', 'slug' => 'sales', 'created_at' => now(), 'updated_at' => now()],
        ['name' => 'Marketing', 'slug' => 'marketing', 'created_at' => now(), 'updated_at' => now()],
    ]);

    $ds = new QueryBuilderDataSource;
    $res = $ds->fetchData([
        'table' => 'dashboard_categories',
        'aggregation' => 'count',
    ]);

    expect($res['type'])->toBe('query_builder');
    expect($res['result'])->toBe(2);
});

it('fetches data using CollectionDataSource', function () {
    $ds = new CollectionDataSource;
    $res = $ds->fetchData([
        'items' => [
            ['score' => 80],
            ['score' => 90],
            ['score' => 100],
        ],
        'aggregation' => 'avg',
        'column' => 'score',
    ]);

    expect($res['result'])->toBe(90);
});

it('fetches static data using StaticDataSource', function () {
    $ds = new StaticDataSource;
    $res = $ds->fetchData(['data' => ['foo' => 'bar']]);

    expect($res['result'])->toBe(['foo' => 'bar']);
});

it('parses JSON data using JsonDataSource', function () {
    $ds = new JsonDataSource;
    $res = $ds->fetchData([
        'json_string' => json_encode(['status' => 'active', 'users' => 150]),
    ]);

    expect($res['result']['users'])->toBe(150);
});

it('executes read-only queries using RawSqlDataSource', function () {
    DB::table('dashboard_categories')->insert([
        ['name' => 'Finance', 'slug' => 'finance', 'created_at' => now(), 'updated_at' => now()],
    ]);

    $ds = new RawSqlDataSource;
    $res = $ds->fetchData([
        'query' => 'SELECT COUNT(*) as total FROM dashboard_categories WHERE slug = ?',
        'bindings' => ['finance'],
    ]);

    expect($res['result'][0]['total'])->toBe(1);
});

it('rejects destructive queries in RawSqlDataSource', function () {
    $ds = new RawSqlDataSource;
    $ds->fetchData([
        'query' => 'DELETE FROM dashboard_categories',
    ]);
})->throws(InvalidArgumentException::class);

it('fetches external API data using RestApiDataSource', function () {
    Http::fake([
        'api.example.com/metrics' => Http::response(['data' => ['revenue' => 5000]], 200),
    ]);

    $ds = new RestApiDataSource;
    $res = $ds->fetchData([
        'url' => 'https://api.example.com/metrics',
        'json_path' => 'data.revenue',
    ]);

    expect($res['result'])->toBe(5000);
});
