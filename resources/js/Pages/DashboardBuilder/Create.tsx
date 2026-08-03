import React, { useState } from 'react';
import { router, Link } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';

export default function Create() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.post(route('dashboard-builder.store'), {
      name,
      description,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 text-slate-800 dark:text-slate-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-bold">Create New Dashboard</h2>
          <Link
            href={route('dashboard-builder.index')}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Dashboard Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Executive Sales Overview"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">Description (Optional)</label>
            <textarea
              rows={3}
              placeholder="Brief summary of metrics displayed on this dashboard..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="pt-4 flex justify-end space-x-2">
            <Link
              href={route('dashboard-builder.index')}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 rounded-lg font-medium text-xs transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-xs flex items-center space-x-1.5 shadow-sm transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Create Dashboard</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
