<?php

namespace Manggala\DashboardBuilder\Widgets\Special;

use Manggala\DashboardBuilder\Widgets\Widget;

class MarkdownWidget extends Widget
{
    protected string $type = 'markdown';

    protected string $category = 'content';

    protected string $content = '';

    public function content(string $markdownText): static
    {
        $this->content = $markdownText;

        return $this;
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'content' => $this->content,
        ]);
    }
}
