<?php

namespace Manggala\DashboardBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class DashboardTag extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'color',
    ];

    public function getTable(): string
    {
        return config('dashboard-builder.tables.dashboard_tags', parent::getTable());
    }

    public function dashboards(): BelongsToMany
    {
        $pivotTable = config('dashboard-builder.tables.dashboard_tag_dashboard', 'dashboard_tag_dashboard');
        return $this->belongsToMany(Dashboard::class, $pivotTable, 'tag_id', 'dashboard_id');
    }
}
