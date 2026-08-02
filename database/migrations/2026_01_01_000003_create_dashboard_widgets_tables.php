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
        $widgetsTable = config('dashboard-builder.tables.dashboard_widgets', 'dashboard_widgets');
        $widgetDataTable = config('dashboard-builder.tables.dashboard_widget_data', 'dashboard_widget_data');
        $layoutsTable = config('dashboard-builder.tables.dashboard_layouts', 'dashboard_layouts');
        $settingsTable = config('dashboard-builder.tables.dashboard_widget_settings', 'dashboard_widget_settings');

        if (!Schema::hasTable($widgetsTable)) {
            Schema::create($widgetsTable, function (Blueprint $table) use ($dashboardsTable) {
                $table->id();
                $table->foreignId('dashboard_id')->constrained($dashboardsTable)->cascadeOnDelete();
                $table->string('type'); // stat, card, line_chart, bar_chart, table, etc.
                $table->string('title');
                $table->integer('x')->default(0);
                $table->integer('y')->default(0);
                $table->integer('w')->default(4); // width in grid units
                $table->integer('h')->default(4); // height in grid units
                $table->string('data_source_type')->default('eloquent'); // eloquent, query_builder, static, json, rest_api, raw_sql
                $table->json('data_source_config')->nullable();
                $table->json('settings')->nullable();
                $table->integer('refresh_interval')->nullable(); // in seconds
                $table->integer('order')->default(0);
                $table->timestamps();
            });
        }

        if (!Schema::hasTable($widgetDataTable)) {
            Schema::create($widgetDataTable, function (Blueprint $table) use ($widgetsTable) {
                $table->id();
                $table->foreignId('widget_id')->constrained($widgetsTable)->cascadeOnDelete();
                $table->longText('data')->nullable();
                $table->timestamp('cached_at')->nullable();
                $table->timestamp('expires_at')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable($layoutsTable)) {
            Schema::create($layoutsTable, function (Blueprint $table) use ($dashboardsTable) {
                $table->id();
                $table->foreignId('dashboard_id')->constrained($dashboardsTable)->cascadeOnDelete();
                $table->string('device_type')->default('desktop'); // desktop, tablet, mobile
                $table->json('layout_json');
                $table->timestamps();
            });
        }

        if (!Schema::hasTable($settingsTable)) {
            Schema::create($settingsTable, function (Blueprint $table) use ($widgetsTable) {
                $table->id();
                $table->foreignId('widget_id')->constrained($widgetsTable)->cascadeOnDelete();
                $table->string('key');
                $table->text('value')->nullable();
                $table->timestamps();
                $table->unique(['widget_id', 'key']);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $widgetsTable = config('dashboard-builder.tables.dashboard_widgets', 'dashboard_widgets');
        $widgetDataTable = config('dashboard-builder.tables.dashboard_widget_data', 'dashboard_widget_data');
        $layoutsTable = config('dashboard-builder.tables.dashboard_layouts', 'dashboard_layouts');
        $settingsTable = config('dashboard-builder.tables.dashboard_widget_settings', 'dashboard_widget_settings');

        Schema::dropIfExists($settingsTable);
        Schema::dropIfExists($layoutsTable);
        Schema::dropIfExists($widgetDataTable);
        Schema::dropIfExists($widgetsTable);
    }
};
