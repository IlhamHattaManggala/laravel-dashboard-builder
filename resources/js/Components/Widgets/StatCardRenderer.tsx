import React from 'react';
import { DashboardWidget } from '../../Types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardRendererProps {
  widget: DashboardWidget;
}

export const StatCardRenderer: React.FC<StatCardRendererProps> = ({ widget }) => {
  const value = widget.data?.result ?? widget.data?.value ?? 0;
  const description = widget.settings?.description ?? '';
  const trend = widget.settings?.trend;
  const icon = widget.settings?.icon;

  return (
    <div className="flex flex-col justify-between h-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{widget.title}</span>
        {icon && <span className="p-2 text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 rounded-md text-xs font-semibold">{icon}</span>}
      </div>
      <div className="my-2">
        <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
        {description && <p className="text-xs text-slate-500 mt-1">{description}</p>}
      </div>
      {trend !== undefined && (
        <div className={`flex items-center text-xs font-semibold ${trend >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
          {trend >= 0 ? <TrendingUp className="w-3.5 h-3.5 mr-1" /> : <TrendingDown className="w-3.5 h-3.5 mr-1" />}
          <span>{Math.abs(trend)}% from last period</span>
        </div>
      )}
    </div>
  );
};
