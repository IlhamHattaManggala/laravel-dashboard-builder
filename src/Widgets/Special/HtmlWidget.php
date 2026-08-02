<?php

namespace Manggala\DashboardBuilder\Widgets\Special;

use Manggala\DashboardBuilder\Widgets\Widget;

class HtmlWidget extends Widget
{
    protected string $type = 'html';

    protected string $category = 'content';

    protected string $html = '';

    public function html(string $htmlContent): static
    {
        $this->html = $htmlContent;

        return $this;
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'html' => $this->html,
        ]);
    }
}
