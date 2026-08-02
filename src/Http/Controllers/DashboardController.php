<?php

namespace Manggala\DashboardBuilder\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Manggala\DashboardBuilder\Models\Dashboard;

class DashboardController extends Controller
{
    /**
     * Display a listing of the dashboards.
     */
    public function index(Request $request): InertiaResponse|JsonResponse
    {
        $query = Dashboard::with(['category', 'tags', 'widgets']);

        if ($search = $request->input('search')) {
            $query->where('name', 'LIKE', "%{$search}%")
                ->orWhere('description', 'LIKE', "%{$search}%");
        }

        if ($categoryId = $request->input('category_id')) {
            $query->where('category_id', $categoryId);
        }

        if ($request->boolean('favorites_only')) {
            $query->where('is_favorite', true);
        }

        $dashboards = $query->latest()->paginate(15);

        if ($request->wantsJson()) {
            return response()->json($dashboards);
        }

        return Inertia::render('DashboardBuilder/Index', [
            'dashboards' => $dashboards,
        ]);
    }

    /**
     * Show the form for creating a new dashboard.
     */
    public function create(): InertiaResponse
    {
        return Inertia::render('DashboardBuilder/Create');
    }

    /**
     * Store a newly created dashboard in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'nullable|integer',
            'layout' => 'nullable|array',
            'theme' => 'nullable|array',
            'settings' => 'nullable|array',
            'is_public' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['name']).'-'.Str::random(5);
        $validated['created_by'] = auth()->id();

        $dashboard = Dashboard::create($validated);

        return response()->json([
            'message' => 'Dashboard created successfully',
            'dashboard' => $dashboard->load(['category', 'tags', 'widgets']),
        ], 201);
    }

    /**
     * Display the specified dashboard.
     */
    public function show(Dashboard $dashboard, Request $request): InertiaResponse|JsonResponse
    {
        $dashboard->load(['category', 'tags', 'widgets.widgetData', 'layouts', 'permissions']);

        if ($request->wantsJson()) {
            return response()->json($dashboard);
        }

        return Inertia::render('DashboardBuilder/Show', [
            'dashboard' => $dashboard,
        ]);
    }

    /**
     * Show the form for editing the specified dashboard.
     */
    public function edit(Dashboard $dashboard): InertiaResponse
    {
        $dashboard->load(['category', 'tags', 'widgets', 'layouts']);

        return Inertia::render('DashboardBuilder/Edit', [
            'dashboard' => $dashboard,
        ]);
    }

    /**
     * Update the specified dashboard in storage.
     */
    public function update(Request $request, Dashboard $dashboard): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'nullable|integer',
            'layout' => 'nullable|array',
            'theme' => 'nullable|array',
            'settings' => 'nullable|array',
            'is_public' => 'boolean',
        ]);

        if (isset($validated['name']) && $validated['name'] !== $dashboard->name) {
            $validated['slug'] = Str::slug($validated['name']).'-'.Str::random(5);
        }

        $dashboard->update($validated);

        return response()->json([
            'message' => 'Dashboard updated successfully',
            'dashboard' => $dashboard->fresh(['category', 'tags', 'widgets']),
        ]);
    }

    /**
     * Soft delete the specified dashboard.
     */
    public function destroy(Dashboard $dashboard): JsonResponse
    {
        $dashboard->delete();

        return response()->json([
            'message' => 'Dashboard deleted successfully',
        ]);
    }

    /**
     * Duplicate an existing dashboard and its widgets.
     */
    public function duplicate(Dashboard $dashboard): JsonResponse
    {
        $dashboard->load('widgets');

        $newDashboard = $dashboard->replicate();
        $newDashboard->name = $dashboard->name.' (Copy)';
        $newDashboard->slug = Str::slug($newDashboard->name).'-'.Str::random(5);
        $newDashboard->created_at = now();
        $newDashboard->updated_at = now();
        $newDashboard->save();

        foreach ($dashboard->widgets as $widget) {
            $newWidget = $widget->replicate();
            $newWidget->dashboard_id = $newDashboard->id;
            $newWidget->save();
        }

        return response()->json([
            'message' => 'Dashboard duplicated successfully',
            'dashboard' => $newDashboard->load('widgets'),
        ], 201);
    }

    /**
     * Toggle archive status.
     */
    public function archive(Dashboard $dashboard): JsonResponse
    {
        $dashboard->update(['is_archived' => ! $dashboard->is_archived]);

        return response()->json([
            'message' => $dashboard->is_archived ? 'Dashboard archived' : 'Dashboard restored',
            'is_archived' => $dashboard->is_archived,
        ]);
    }

    /**
     * Toggle favorite status.
     */
    public function favorite(Dashboard $dashboard): JsonResponse
    {
        $dashboard->update(['is_favorite' => ! $dashboard->is_favorite]);

        return response()->json([
            'message' => $dashboard->is_favorite ? 'Added to favorites' : 'Removed from favorites',
            'is_favorite' => $dashboard->is_favorite,
        ]);
    }
}
