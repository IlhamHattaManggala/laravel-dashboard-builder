<?php

namespace Manggala\DashboardBuilder\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static \Manggala\DashboardBuilder\Services\DashboardManager make(string $name)
 *
 * @see \Manggala\DashboardBuilder\Services\DashboardManager
 */
class Dashboard extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'dashboard-builder';
    }
}
