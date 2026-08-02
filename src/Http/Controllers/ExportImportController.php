<?php

namespace Manggala\DashboardBuilder\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use InvalidArgumentException;
use Manggala\DashboardBuilder\Models\Dashboard;

class ExportImportController extends Controller
{
    /**
     * Export dashboard to JSON or specified format.
     */
    public function export(Dashboard $dashboard, Request $request): JsonResponse
    {
        $dashboard->load(['category', 'tags', 'widgets']);

        $exportData = [
            'version' => '1.0.0',
            'name' => $dashboard->name,
            'description' => $dashboard->description,
            'layout' => $dashboard->layout,
            'theme' => $dashboard->theme,
            'settings' => $dashboard->settings,
            'widgets' => $dashboard->widgets->map(function ($widget) {
                return [
                    'type' => $widget->type,
                    'title' => $widget->title,
                    'x' => $widget->x,
                    'y' => $widget->y,
                    'w' => $widget->w,
                    'h' => $widget->h,
                    'data_source_type' => $widget->data_source_type,
                    'data_source_config' => $widget->data_source_config,
                    'settings' => $widget->settings,
                ];
            })->toArray(),
        ];

        return response()->json($exportData, 200, [
            'Content-Disposition' => 'attachment; filename="'.Str::slug($dashboard->name).'-export.json"',
        ]);
    }

    /**
     * Import dashboard from JSON schema payload.
     */
    public function import(Request $request): JsonResponse
    {
        $payload = $request->input('schema');

        if (is_string($payload)) {
            $payload = json_decode($payload, true);
        }

        if (! is_array($payload) || ! isset($payload['name'])) {
            throw new InvalidArgumentException('Invalid dashboard import JSON schema.');
        }

        $dashboard = Dashboard::create([
            'name' => $payload['name'].' (Imported)',
            'slug' => Str::slug($payload['name']).'-'.Str::random(5),
            'description' => $payload['description'] ?? null,
            'layout' => $payload['layout'] ?? null,
            'theme' => $payload['theme'] ?? null,
            'settings' => $payload['settings'] ?? null,
            'created_by' => auth()->id(),
        ]);

        if (isset($payload['widgets']) && is_array($payload['widgets'])) {
            foreach ($payload['widgets'] as $w) {
                $dashboard->widgets()->create([
                    'type' => $w['type'] ?? 'card',
                    'title' => $w['title'] ?? 'Widget',
                    'x' => $w['x'] ?? 0,
                    'y' => $w['y'] ?? 0,
                    'w' => $w['w'] ?? 4,
                    'h' => $w['h'] ?? 4,
                    'data_source_type' => $w['data_source_type'] ?? 'eloquent',
                    'data_source_config' => $w['data_source_config'] ?? null,
                    'settings' => $w['settings'] ?? null,
                ]);
            }
        }

        return response()->json([
            'message' => 'Dashboard imported successfully',
            'dashboard' => $dashboard->load('widgets'),
        ], 201);
    }
}
