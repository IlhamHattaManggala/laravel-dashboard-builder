<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\File;

uses(RefreshDatabase::class);

it('runs dashboard:install command', function () {
    $this->artisan('dashboard:install')
        ->expectsConfirmation('Would you like to run the database migrations now?', 'no')
        ->assertSuccessful();
});

it('runs dashboard:publish command', function () {
    $this->artisan('dashboard:publish', ['--tag' => 'config'])
        ->assertSuccessful();
});

it('runs dashboard:clear-cache command', function () {
    $this->artisan('dashboard:clear-cache')
        ->expectsOutput('Cleared 0 cached widget data entries successfully.')
        ->assertSuccessful();
});

it('runs make:dashboard command', function () {
    $targetPath = app_path('Dashboards/SalesOverviewDashboard.php');

    if (File::exists($targetPath)) {
        File::delete($targetPath);
    }

    $this->artisan('make:dashboard', ['name' => 'SalesOverviewDashboard'])
        ->assertSuccessful();

    expect(File::exists($targetPath))->toBeTrue();

    File::delete($targetPath);
});

it('runs make:dashboard-widget command', function () {
    $targetPath = app_path('Dashboards/Widgets/CustomKpiWidget.php');

    if (File::exists($targetPath)) {
        File::delete($targetPath);
    }

    $this->artisan('make:dashboard-widget', ['name' => 'CustomKpiWidget'])
        ->assertSuccessful();

    expect(File::exists($targetPath))->toBeTrue();

    File::delete($targetPath);
});
