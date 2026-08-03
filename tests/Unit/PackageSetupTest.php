<?php

use Manggala\DashboardBuilder\Facades\Dashboard;
use Manggala\DashboardBuilder\Services\DashboardManager;
use Manggala\DashboardBuilder\Core\DashboardRegistry;

it('loads configuration correctly', function () {
    expect(config('dashboard-builder.path'))->toBe('dashboard-builder');
    expect(config('dashboard-builder.theme.mode'))->toBe('system');
});

it('resolves dashboard facade correctly', function () {
    expect(Dashboard::version())->toBe('1.0.3');
    expect(Dashboard::registry())->toBeInstanceOf(DashboardRegistry::class);
    $manager = Dashboard::make('Sales Dashboard');
    expect($manager)->toBeInstanceOf(DashboardManager::class);
});
