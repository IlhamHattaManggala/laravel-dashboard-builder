<?php

use Manggala\DashboardBuilder\Facades\Dashboard;
use Manggala\DashboardBuilder\Services\DashboardManager;

it('loads configuration correctly', function () {
    expect(config('dashboard-builder.path'))->toBe('dashboard-builder');
    expect(config('dashboard-builder.theme.mode'))->toBe('system');
});

it('resolves dashboard facade correctly', function () {
    $manager = Dashboard::make('Sales Dashboard');
    expect($manager)->toBeInstanceOf(DashboardManager::class);
});
