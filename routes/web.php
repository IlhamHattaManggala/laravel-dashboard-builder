<?php

use Illuminate\Support\Facades\Route;
use Manggala\DashboardBuilder\Http\Controllers\DashboardController;

Route::group([
    'prefix' => config('dashboard-builder.path', 'dashboard-builder'),
    'domain' => config('dashboard-builder.domain'),
    'middleware' => config('dashboard-builder.middleware', ['web', 'auth']),
    'as' => 'dashboard-builder.',
], function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/create', [DashboardController::class, 'create'])->name('create');
    Route::post('/', [DashboardController::class, 'store'])->name('store');
    Route::get('/{dashboard}', [DashboardController::class, 'show'])->name('show');
    Route::get('/{dashboard}/edit', [DashboardController::class, 'edit'])->name('edit');
    Route::put('/{dashboard}', [DashboardController::class, 'update'])->name('update');
    Route::delete('/{dashboard}', [DashboardController::class, 'destroy'])->name('destroy');

    Route::post('/{dashboard}/duplicate', [DashboardController::class, 'duplicate'])->name('duplicate');
    Route::post('/{dashboard}/archive', [DashboardController::class, 'archive'])->name('archive');
    Route::post('/{dashboard}/favorite', [DashboardController::class, 'favorite'])->name('favorite');
});
