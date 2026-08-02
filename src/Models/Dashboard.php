<?php

namespace Manggala\DashboardBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Dashboard extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'category_id',
        'layout',
        'theme',
        'settings',
        'is_favorite',
        'is_archived',
        'is_public',
        'created_by',
    ];

    protected $casts = [
        'layout' => 'array',
        'theme' => 'array',
        'settings' => 'array',
        'is_favorite' => 'boolean',
        'is_archived' => 'boolean',
        'is_public' => 'boolean',
    ];

    public function getTable(): string
    {
        return config('dashboard-builder.tables.dashboards', parent::getTable());
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(DashboardCategory::class, 'category_id');
    }

    public function tags(): BelongsToMany
    {
        $pivotTable = config('dashboard-builder.tables.dashboard_tag_dashboard', 'dashboard_tag_dashboard');
        return $this->belongsToMany(DashboardTag::class, $pivotTable, 'dashboard_id', 'tag_id');
    }

    public function widgets(): HasMany
    {
        return $this->hasMany(DashboardWidget::class, 'dashboard_id')->orderBy('order');
    }

    public function layouts(): HasMany
    {
        return $this->hasMany(DashboardLayout::class, 'dashboard_id');
    }

    public function permissions(): HasMany
    {
        return $this->hasMany(DashboardPermission::class, 'dashboard_id');
    }
}
