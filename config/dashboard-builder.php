<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Dashboard Builder Route Prefix & Domain
    |--------------------------------------------------------------------------
    |
    | Define the URL path prefix, domain, and middleware applied to all
    | dashboard builder routes.
    |
    */

    'path' => env('DASHBOARD_BUILDER_PATH', 'dashboard-builder'),

    'domain' => env('DASHBOARD_BUILDER_DOMAIN', null),

    'middleware' => [
        'web',
        'auth',
    ],

    'api_middleware' => [
        'api',
        'auth:sanctum',
    ],

    /*
    |--------------------------------------------------------------------------
    | Database Table Names
    |--------------------------------------------------------------------------
    |
    | Map of internal database table names used by the package.
    | You can customize these if you wish to avoid table name collisions.
    |
    */

    'tables' => [
        'dashboards' => 'dashboards',
        'dashboard_widgets' => 'dashboard_widgets',
        'dashboard_widget_data' => 'dashboard_widget_data',
        'dashboard_layouts' => 'dashboard_layouts',
        'dashboard_permissions' => 'dashboard_permissions',
        'dashboard_categories' => 'dashboard_categories',
        'dashboard_tags' => 'dashboard_tags',
        'dashboard_tag_dashboard' => 'dashboard_tag_dashboard',
        'dashboard_widget_settings' => 'dashboard_widget_settings',
    ],

    /*
    |--------------------------------------------------------------------------
    | Default Theme Configuration
    |--------------------------------------------------------------------------
    |
    | Default aesthetic preferences for newly created dashboards.
    | Supports 'light', 'dark', or 'system'.
    |
    */

    'theme' => [
        'mode' => 'system', // light, dark, system
        'primary_color' => '#4f46e5', // Indigo-600
        'radius' => '0.5rem',
        'typography' => 'Inter, sans-serif',
    ],

    /*
    |--------------------------------------------------------------------------
    | Data Caching Settings
    |--------------------------------------------------------------------------
    |
    | Configure query and widget data caching to optimize performance.
    |
    */

    'cache' => [
        'enabled' => env('DASHBOARD_BUILDER_CACHE_ENABLED', true),
        'ttl_seconds' => env('DASHBOARD_BUILDER_CACHE_TTL', 300), // 5 minutes
        'store' => env('DASHBOARD_BUILDER_CACHE_STORE', null),
    ],

    /*
    |--------------------------------------------------------------------------
    | Realtime & Polling Settings
    |--------------------------------------------------------------------------
    |
    | Support for auto-refresh via polling or Laravel Reverb WebSockets.
    |
    */

    'realtime' => [
        'driver' => env('DASHBOARD_BUILDER_REALTIME_DRIVER', 'polling'), // 'polling', 'reverb', 'none'
        'default_polling_interval' => 30, // in seconds
        'reverb_channel_prefix' => 'dashboard-builder.',
    ],

];
