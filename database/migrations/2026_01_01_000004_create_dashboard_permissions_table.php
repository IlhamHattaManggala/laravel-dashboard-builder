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
        $permissionsTable = config('dashboard-builder.tables.dashboard_permissions', 'dashboard_permissions');

        if (! Schema::hasTable($permissionsTable)) {
            Schema::create($permissionsTable, function (Blueprint $table) use ($dashboardsTable) {
                $table->id();
                $table->foreignId('dashboard_id')->constrained($dashboardsTable)->cascadeOnDelete();
                $table->string('entity_type'); // 'user', 'role', 'team', 'public'
                $table->string('entity_id')->nullable(); // user_id or role_name or team_id
                $table->string('permission_level')->default('view'); // 'view', 'edit', 'admin'
                $table->timestamps();

                $table->index(['dashboard_id', 'entity_type', 'entity_id']);
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $permissionsTable = config('dashboard-builder.tables.dashboard_permissions', 'dashboard_permissions');
        Schema::dropIfExists($permissionsTable);
    }
};
