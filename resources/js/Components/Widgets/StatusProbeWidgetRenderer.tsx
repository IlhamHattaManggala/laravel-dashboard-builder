import React from 'react';
import { DashboardWidget } from '../../Types';

interface StatusProbeWidgetRendererProps {
  widget: DashboardWidget;
}

export const StatusProbeWidgetRenderer: React.FC<StatusProbeWidgetRendererProps> = ({ widget }) => {
  const probes = widget.settings?.probes || ['database', 'cache'];
  const probeData = widget.data?.probes || [
    { name: 'Database Connection', status: 'healthy', latency_ms: 12 },
    { name: 'Redis Cache', status: 'healthy', latency_ms: 4 },
  ];

  return (
    <div className="flex flex-col justify-between h-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm space-y-3">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{widget.title || 'System Diagnostics'}</span>
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
          Live Probes
        </span>
      </div>

      <div className="space-y-2 flex-1 overflow-y-auto">
        {probeData.map((item: any, idx: number) => {
          const isHealthy = item.status === 'healthy';
          return (
            <div key={idx} className="flex items-center justify-between p-2 rounded-md bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${isHealthy ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.name || probes[idx]}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                {item.latency_ms && <span className="text-slate-400">{item.latency_ms}ms</span>}
                <span className={`px-1.5 py-0.5 rounded font-semibold text-[10px] uppercase ${isHealthy ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'}`}>
                  {item.status || 'healthy'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusProbeWidgetRenderer;
