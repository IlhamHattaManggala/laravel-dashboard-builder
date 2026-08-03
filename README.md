# Laravel Dashboard Builder 🚀

[![Latest Stable Version](https://img.shields.io/badge/version-1.0.6-blue.svg)](https://github.com/IlhamHattaManggala/laravel-dashboard-builder)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/tests-34%20passed-brightgreen.svg)](https://github.com/IlhamHattaManggala/laravel-dashboard-builder)

**Laravel Dashboard Builder** (`manggala/laravel-dashboard-builder`) is a production-ready, highly modular, open-source dashboard builder package for Laravel applications.

It allows developers to create stunning, interactive, responsive dashboards visually through a drag-and-drop React/Inertia builder or programmatically using an expressive, fluent PHP API.

---

## 🌟 Key Features

* **Laravel & PHP Support**: Fully compatible with Laravel 11.x, 12.x, and 13.x (PHP 8.3+) & Inertia.js v1, v2, v3.
* **Interactive Drag-and-Drop Canvas**: Visual layout canvas editor with interactive widget positioning (move up/down/left/right) & dynamic resizing handles.
* **Global Date Range Picker**: Centralized date range filtering (All Time, Today, Last 7 Days, This Month, Last 30 Days) propagated across widgets.
* **Export Options**: Export visual dashboards to PNG/PDF print documents & JSON schema.
* **Visual Query Builder Inspector**: Configure Model/Table sources, Aggregation Functions (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`), target columns, and Date Grouping (`groupByDay`, `groupByMonth`, `groupByYear`) visually from the inspector UI.
* **RBAC & Policy Authorization**: Native Laravel Gate/Policy integration (`DashboardPolicy`) for fine-grained viewer vs editor access control.
* **Fluent PHP Builder API**: Expressive `Dashboard::make('Sales')` syntax inspired by Spatie & Filament.
* **Dynamic Data Source Drivers**: Query Eloquent Models, DB Query Builder, Memory Collections, Raw SQL, JSON files, or REST API endpoints with caching support.
* **Artisan Generators & Auto-Publish Views**: Generator commands `make:dashboard`, `make:dashboard-widget`, and publish tags for Inertia pages (`dashboard-builder-views`).

---

## 📦 Installation

Install the package via Composer:

```bash
composer require manggala/laravel-dashboard-builder
```

Run the package installation command to publish configuration, database migrations, assets, and Inertia React page views:

```bash
php artisan dashboard:install
```

Optionally publish resources individually:

```bash
php artisan dashboard:publish --tag=config
php artisan dashboard:publish --tag=migrations
php artisan dashboard:publish --tag=assets
php artisan dashboard:publish --tag=views
```

---

## 🔒 Authorization (Role-Based Access Control)

The package automatically registers `DashboardPolicy` for authorization. You can authorize actions in your application controller or gates:

```php
use Manggala\DashboardBuilder\Models\Dashboard;
use Illuminate\Support\Facades\Gate;

// Check authorization before rendering or editing
Gate::authorize('update', $dashboard);
```

---

## 🚀 Quick Start (Fluent PHP API)

Define dashboards fluently in PHP:

```php
use Manggala\DashboardBuilder\Facades\Dashboard;
use Manggala\DashboardBuilder\Widgets\Stats\CardWidget;
use Manggala\DashboardBuilder\Widgets\Charts\LineChartWidget;
use Manggala\DashboardBuilder\Widgets\Special\TableWidget;
use App\Models\User;
use App\Models\Order;

$salesDashboard = Dashboard::make('Sales & Revenue')
    ->description('Monthly sales metrics and performance breakdown')
    ->widget(
        CardWidget::make('Total Users')
            ->model(User::class)
            ->count()
            ->icon('users')
            ->width(3)
            ->height(2)
    )
    ->widget(
        LineChartWidget::make('Revenue Trend')
            ->model(Order::class)
            ->sum('total_amount')
            ->groupByMonth()
            ->width(6)
            ->height(4)
    )
    ->widget(
        TableWidget::make('Recent Orders')
            ->table('orders')
            ->columns(['id', 'user_id', 'total_amount', 'status'])
            ->perPage(5)
            ->width(12)
    );

// Convert to array or JSON payload
$payload = $salesDashboard->toArray();
```

---

## 🛠️ Artisan Commands

Generate new dashboards, custom widgets, or publish resources:

```bash
# Generate a new Dashboard class in app/Dashboards/
php artisan make:dashboard SalesDashboard

# Generate a new custom Widget class in app/Dashboards/Widgets/
php artisan make:dashboard-widget RevenueWidget

# Clear cached widget datasets
php artisan dashboard:clear-cache
```

---

## 🧪 Testing & Code Quality

Run the automated test suite using Pest PHP:

```bash
vendor/bin/pest
```

Check code formatting with Laravel Pint:

```bash
vendor/bin/pint --test
```

Build production frontend assets:

```bash
npm run build
```

---

## 📜 License

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.
