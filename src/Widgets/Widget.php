<?php

namespace Manggala\DashboardBuilder\Widgets;

use Manggala\DashboardBuilder\Contracts\DataSourceContract;
use Manggala\DashboardBuilder\Contracts\WidgetContract;
use Manggala\DashboardBuilder\DataSources\EloquentDataSource;
use Manggala\DashboardBuilder\DataSources\QueryBuilderDataSource;

abstract class Widget implements WidgetContract
{
    protected string $type = 'widget';

    protected string $title = '';

    protected string $category = 'general';

    protected int $width = 4;

    protected int $height = 4;

    protected int $x = 0;

    protected int $y = 0;

    protected ?int $refreshInterval = null;

    protected array $options = [];

    protected array $filters = [];

    protected ?string $modelClass = null;

    protected ?string $tableName = null;

    protected string $aggregation = 'count';

    protected string $column = '*';

    protected ?DataSourceContract $dataSource = null;

    public function __construct(?string $title = null)
    {
        if ($title) {
            $this->title = $title;
        }
    }

    /**
     * Static factory constructor.
     */
    public static function make(?string $title = null): static
    {
        return new static($title);
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getCategory(): string
    {
        return $this->category;
    }

    public function title(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function width(int $w): static
    {
        $this->width = $w;

        return $this;
    }

    public function height(int $h): static
    {
        $this->height = $h;

        return $this;
    }

    public function position(int $x, int $y): static
    {
        $this->x = $x;
        $this->y = $y;

        return $this;
    }

    public function refreshInterval(int $seconds): static
    {
        $this->refreshInterval = $seconds;

        return $this;
    }

    public function model(string $modelClass): static
    {
        $this->modelClass = $modelClass;

        return $this;
    }

    public function table(string $tableName): static
    {
        $this->tableName = $tableName;

        return $this;
    }

    public function count(string $column = '*'): static
    {
        $this->aggregation = 'count';
        $this->column = $column;

        return $this;
    }

    public function sum(string $column): static
    {
        $this->aggregation = 'sum';
        $this->column = $column;

        return $this;
    }

    public function avg(string $column): static
    {
        $this->aggregation = 'avg';
        $this->column = $column;

        return $this;
    }

    public function min(string $column): static
    {
        $this->aggregation = 'min';
        $this->column = $column;

        return $this;
    }

    public function max(string $column): static
    {
        $this->aggregation = 'max';
        $this->column = $column;

        return $this;
    }

    public function where(string $column, string $operator, mixed $value = null): static
    {
        if (func_num_args() === 2) {
            $value = $operator;
            $operator = 'equals';
        }

        $this->filters[] = [
            'column' => $column,
            'operator' => $operator,
            'value' => $value,
        ];

        return $this;
    }

    public function dataSource(DataSourceContract $dataSource): static
    {
        $this->dataSource = $dataSource;

        return $this;
    }

    public function options(array $options): static
    {
        $this->options = array_merge($this->options, $options);

        return $this;
    }

    /**
     * Resolve effective data source.
     */
    protected function resolveDataSource(): DataSourceContract
    {
        if ($this->dataSource) {
            return $this->dataSource;
        }

        if ($this->modelClass) {
            return new EloquentDataSource;
        }

        if ($this->tableName) {
            return new QueryBuilderDataSource;
        }

        return new EloquentDataSource;
    }

    /**
     * Build config array for data source query.
     */
    protected function buildDataSourceConfig(): array
    {
        $config = [
            'aggregation' => $this->aggregation,
            'column' => $this->column,
            'filters' => $this->filters,
        ];

        if ($this->modelClass) {
            $config['model'] = $this->modelClass;
        }

        if ($this->tableName) {
            $config['table'] = $this->tableName;
        }

        return $config;
    }

    public function renderData(array $config = []): array
    {
        $ds = $this->resolveDataSource();
        $dsConfig = array_merge($this->buildDataSourceConfig(), $config);

        if ($this->modelClass || $this->tableName || $this->dataSource) {
            $fetched = $ds->fetchData($dsConfig);

            return [
                'type' => $this->getType(),
                'title' => $this->getTitle(),
                'value' => $fetched['result'] ?? null,
                'raw' => $fetched,
                'options' => $this->options,
            ];
        }

        return [
            'type' => $this->getType(),
            'title' => $this->getTitle(),
            'options' => $this->options,
        ];
    }

    public function toArray(): array
    {
        return [
            'type' => $this->getType(),
            'title' => $this->getTitle(),
            'category' => $this->getCategory(),
            'w' => $this->width,
            'h' => $this->height,
            'x' => $this->x,
            'y' => $this->y,
            'refresh_interval' => $this->refreshInterval,
            'options' => $this->options,
            'aggregation' => $this->aggregation,
            'column' => $this->column,
            'filters' => $this->filters,
            'model' => $this->modelClass,
            'table' => $this->tableName,
        ];
    }
}
