<?php

namespace Manggala\DashboardBuilder\Facades;

use Illuminate\Support\Facades\Facade;
use Manggala\DashboardBuilder\Services\DashboardManager;

/**
 * @method static \Manggala\DashboardBuilder\Services\DashboardManager make(string $name)
 *
 * @see DashboardManager
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
