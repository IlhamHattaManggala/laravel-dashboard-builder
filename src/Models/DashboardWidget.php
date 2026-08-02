<?php

namespace Manggala\DashboardBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class DashboardWidget extends Model
{
    protected $fillable = [
        'dashboard_id',
        'type',
        'title',
        'x',
        'y',
        'w',
        'h',
        'data_source_type',
        'data_source_config',
        'settings',
        'refresh_interval',
        'order',
    ];

    protected $casts = [
        'data_source_config' => 'array',
        'settings' => 'array',
        'x' => 'integer',
        'y' => 'integer',
        'w' => 'integer',
        'h' => 'integer',
        'refresh_interval' => 'integer',
        'order' => 'integer',
    ];

    public function getTable(): string
    {
        return config('dashboard-builder.tables.dashboard_widgets', parent::getTable());
    }

    public function dashboard(): BelongsTo
    {
        return $this->belongsTo(Dashboard::class, 'dashboard_id');
    }

    public function widgetData(): HasOne
    {
        return $this->hasOne(DashboardWidgetData::class, 'widget_id');
    }

    public function settingsKeyValues(): HasMany
    {
        return $this->hasMany(DashboardWidgetSettings::class, 'widget_id');
    }
}
