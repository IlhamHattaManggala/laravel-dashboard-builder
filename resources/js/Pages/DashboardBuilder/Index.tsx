import React, { useState } from 'react';
import { router, Link } from '@inertiajs/react';
import { DashboardData } from '../../Types';
import { Plus, Search, Star, Archive, Copy, Trash2, LayoutDashboard, Edit3, Eye } from 'lucide-react';

interface IndexProps {
  dashboards: {
    data: DashboardData[];
    links?: any[];
  };
}

export default function Index({ dashboards }: IndexProps) {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.get(route('dashboard-builder.index'), { search }, { preserveState: true });
  };

  const handleToggleFavorite = (id: number) => {
    router.post(route('dashboard-builder.favorite', id), {}, { preserveScroll: true });
  };

  const handleToggleArchive = (id: number) => {
    router.post(route('dashboard-builder.archive', id), {}, { preserveScroll: true });
  };

  const handleDuplicate = (id: number) => {
    router.post(route('dashboard-builder.duplicate', id));
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this dashboard?')) {
      router.delete(route('dashboard-builder.destroy', id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 text-slate-800 dark:text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <LayoutDashboard className="w-7 h-7 text-indigo-600" />
              <span>Dashboard Builder</span>
            </h1>
            <p className="text-sm text-slate-500 mt-1">Manage, design, and explore your application dashboards</p>
          </div>

          <Link
            href={route('dashboard-builder.create')}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-sm shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Dashboard</span>
          </Link>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 mb-6 shadow-sm">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search dashboard by name or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {dashboards.data.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 rounded-xl p-12 text-center text-slate-400">
            <LayoutDashboard className="w-12 h-12 mx-auto mb-3 stroke-1 text-slate-300" />
            <h3 className="text-base font-semibold text-slate-700 dark:text-slate-300">No dashboards found</h3>
            <p className="text-xs mt-1">Start by creating your first custom dashboard layout</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboards.data.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">{item.name}</h3>
                    <button
                      onClick={() => item.id && handleToggleFavorite(item.id)}
                      className={`p-1.5 rounded-md transition-colors ${
                        item.is_favorite ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' : 'text-slate-300 hover:text-amber-500'
                      }`}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">{item.description || 'No description provided.'}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Link
                      href={route('dashboard-builder.show', item.id)}
                      className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                      title="View Dashboard"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link
                      href={route('dashboard-builder.edit', item.id)}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 rounded-md"
                      title="Edit Canvas"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => item.id && handleDuplicate(item.id)}
                      className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                      title="Duplicate"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => item.id && handleToggleArchive(item.id)}
                      className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                      title={item.is_archived ? 'Unarchive' : 'Archive'}
                    >
                      <Archive className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => item.id && handleDelete(item.id)}
                    className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-md"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
