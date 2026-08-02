<?php

use Manggala\DashboardBuilder\Models\Dashboard;
use Manggala\DashboardBuilder\Models\DashboardCategory;
use Manggala\DashboardBuilder\Models\DashboardTag;
use Manggala\DashboardBuilder\Models\DashboardWidget;
use Manggala\DashboardBuilder\Models\DashboardWidgetData;
use Manggala\DashboardBuilder\Models\DashboardLayout;
use Manggala\DashboardBuilder\Models\DashboardPermission;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('creates dashboard categories and tags correctly', function () {
    $category = DashboardCategory::create([
        'name' => 'Executive',
        'slug' => 'executive',
        'description' => 'Executive level summary dashboards',
        'color' => '#6366f1',
        'icon' => 'bar-chart',
    ]);

    $tag = DashboardTag::create([
        'name' => 'Sales',
        'slug' => 'sales',
        'color' => '#10b981',
    ]);

    expect($category->id)->toBeGreaterThan(0);
    expect($category->name)->toBe('Executive');
    expect($tag->name)->toBe('Sales');
});

it('creates a dashboard with widgets, layouts, and permissions', function () {
    $category = DashboardCategory::create([
        'name' => 'Sales',
        'slug' => 'sales',
    ]);

    $tag = DashboardTag::create([
        'name' => 'Monthly',
        'slug' => 'monthly',
    ]);

    $dashboard = Dashboard::create([
        'name' => 'Sales Overview',
        'slug' => 'sales-overview',
        'description' => 'Monthly revenue dashboard',
        'category_id' => $category->id,
        'layout' => ['columns' => 12],
        'theme' => ['mode' => 'dark'],
        'is_favorite' => true,
    ]);

    $dashboard->tags()->attach($tag->id);

    $widget = $dashboard->widgets()->create([
        'type' => 'line_chart',
        'title' => 'Monthly Revenue',
        'x' => 0,
        'y' => 0,
        'w' => 6,
        'h' => 4,
        'data_source_type' => 'eloquent',
        'data_source_config' => ['model' => 'App\\Models\\Order'],
    ]);

    $widgetData = $widget->widgetData()->create([
        'data' => ['labels' => ['Jan', 'Feb'], 'series' => [100, 200]],
        'cached_at' => now(),
    ]);

    $layout = $dashboard->layouts()->create([
        'device_type' => 'desktop',
        'layout_json' => [['i' => '1', 'x' => 0, 'y' => 0, 'w' => 6, 'h' => 4]],
    ]);

    $permission = $dashboard->permissions()->create([
        'entity_type' => 'role',
        'entity_id' => 'admin',
        'permission_level' => 'admin',
    ]);

    expect($dashboard->name)->toBe('Sales Overview');
    expect($dashboard->category->name)->toBe('Sales');
    expect($dashboard->tags)->toHaveCount(1);
    expect($dashboard->widgets)->toHaveCount(1);
    expect($dashboard->widgets->first()->title)->toBe('Monthly Revenue');
    expect($dashboard->widgets->first()->widgetData->data['labels'])->toBe(['Jan', 'Feb']);
    expect($dashboard->layouts)->toHaveCount(1);
    expect($dashboard->permissions)->toHaveCount(1);
});
