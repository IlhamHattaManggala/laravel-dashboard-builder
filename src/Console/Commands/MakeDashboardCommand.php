<?php

namespace Manggala\DashboardBuilder\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class MakeDashboardCommand extends GeneratorCommand
{
    protected $name = 'make:dashboard';

    protected $description = 'Create a new fluent Dashboard class';

    protected $type = 'Dashboard';

    protected function getStub(): string
    {
        return __DIR__.'/stubs/dashboard.stub';
    }

    protected function getDefaultNamespace($rootNamespace): string
    {
        return $rootNamespace.'\Dashboards';
    }
}
