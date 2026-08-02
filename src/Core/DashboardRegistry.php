<?php

namespace Manggala\DashboardBuilder\Core;

use InvalidArgumentException;
use Manggala\DashboardBuilder\Contracts\DataSourceContract;
use Manggala\DashboardBuilder\Contracts\ExportContract;
use Manggala\DashboardBuilder\Contracts\ThemeContract;
use Manggala\DashboardBuilder\Contracts\WidgetContract;

class DashboardRegistry
{
    /**
     * @var array<string, WidgetContract>
     */
    protected array $widgets = [];

    /**
     * @var array<string, DataSourceContract>
     */
    protected array $dataSources = [];

    /**
     * @var array<string, ThemeContract>
     */
    protected array $themes = [];

    /**
     * @var array<string, ExportContract>
     */
    protected array $exports = [];

    /**
     * Register a new widget into the registry.
     */
    public function registerWidget(WidgetContract $widget): self
    {
        $this->widgets[$widget->getType()] = $widget;

        return $this;
    }

    /**
     * Get a registered widget by type.
     */
    public function getWidget(string $type): WidgetContract
    {
        if (! $this->hasWidget($type)) {
            throw new InvalidArgumentException("Widget type [{$type}] is not registered.");
        }

        return $this->widgets[$type];
    }

    /**
     * Check if widget type is registered.
     */
    public function hasWidget(string $type): bool
    {
        return isset($this->widgets[$type]);
    }

    /**
     * Get all registered widgets.
     *
     * @return array<string, WidgetContract>
     */
    public function getWidgets(): array
    {
        return $this->widgets;
    }

    /**
     * Register a new data source.
     */
    public function registerDataSource(DataSourceContract $dataSource): self
    {
        $this->dataSources[$dataSource->getType()] = $dataSource;

        return $this;
    }

    /**
     * Get a registered data source by type.
     */
    public function getDataSource(string $type): DataSourceContract
    {
        if (! $this->hasDataSource($type)) {
            throw new InvalidArgumentException("Data source type [{$type}] is not registered.");
        }

        return $this->dataSources[$type];
    }

    /**
     * Check if data source type is registered.
     */
    public function hasDataSource(string $type): bool
    {
        return isset($this->dataSources[$type]);
    }

    /**
     * Get all registered data sources.
     *
     * @return array<string, DataSourceContract>
     */
    public function getDataSources(): array
    {
        return $this->dataSources;
    }

    /**
     * Register a new theme.
     */
    public function registerTheme(ThemeContract $theme): self
    {
        $this->themes[$theme->getName()] = $theme;

        return $this;
    }

    /**
     * Get a registered theme by name.
     */
    public function getTheme(string $name): ThemeContract
    {
        if (! $this->hasTheme($name)) {
            throw new InvalidArgumentException("Theme [{$name}] is not registered.");
        }

        return $this->themes[$name];
    }

    /**
     * Check if theme is registered.
     */
    public function hasTheme(string $name): bool
    {
        return isset($this->themes[$name]);
    }

    /**
     * Get all registered themes.
     *
     * @return array<string, ThemeContract>
     */
    public function getThemes(): array
    {
        return $this->themes;
    }

    /**
     * Register an export provider.
     */
    public function registerExport(ExportContract $export): self
    {
        $this->exports[$export->getFormat()] = $export;

        return $this;
    }

    /**
     * Get an export provider by format.
     */
    public function getExport(string $format): ExportContract
    {
        if (! $this->hasExport($format)) {
            throw new InvalidArgumentException("Export format [{$format}] is not registered.");
        }

        return $this->exports[$format];
    }

    /**
     * Check if export format is registered.
     */
    public function hasExport(string $format): bool
    {
        return isset($this->exports[$format]);
    }

    /**
     * Get all registered exports.
     *
     * @return array<string, ExportContract>
     */
    public function getExports(): array
    {
        return $this->exports;
    }
}
