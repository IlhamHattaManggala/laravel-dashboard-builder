<?php

namespace Manggala\DashboardBuilder\Policies;

use Manggala\DashboardBuilder\Models\Dashboard;

class DashboardPolicy
{
    /**
     * Determine whether the user can view any dashboards.
     */
    public function viewAny($user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the dashboard.
     */
    public function view($user, Dashboard $dashboard): bool
    {
        if ($dashboard->is_public) {
            return true;
        }

        if (! $user) {
            return false;
        }

        return $dashboard->created_by === null || $dashboard->created_by === $user->id;
    }

    /**
     * Determine whether the user can create dashboards.
     */
    public function create($user): bool
    {
        return $user !== null;
    }

    /**
     * Determine whether the user can update the dashboard.
     */
    public function update($user, Dashboard $dashboard): bool
    {
        if (! $user) {
            return false;
        }

        return $dashboard->created_by === null || $dashboard->created_by === $user->id;
    }

    /**
     * Determine whether the user can delete the dashboard.
     */
    public function delete($user, Dashboard $dashboard): bool
    {
        if (! $user) {
            return false;
        }

        return $dashboard->created_by === null || $dashboard->created_by === $user->id;
    }

    /**
     * Determine whether the user can duplicate the dashboard.
     */
    public function duplicate($user, Dashboard $dashboard): bool
    {
        return $this->view($user, $dashboard);
    }
}
