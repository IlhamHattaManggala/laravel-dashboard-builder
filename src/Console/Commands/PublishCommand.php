<?php

namespace Manggala\DashboardBuilder\Console\Commands;

use Illuminate\Console\Command;

class PublishCommand extends Command
{
    protected $signature = 'dashboard:publish {--tag= : Specific publish tag (config, migrations, assets)} {--force : Overwrite existing files}';

    protected $description = 'Publish Laravel Dashboard Builder assets and configuration';

    public function handle(): int
    {
        $tag = $this->option('tag');
        $force = $this->option('force');

        $publishTag = match ($tag) {
            'config' => 'dashboard-builder-config',
            'migrations' => 'dashboard-builder-migrations',
            'assets' => 'dashboard-builder-assets',
            'views' => 'dashboard-builder-views',
            default => null,
        };

        $params = ['--force' => $force];
        if ($publishTag) {
            $params['--tag'] = $publishTag;
        } else {
            $params['--provider'] = 'Manggala\DashboardBuilder\DashboardBuilderServiceProvider';
        }

        $this->call('vendor:publish', $params);
        $this->info('Dashboard Builder resources published successfully.');

        return self::SUCCESS;
    }
}
