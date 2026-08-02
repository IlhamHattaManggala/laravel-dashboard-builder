<?php

namespace Manggala\DashboardBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DashboardPermission extends Model
{
    protected $fillable = [
        'dashboard_id',
        'entity_type',
        'entity_id',
        'permission_level',
    ];

    public function getTable(): string
    {
        return config('dashboard-builder.tables.dashboard_permissions', parent::getTable());
    }

    public function dashboard(): BelongsTo
    {
        return $this->belongsTo(Dashboard::class, 'dashboard_id');
    }
}
