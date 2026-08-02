<?php

namespace Manggala\DashboardBuilder\Contracts;

interface WidgetContract
{
    /**
     * Get the unique type key for the widget (e.g. 'stats', 'line_chart').
     */
    public function getType(): string;

    /**
     * Get the human-readable title of the widget.
     */
    public function getTitle(): string;

    /**
     * Get the widget category identifier.
     */
    public function getCategory(): string;

    /**
     * Render data for the widget given its configuration.
     *
     * @param  array<string, mixed>  $config
     * @return array<string, mixed>
     */
    public function renderData(array $config): array;

    /**
     * Convert the widget definition to an array structure.
     *
     * @return array<string, mixed>
     */
    public function toArray(): array;
}
