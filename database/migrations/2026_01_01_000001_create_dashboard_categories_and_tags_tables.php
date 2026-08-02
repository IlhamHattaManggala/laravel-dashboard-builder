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
        $categoriesTable = config('dashboard-builder.tables.dashboard_categories', 'dashboard_categories');
        $tagsTable = config('dashboard-builder.tables.dashboard_tags', 'dashboard_tags');

        if (!Schema::hasTable($categoriesTable)) {
            Schema::create($categoriesTable, function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('slug')->unique();
                $table->text('description')->nullable();
                $table->string('color', 30)->nullable();
                $table->string('icon', 50)->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable($tagsTable)) {
            Schema::create($tagsTable, function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('slug')->unique();
                $table->string('color', 30)->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $categoriesTable = config('dashboard-builder.tables.dashboard_categories', 'dashboard_categories');
        $tagsTable = config('dashboard-builder.tables.dashboard_tags', 'dashboard_tags');

        Schema::dropIfExists($tagsTable);
        Schema::dropIfExists($categoriesTable);
    }
};
