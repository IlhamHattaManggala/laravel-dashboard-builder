<?php

use Manggala\DashboardBuilder\Contracts\DataSourceContract;
use Manggala\DashboardBuilder\Contracts\ExportContract;
use Manggala\DashboardBuilder\Contracts\ThemeContract;
use Manggala\DashboardBuilder\Contracts\WidgetContract;
use Manggala\DashboardBuilder\Core\DashboardRegistry;
use Manggala\DashboardBuilder\Facades\Dashboard;

class TestWidget implements WidgetContract
{
    public function getType(): string
    {
        return 'test_widget';
    }

    public function getTitle(): string
    {
        return 'Test Widget';
    }

    public function getCategory(): string
    {
        return 'general';
    }

    public function renderData(array $config): array
    {
        return ['status' => 'ok'];
    }

    public function toArray(): array
    {
        return ['type' => $this->getType(), 'title' => $this->getTitle()];
    }
}

class TestDataSource implements DataSourceContract
{
    public function getType(): string
    {
        return 'test_datasource';
    }

    public function getName(): string
    {
        return 'Test Data Source';
    }

    public function fetchData(array $config): array
    {
        return ['data' => [1, 2, 3]];
    }
}

class TestTheme implements ThemeContract
{
    public function getName(): string
    {
        return 'glass_theme';
    }

    public function getThemeConfig(): array
    {
        return ['backdrop' => 'blur'];
    }
}

class TestExport implements ExportContract
{
    public function getFormat(): string
    {
        return 'pdf';
    }

    public function export(array $dashboardData): mixed
    {
        return 'PDF_BINARY_CONTENT';
    }
}

it('registers and retrieves widgets in registry', function () {
    $registry = new DashboardRegistry;
    $widget = new TestWidget;

    $registry->registerWidget($widget);

    expect($registry->hasWidget('test_widget'))->toBeTrue();
    expect($registry->getWidget('test_widget'))->toBe($widget);
    expect($registry->getWidgets())->toHaveCount(1);
});

it('registers and retrieves data sources, themes, and exports in registry', function () {
    $registry = new DashboardRegistry;
    $ds = new TestDataSource;
    $theme = new TestTheme;
    $export = new TestExport;

    $registry->registerDataSource($ds)
        ->registerTheme($theme)
        ->registerExport($export);

    expect($registry->hasDataSource('test_datasource'))->toBeTrue();
    expect($registry->getDataSource('test_datasource'))->toBe($ds);

    expect($registry->hasTheme('glass_theme'))->toBeTrue();
    expect($registry->getTheme('glass_theme'))->toBe($theme);

    expect($registry->hasExport('pdf'))->toBeTrue();
    expect($registry->getExport('pdf'))->toBe($export);
});

it('throws exception when requesting unregistered components', function () {
    $registry = new DashboardRegistry;
    $registry->getWidget('non_existent');
})->throws(InvalidArgumentException::class);

it('interacts with registry fluently via Dashboard facade', function () {
    Dashboard::registerWidget(new TestWidget);
    Dashboard::registerDataSource(new TestDataSource);

    expect(Dashboard::registry()->hasWidget('test_widget'))->toBeTrue();
    expect(Dashboard::registry()->hasDataSource('test_datasource'))->toBeTrue();

    $dashboard = Dashboard::make('Executive Sales')
        ->description('Annual Performance')
        ->widget(new TestWidget)
        ->theme(['mode' => 'dark']);

    $arr = $dashboard->toArray();
    expect($arr['name'])->toBe('Executive Sales');
    expect($arr['slug'])->toBe('executive-sales');
    expect($arr['description'])->toBe('Annual Performance');
    expect($arr['widgets'])->toHaveCount(1);
    expect($arr['widgets'][0]['type'])->toBe('test_widget');
});
