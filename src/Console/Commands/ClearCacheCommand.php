<?php

namespace Manggala\DashboardBuilder\Console\Commands;

use Illuminate\Console\Command;
use Manggala\DashboardBuilder\Models\DashboardWidgetData;

class ClearCacheCommand extends Command
{
    protected $signature = 'dashboard:clear-cache {dashboard_id? : Optional ID of dashboard}';

    protected $description = 'Clear cached widget datasets for dashboards';

    public function handle(): int
    {
        $dashboardId = $this->argument('dashboard_id');

        $query = DashboardWidgetData::query();

        if ($dashboardId) {
            $query->whereHas('widget', function ($q) use ($dashboardId) {
                $q->where('dashboard_id', $dashboardId);
            });
        }

        $count = $query->delete();

        $this->info("Cleared {$count} cached widget data entries successfully.");

        return self::SUCCESS;
    }
}
