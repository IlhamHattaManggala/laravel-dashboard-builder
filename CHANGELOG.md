# Changelog

All notable changes to `manggala/laravel-dashboard-builder` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v1.0.6] - 2026-08-03

### Added
- 🎨 **Interactive Drag-and-Drop & Resizing Grid Canvas**: Visual controls overlay for moving widgets (left, right, up, down) and resizing width/height dynamically on `CanvasGrid.tsx`.
- 📅 **Global Date Range Picker Filter**: Centralized date range filtering (All Time, Today, Last 7 Days, This Month, Last 30 Days) on `TopToolbar.tsx`.
- 📄 **Export Dashboard to PDF & PNG Image**: Action handlers for downloading visual canvas to PDF and PNG image documents.
- 🔍 **Visual Query Builder Inspector UI**: Interactive Inspector UI form in `RightSidebar.tsx` for Model/Table selection, Aggregation Functions (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`), Target Column, and Date Grouping.
- 🔒 **Role-Based Access Control (RBAC) & Authorization**: Native `DashboardPolicy` class and Gate policy registration for fine-grained viewer vs editor access control.

---

## [v1.0.5] - 2026-08-03

### Added
- **Auto-Publish Inertia Views**: Included auto-publishable Inertia React page views (`Index.tsx`, `Create.tsx`, `Show.tsx`, `Edit.tsx`) under publish tag `dashboard-builder-views`.
- **Automatic Layout Sync**: Updated `DashboardController` `update()` method to automatically synchronize widget arrays to the `dashboard_widgets` database table.

### Fixed
- **Inertia Response Handling**: Handled `X-Inertia` request headers in `DashboardController` to return `RedirectResponse` instead of plain JSON when requested by Inertia.js.

---

## [v1.0.4] - 2026-08-03

### Fixed
- Fixed asset tracking in `.gitignore` so compiled public assets (`public/dashboard-builder.es.js`, `public/dashboard-builder.umd.js`) are tracked by Git and properly published by `php artisan dashboard:install`.

---

## [v1.0.3] - 2026-08-02

### Added
- Added helper method `Dashboard::version()` returning package active semantic version string.

---

## [v1.0.2] - 2026-08-02

### Fixed
- Fixed Packagist immutability release tag alignment.

---

## [v1.0.1] - 2026-08-02

### Added
- Added explicit support for Laravel 13 (`^11.0|^12.0|^13.0`) and Inertia v3 (`^1.0|^2.0|^3.0`).

---

## [v1.0.0] - 2026-08-02

### Added
- Initial public release of `manggala/laravel-dashboard-builder`.
- Expressive fluent PHP Builder API (`Dashboard::make()`, `CardWidget`, `LineChartWidget`, `TableWidget`).
- Data Source drivers: Eloquent, Query Builder, Collection, Static, JSON, Raw SQL, REST API.
- React/Inertia frontend components: TopToolbar, LeftSidebar, RightSidebar, CanvasGrid, StatCardRenderer, ApexChartRenderer, TableRenderer.
- Artisan commands: `dashboard:install`, `dashboard:publish`, `dashboard:clear-cache`, `make:dashboard`, `make:dashboard-widget`.
