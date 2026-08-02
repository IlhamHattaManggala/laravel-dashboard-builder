<?php

namespace Manggala\DashboardBuilder\Facades;

use Illuminate\Support\Facades\Facade;
use Manggala\DashboardBuilder\Services\DashboardManager;

/**
 * @method static \Manggala\DashboardBuilder\Services\DashboardManager make(string $name)
 * @method static \Manggala\DashboardBuilder\Core\DashboardRegistry registry()
 * @method static \Manggala\DashboardBuilder\Services\DashboardManager registerWidget(\Manggala\DashboardBuilder\Contracts\WidgetContract $widget)
 * @method static \Manggala\DashboardBuilder\Services\DashboardManager registerDataSource(\Manggala\DashboardBuilder\Contracts\DataSourceContract $dataSource)
 * @method static \Manggala\DashboardBuilder\Services\DashboardManager registerTheme(\Manggala\DashboardBuilder\Contracts\ThemeContract $theme)
 * @method static \Manggala\DashboardBuilder\Services\DashboardManager registerExport(\Manggala\DashboardBuilder\Contracts\ExportContract $export)
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
