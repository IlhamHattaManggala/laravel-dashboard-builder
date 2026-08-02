<?php

use Illuminate\Support\Facades\Route;
use Manggala\DashboardBuilder\Http\Controllers\ExportImportController;
use Manggala\DashboardBuilder\Http\Controllers\WidgetDataController;

Route::group([
    'prefix' => config('dashboard-builder.path', 'dashboard-builder').'/api',
    'domain' => config('dashboard-builder.domain'),
    'middleware' => config('dashboard-builder.api_middleware', ['api']),
    'as' => 'dashboard-builder.api.',
], function () {
    Route::get('/widgets/{widget}/data', [WidgetDataController::class, 'show'])->name('widgets.data');
    Route::post('/widgets/{widget}/refresh', [WidgetDataController::class, 'refresh'])->name('widgets.refresh');
    Route::get('/dashboards/{dashboard}/export', [ExportImportController::class, 'export'])->name('export');
    Route::post('/dashboards/import', [ExportImportController::class, 'import'])->name('import');
});
