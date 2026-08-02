<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $dashboardsTable = config('dashboard-builder.tables.dashboards', 'dashboards');
        $categoriesTable = config('dashboard-builder.tables.dashboard_categories', 'dashboard_categories');
        $tagsTable = config('dashboard-builder.tables.dashboard_tags', 'dashboard_tags');
        $pivotTable = config('dashboard-builder.tables.dashboard_tag_dashboard', 'dashboard_tag_dashboard');

        if (!Schema::hasTable($dashboardsTable)) {
            Schema::create($dashboardsTable, function (Blueprint $table) use ($categoriesTable) {
                $table->id();
                $table->string('name');
                $table->string('slug')->unique();
                $table->text('description')->nullable();
                $table->foreignId('category_id')->nullable()->constrained($categoriesTable)->nullOnDelete();
                $table->json('layout')->nullable();
                $table->json('theme')->nullable();
                $table->json('settings')->nullable();
                $table->boolean('is_favorite')->default(false);
                $table->boolean('is_archived')->default(false);
                $table->boolean('is_public')->default(false);
                $table->unsignedBigInteger('created_by')->nullable()->index();
                $table->timestamps();
                $table->softDeletes();
            });
        }

        if (!Schema::hasTable($pivotTable)) {
            Schema::create($pivotTable, function (Blueprint $table) use ($dashboardsTable, $tagsTable) {
                $table->foreignId('dashboard_id')->constrained($dashboardsTable)->cascadeOnDelete();
                $table->foreignId('tag_id')->constrained($tagsTable)->cascadeOnDelete();
                $table->primary(['dashboard_id', 'tag_id']);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $dashboardsTable = config('dashboard-builder.tables.dashboards', 'dashboards');
        $pivotTable = config('dashboard-builder.tables.dashboard_tag_dashboard', 'dashboard_tag_dashboard');

        Schema::dropIfExists($pivotTable);
        Schema::dropIfExists($dashboardsTable);
    }
};
