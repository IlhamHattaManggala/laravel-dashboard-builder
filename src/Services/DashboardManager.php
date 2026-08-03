<?php

namespace Manggala\DashboardBuilder\Services;

use Illuminate\Support\Str;
use Manggala\DashboardBuilder\Contracts\DataSourceContract;
use Manggala\DashboardBuilder\Contracts\ExportContract;
use Manggala\DashboardBuilder\Contracts\ThemeContract;
use Manggala\DashboardBuilder\Contracts\WidgetContract;
use Manggala\DashboardBuilder\Core\DashboardRegistry;

class DashboardManager
{
    protected DashboardRegistry $registry;

    protected string $name = '';

    protected string $slug = '';

    protected array $widgets = [];

    protected array $theme = [];

    protected ?string $description = null;

    public function __construct(?DashboardRegistry $registry = null)
    {
        $this->registry = $registry ?? new DashboardRegistry;
    }

    /**
     * Get current version of Laravel Dashboard Builder.
     */
    public function version(): string
    {
        return '1.0.5';
    }

    /**
     * Get underlying registry instance.
     */
    public function registry(): DashboardRegistry
    {
        return $this->registry;
    }

    /**
     * Start building a dashboard fluently.
     */
    public function make(string $name): self
    {
        $instance = new self($this->registry);
        $instance->name = $name;
        $instance->slug = Str::slug($name);

        return $instance;
    }

    /**
     * Set dashboard description.
     */
    public function description(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Attach a widget definition.
     */
    public function widget(mixed $widget): self
    {
        $this->widgets[] = $widget;

        return $this;
    }

    /**
     * Set dashboard theme.
     */
    public function theme(array $themeConfig): self
    {
        $this->theme = $themeConfig;

        return $this;
    }

    /**
     * Register custom widget in registry.
     */
    public function registerWidget(WidgetContract $widget): self
    {
        $this->registry->registerWidget($widget);

        return $this;
    }

    /**
     * Register custom data source in registry.
     */
    public function registerDataSource(DataSourceContract $dataSource): self
    {
        $this->registry->registerDataSource($dataSource);

        return $this;
    }

    /**
     * Register custom theme in registry.
     */
    public function registerTheme(ThemeContract $theme): self
    {
        $this->registry->registerTheme($theme);

        return $this;
    }

    /**
     * Register custom export in registry.
     */
    public function registerExport(ExportContract $export): self
    {
        $this->registry->registerExport($export);

        return $this;
    }

    /**
     * Get dashboard array structure.
     */
    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'theme' => $this->theme,
            'widgets' => array_map(function ($w) {
                return method_exists($w, 'toArray') ? $w->toArray() : $w;
            }, $this->widgets),
        ];
    }
}
