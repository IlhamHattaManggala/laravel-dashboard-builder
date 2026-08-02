<?php

namespace Manggala\DashboardBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DashboardCategory extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'color',
        'icon',
    ];

    public function getTable(): string
    {
        return config('dashboard-builder.tables.dashboard_categories', parent::getTable());
    }

    public function dashboards(): HasMany
    {
        return $this->hasMany(Dashboard::class, 'category_id');
    }
}
