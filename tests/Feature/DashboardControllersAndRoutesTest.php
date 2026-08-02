<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Manggala\DashboardBuilder\Models\Dashboard;

uses(RefreshDatabase::class);

it('stores a new dashboard via HTTP POST', function () {
    $response = $this->postJson(route('dashboard-builder.store'), [
        'name' => 'Marketing Overview',
        'description' => 'Realtime lead generation dashboard',
        'theme' => ['mode' => 'dark'],
    ]);

    $response->assertStatus(201)
        ->assertJsonPath('dashboard.name', 'Marketing Overview');

    $this->assertDatabaseHas('dashboards', [
        'name' => 'Marketing Overview',
    ]);
});

it('lists dashboards via HTTP GET index', function () {
    Dashboard::create(['name' => 'Board 1', 'slug' => 'board-1']);
    Dashboard::create(['name' => 'Board 2', 'slug' => 'board-2']);

    $response = $this->getJson(route('dashboard-builder.index'));

    $response->assertStatus(200)
        ->assertJsonCount(2, 'data');
});

it('duplicates an existing dashboard', function () {
    $dashboard = Dashboard::create(['name' => 'Original Board', 'slug' => 'original-board']);
    $dashboard->widgets()->create([
        'type' => 'card',
        'title' => 'Stat 1',
    ]);

    $response = $this->postJson(route('dashboard-builder.duplicate', $dashboard->id));

    $response->assertStatus(201)
        ->assertJsonPath('dashboard.name', 'Original Board (Copy)');

    $this->assertDatabaseCount('dashboards', 2);
    $this->assertDatabaseCount('dashboard_widgets', 2);
});

it('toggles favorite and archive states', function () {
    $dashboard = Dashboard::create(['name' => 'Favorites Test', 'slug' => 'favorites-test']);

    $this->postJson(route('dashboard-builder.favorite', $dashboard->id))
        ->assertJsonPath('is_favorite', true);

    $this->postJson(route('dashboard-builder.archive', $dashboard->id))
        ->assertJsonPath('is_archived', true);
});

it('fetches widget data via API endpoint', function () {
    $dashboard = Dashboard::create(['name' => 'API Test Board', 'slug' => 'api-test-board']);
    $widget = $dashboard->widgets()->create([
        'type' => 'card',
        'title' => 'Users Count',
        'data_source_type' => 'static',
        'data_source_config' => ['data' => 42],
    ]);

    $response = $this->getJson(route('dashboard-builder.api.widgets.data', $widget->id));

    $response->assertStatus(200)
        ->assertJsonPath('widget_id', $widget->id)
        ->assertJsonPath('data.result', 42);
});

it('exports and imports dashboard JSON schema', function () {
    $dashboard = Dashboard::create(['name' => 'Export Board', 'slug' => 'export-board']);
    $dashboard->widgets()->create(['type' => 'card', 'title' => 'KPI']);

    $exportRes = $this->getJson(route('dashboard-builder.api.export', $dashboard->id));
    $exportRes->assertStatus(200)
        ->assertJsonPath('name', 'Export Board');

    $schema = $exportRes->json();

    $importRes = $this->postJson(route('dashboard-builder.api.import'), [
        'schema' => $schema,
    ]);

    $importRes->assertStatus(201)
        ->assertJsonPath('dashboard.name', 'Export Board (Imported)');
});
