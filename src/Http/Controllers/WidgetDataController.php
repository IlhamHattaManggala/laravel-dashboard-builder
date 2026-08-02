<?php

namespace Manggala\DashboardBuilder\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Manggala\DashboardBuilder\Facades\Dashboard;
use Manggala\DashboardBuilder\Models\DashboardWidget;

class WidgetDataController extends Controller
{
    /**
     * Fetch or calculate dataset for a specific widget.
     */
    public function show(DashboardWidget $widget, Request $request): JsonResponse
    {
        $dataSourceType = $widget->data_source_type;
        $config = is_string($widget->data_source_config)
            ? json_decode($widget->data_source_config, true)
            : ($widget->data_source_config ?? []);

        if (Dashboard::registry()->hasDataSource($dataSourceType)) {
            $dataSource = Dashboard::registry()->getDataSource($dataSourceType);
            $result = $dataSource->fetchData($config);
        } else {
            $result = [
                'type' => $widget->type,
                'title' => $widget->title,
                'config' => $config,
            ];
        }

        // Persist cached result
        $widget->widgetData()->updateOrCreate(
            ['widget_id' => $widget->id],
            [
                'data' => is_array($result) ? json_encode($result) : (string) $result,
                'cached_at' => now(),
                'expires_at' => now()->addSeconds($widget->refresh_interval ?? 300),
            ]
        );

        return response()->json([
            'widget_id' => $widget->id,
            'title' => $widget->title,
            'data' => $result,
        ]);
    }

    /**
     * Force refresh data for a widget.
     */
    public function refresh(DashboardWidget $widget, Request $request): JsonResponse
    {
        return $this->show($widget, $request);
    }
}
