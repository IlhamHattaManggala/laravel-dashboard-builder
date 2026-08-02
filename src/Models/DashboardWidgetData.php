<?php

namespace Manggala\DashboardBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DashboardWidgetData extends Model
{
    protected $table = 'dashboard_widget_data';

    protected $fillable = [
        'widget_id',
        'data',
        'cached_at',
        'expires_at',
    ];

    protected $casts = [
        'data' => 'array',
        'cached_at' => 'datetime',
        'expires_at' => 'datetime',
    ];

    public function getTable(): string
    {
        return config('dashboard-builder.tables.dashboard_widget_data', parent::getTable());
    }

    public function widget(): BelongsTo
    {
        return $this->belongsTo(DashboardWidget::class, 'widget_id');
    }
}
