import { Link } from '@inertiajs/react';
import { DashboardData } from '../../Types';
import { CanvasGrid } from '../../Components/Builder/CanvasGrid';
import { ArrowLeft, Edit3 } from 'lucide-react';

interface ShowProps {
  dashboard: DashboardData;
}

export default function Show({ dashboard }: ShowProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <header className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center space-x-3">
          <Link
            href={route('dashboard-builder.index')}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-base font-bold text-slate-800 dark:text-slate-100">{dashboard.name}</h1>
            {dashboard.description && (
              <p className="text-[11px] text-slate-400">{dashboard.description}</p>
            )}
          </div>
        </div>

        <Link
          href={route('dashboard-builder.edit', dashboard.id)}
          className="px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm flex items-center space-x-1.5 transition-colors"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Edit Layout</span>
        </Link>
      </header>

      <main className="flex-1 p-6">
        <CanvasGrid
          widgets={dashboard.widgets || []}
          onSelectWidget={() => {}}
          isEditing={false}
        />
      </main>
    </div>
  );
}
