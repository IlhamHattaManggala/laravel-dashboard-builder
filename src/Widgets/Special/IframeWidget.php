<?php

namespace Manggala\DashboardBuilder\Widgets\Special;

use Manggala\DashboardBuilder\Widgets\Widget;

class IframeWidget extends Widget
{
    protected string $type = 'iframe';

    protected string $category = 'embed';

    protected string $url = '';

    public function url(string $url): static
    {
        $this->url = $url;

        return $this;
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'url' => $this->url,
        ]);
    }
}
