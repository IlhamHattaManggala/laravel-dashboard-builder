<?php

namespace Manggala\DashboardBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DashboardWidgetSettings extends Model
{
    protected $fillable = [
        'widget_id',
        'key',
        'value',
    ];

    public function getTable(): string
    {
        return config('dashboard-builder.tables.dashboard_widget_settings', parent::getTable());
    }

    public function widget(): BelongsTo
    {
        return $this->belongsTo(DashboardWidget::class, 'widget_id');
    }
}
