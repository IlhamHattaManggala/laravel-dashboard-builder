<?php

namespace Manggala\DashboardBuilder;

use Illuminate\Support\ServiceProvider;
use Manggala\DashboardBuilder\Console\Commands\ClearCacheCommand;
use Manggala\DashboardBuilder\Console\Commands\InstallCommand;
use Manggala\DashboardBuilder\Console\Commands\MakeDashboardCommand;
use Manggala\DashboardBuilder\Console\Commands\MakeWidgetCommand;
use Manggala\DashboardBuilder\Console\Commands\PublishCommand;
use Manggala\DashboardBuilder\DataSources\CollectionDataSource;
use Manggala\DashboardBuilder\DataSources\EloquentDataSource;
use Manggala\DashboardBuilder\DataSources\JsonDataSource;
use Manggala\DashboardBuilder\DataSources\QueryBuilderDataSource;
use Manggala\DashboardBuilder\DataSources\RawSqlDataSource;
use Manggala\DashboardBuilder\DataSources\RestApiDataSource;
use Manggala\DashboardBuilder\DataSources\StaticDataSource;
use Manggala\DashboardBuilder\Facades\Dashboard;

class DashboardBuilderServiceProvider extends ServiceProvider
{
    /**
     * Register any package services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/dashboard-builder.php',
            'dashboard-builder'
        );

        $this->app->singleton('dashboard-builder', function ($app) {
            return new Services\DashboardManager;
        });
    }

    /**
     * Bootstrap any package services.
     */
    public function boot(): void
    {
        $this->registerMigrations();
        $this->registerPublishing();
        $this->registerRoutes();
        $this->registerCommands();
        $this->registerDefaultDataSources();
    }

    /**
     * Register default data sources in registry.
     */
    protected function registerDefaultDataSources(): void
    {
        Dashboard::registerDataSource(new EloquentDataSource);
        Dashboard::registerDataSource(new QueryBuilderDataSource);
        Dashboard::registerDataSource(new CollectionDataSource);
        Dashboard::registerDataSource(new StaticDataSource);
        Dashboard::registerDataSource(new JsonDataSource);
        Dashboard::registerDataSource(new RawSqlDataSource);
        Dashboard::registerDataSource(new RestApiDataSource);
    }

    /**
     * Register package migrations.
     */
    protected function registerMigrations(): void
    {
        if ($this->app->runningInConsole()) {
            $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        }
    }

    /**
     * Register publishable resources.
     */
    protected function registerPublishing(): void
    {
        if ($this->app->runningInConsole()) {
            // Config publishing
            $this->publishes([
                __DIR__.'/../config/dashboard-builder.php' => config_path('dashboard-builder.php'),
            ], 'dashboard-builder-config');

            // Migration publishing
            $this->publishes([
                __DIR__.'/../database/migrations' => database_path('migrations'),
            ], 'dashboard-builder-migrations');

            // Assets publishing
            $this->publishes([
                __DIR__.'/../public' => public_path('vendor/dashboard-builder'),
            ], 'dashboard-builder-assets');
        }
    }

    /**
     * Register package routes.
     */
    protected function registerRoutes(): void
    {
        if (file_exists(__DIR__.'/../routes/web.php')) {
            $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        }

        if (file_exists(__DIR__.'/../routes/api.php')) {
            $this->loadRoutesFrom(__DIR__.'/../routes/api.php');
        }
    }

    /**
     * Register Artisan commands.
     */
    protected function registerCommands(): void
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                InstallCommand::class,
                PublishCommand::class,
                ClearCacheCommand::class,
                MakeDashboardCommand::class,
                MakeWidgetCommand::class,
            ]);
        }
    }
}
