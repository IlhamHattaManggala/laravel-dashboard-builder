<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Manggala\DashboardBuilder\Facades\Dashboard;
use Manggala\DashboardBuilder\Models\DashboardCategory;
use Manggala\DashboardBuilder\Widgets\Charts\LineChartWidget;
use Manggala\DashboardBuilder\Widgets\Special\HtmlWidget;
use Manggala\DashboardBuilder\Widgets\Special\IframeWidget;
use Manggala\DashboardBuilder\Widgets\Special\MarkdownWidget;
use Manggala\DashboardBuilder\Widgets\Special\TableWidget;
use Manggala\DashboardBuilder\Widgets\Stats\CardWidget;

uses(RefreshDatabase::class);

it('builds CardWidget fluently', function () {
    $card = CardWidget::make('Active Users')
        ->description('Total active platform users')
        ->icon('user')
        ->color('#4f46e5')
        ->width(3)
        ->height(2)
        ->model(DashboardCategory::class)
        ->count();

    $arr = $card->toArray();

    expect($arr['type'])->toBe('card');
    expect($arr['title'])->toBe('Active Users');
    expect($arr['description'])->toBe('Total active platform users');
    expect($arr['icon'])->toBe('user');
    expect($arr['color'])->toBe('#4f46e5');
    expect($arr['w'])->toBe(3);
    expect($arr['h'])->toBe(2);
});

it('renders data using Eloquent model on CardWidget', function () {
    DashboardCategory::create(['name' => 'Tech', 'slug' => 'tech']);
    DashboardCategory::create(['name' => 'Finance', 'slug' => 'finance']);

    $card = CardWidget::make('Total Categories')
        ->model(DashboardCategory::class)
        ->count();

    $data = $card->renderData();

    expect($data['type'])->toBe('card');
    expect($data['title'])->toBe('Total Categories');
    expect($data['value'])->toBe(2);
});

it('builds LineChartWidget fluently', function () {
    $chart = LineChartWidget::make('Monthly Sales')
        ->model(DashboardCategory::class)
        ->sum('id')
        ->groupByMonth()
        ->width(6)
        ->height(4);

    $arr = $chart->toArray();

    expect($arr['type'])->toBe('line_chart');
    expect($arr['chart_type'])->toBe('line');
    expect($arr['group_by'])->toBe('month');
    expect($arr['w'])->toBe(6);
});

it('builds special content widgets fluently', function () {
    $table = TableWidget::make('Recent Orders')->columns(['id', 'total'])->perPage(5);
    $md = MarkdownWidget::make('Instructions')->content('# Welcome to Dashboard');
    $html = HtmlWidget::make('Notice')->html('<div class="alert">Alert</div>');
    $iframe = IframeWidget::make('Analytics Embed')->url('https://example.com/embed');

    expect($table->toArray()['per_page'])->toBe(5);
    expect($md->toArray()['content'])->toBe('# Welcome to Dashboard');
    expect($html->toArray()['html'])->toBe('<div class="alert">Alert</div>');
    expect($iframe->toArray()['url'])->toBe('https://example.com/embed');
});

it('assembles a full dashboard fluently via Dashboard facade', function () {
    DashboardCategory::create(['name' => 'Report A', 'slug' => 'rep-a']);

    $dashboard = Dashboard::make('Sales & Metrics')
        ->description('Realtime KPI overview')
        ->widget(
            CardWidget::make('Categories')
                ->model(DashboardCategory::class)
                ->count()
        )
        ->widget(
            LineChartWidget::make('Revenue Trend')
                ->model(DashboardCategory::class)
                ->sum('id')
                ->groupByMonth()
        );

    $arr = $dashboard->toArray();

    expect($arr['name'])->toBe('Sales & Metrics');
    expect($arr['widgets'])->toHaveCount(2);
    expect($arr['widgets'][0]['type'])->toBe('card');
    expect($arr['widgets'][1]['type'])->toBe('line_chart');
});
