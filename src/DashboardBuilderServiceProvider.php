<?php

namespace Manggala\DashboardBuilder;

use Illuminate\Support\ServiceProvider;

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
                // Commands will be registered in Phase 7
            ]);
        }
    }
}
