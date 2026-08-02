<?php

namespace Manggala\DashboardBuilder\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class MakeWidgetCommand extends GeneratorCommand
{
    protected $name = 'make:dashboard-widget';

    protected $description = 'Create a new custom Dashboard Widget class';

    protected $type = 'Dashboard Widget';

    protected function getStub(): string
    {
        return __DIR__.'/stubs/widget.stub';
    }

    protected function getDefaultNamespace($rootNamespace): string
    {
        return $rootNamespace.'\Dashboards\Widgets';
    }
}
