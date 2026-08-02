# Laravel Dashboard Builder 🚀

[![Latest Stable Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/IlhamHattaManggala/laravel-dashboard-builder)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/tests-34%20passed-brightgreen.svg)](https://github.com/IlhamHattaManggala/laravel-dashboard-builder)

**Laravel Dashboard Builder** (`manggala/laravel-dashboard-builder`) is a production-ready, highly modular, open-source dashboard builder package for Laravel applications.

It allows developers to create stunning, interactive, responsive dashboards visually through a drag-and-drop React/Inertia builder or programmatically using an expressive, fluent PHP API.

---

## 🌟 Key Features

* **Fluent PHP Builder API**: Expressive `Dashboard::make('Sales')` syntax inspired by Spatie & Filament.
* **Interactive Visual Drag & Drop Builder**: Built with React, TypeScript, Inertia.js, ApexCharts, and GridStack.
* **Extensible Widget Engine**: Support for Stat Cards, KPI Trends, Line Charts, Bar Charts, Area Charts, Pie Charts, Donut Charts, Data Tables, Markdown, HTML, and Web IFrames.
* **Dynamic Data Source Drivers**: Query Eloquent Models, DB Query Builder, Memory Collections, Raw SQL, JSON files, or REST API endpoints with caching support.
* **Powerful Aggregation Engine**: Count, Sum, Avg, Min, Max operations with date/time grouping (Hour, Day, Week, Month, Year) and filter conditions.
* **Theme & Responsive Breakpoints**: Light, Dark, System themes with custom primary colors and Desktop/Tablet/Mobile breakpoint layouts.
* **Export & Import Schema**: JSON schema import/export with validation.
* **Artisan Generators**: Generator commands `make:dashboard` and `make:dashboard-widget`.

---

## 📦 Installation

Install the package via Composer:

```bash
composer require manggala/laravel-dashboard-builder
```

Run the package installation command to publish configuration, database migrations, and assets:

```bash
php artisan dashboard:install
```

Optionally publish resources individually:

```bash
php artisan dashboard:publish --tag=config
php artisan dashboard:publish --tag=migrations
php artisan dashboard:publish --tag=assets
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

Generate new dashboards or custom widget classes:

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
