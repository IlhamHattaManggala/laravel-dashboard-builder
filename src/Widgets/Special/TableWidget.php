<?php

namespace Manggala\DashboardBuilder\Widgets\Special;

use Manggala\DashboardBuilder\Widgets\Widget;

class TableWidget extends Widget
{
    protected string $type = 'table';

    protected string $category = 'content';

    protected ?string $dataTableClass = null;

    protected array $columns = [];

    protected int $perPage = 10;

    public function columns(array $columns): static
    {
        $this->columns = $columns;

        return $this;
    }

    public function dataTable(string $dataTableClass): static
    {
        $this->dataTableClass = $dataTableClass;

        return $this;
    }

    public function perPage(int $perPage): static
    {
        $this->perPage = $perPage;

        return $this;
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'columns' => $this->columns,
            'data_table' => $this->dataTableClass,
            'per_page' => $this->perPage,
        ]);
    }
}
