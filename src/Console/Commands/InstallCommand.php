<?php

namespace Manggala\DashboardBuilder\Console\Commands;

use Illuminate\Console\Command;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dashboard:install {--force : Overwrite existing published files}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install and publish Laravel Dashboard Builder package resources';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $this->info('Installing Laravel Dashboard Builder Package...');

        $force = $this->option('force');

        $this->comment('Publishing configuration...');
        $this->call('vendor:publish', [
            '--tag' => 'dashboard-builder-config',
            '--force' => $force,
        ]);

        $this->comment('Publishing database migrations...');
        $this->call('vendor:publish', [
            '--tag' => 'dashboard-builder-migrations',
            '--force' => $force,
        ]);

        $this->comment('Publishing frontend assets...');
        $this->call('vendor:publish', [
            '--tag' => 'dashboard-builder-assets',
            '--force' => $force,
        ]);

        if ($this->confirm('Would you like to run the database migrations now?', true)) {
            $this->call('migrate');
        }

        $this->info('Laravel Dashboard Builder installed successfully!');

        return self::SUCCESS;
    }
}
