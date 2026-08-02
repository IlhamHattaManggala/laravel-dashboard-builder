<?php

namespace Manggala\DashboardBuilder\Contracts;

interface ThemeContract
{
    /**
     * Get theme unique name (e.g. 'light', 'dark', 'glass').
     */
    public function getName(): string;

    /**
     * Get theme styling tokens and configuration array.
     *
     * @return array<string, mixed>
     */
    public function getThemeConfig(): array;
}
