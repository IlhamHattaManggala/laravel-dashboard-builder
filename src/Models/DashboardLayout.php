<?php

namespace Manggala\DashboardBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DashboardLayout extends Model
{
    protected $fillable = [
        'dashboard_id',
        'device_type',
        'layout_json',
    ];

    protected $casts = [
        'layout_json' => 'array',
    ];

    public function getTable(): string
    {
        return config('dashboard-builder.tables.dashboard_layouts', parent::getTable());
    }

    public function dashboard(): BelongsTo
    {
        return $this->belongsTo(Dashboard::class, 'dashboard_id');
    }
}
