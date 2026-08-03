import React from 'react';
import { DashboardWidget } from '../../Types';
import { Sliders, Trash2, X, Database } from 'lucide-react';

interface RightSidebarProps {
  selectedWidget: DashboardWidget | null;
  onUpdateWidget: (updated: DashboardWidget) => void;
  onDeleteWidget: (id: number | string) => void;
  onClose: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  selectedWidget,
  onUpdateWidget,
  onDeleteWidget,
  onClose,
}) => {
  if (!selectedWidget) {
    return (
      <aside className="w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-4 flex flex-col items-center justify-center text-center h-[calc(100vh-3.5rem)] text-slate-400 text-xs">
        <Sliders className="w-8 h-8 mb-2 stroke-1 text-slate-300" />
        <p>Select a widget on the canvas to configure its properties</p>
      </aside>
    );
  }

  const dsConfig = selectedWidget.data_source_config || {};

  const handleConfigChange = (key: string, value: any) => {
    onUpdateWidget({
      ...selectedWidget,
      data_source_config: {
        ...dsConfig,
        [key]: value,
      },
    });
  };

  return (
    <aside className="w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-4 flex flex-col h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center space-x-2 text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase tracking-wider">
          <Sliders className="w-4 h-4 text-indigo-600" />
          <span>Widget Inspector</span>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4 text-xs">
        <div>
          <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Widget Title</label>
          <input
            type="text"
            value={selectedWidget.title}
            onChange={(e) => onUpdateWidget({ ...selectedWidget, title: e.target.value })}
            className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Grid Width (W)</label>
            <input
              type="number"
              min={1}
              max={12}
              value={selectedWidget.w}
              onChange={(e) => onUpdateWidget({ ...selectedWidget, w: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md"
            />
          </div>
          <div>
            <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Grid Height (H)</label>
            <input
              type="number"
              min={1}
              max={12}
              value={selectedWidget.h}
              onChange={(e) => onUpdateWidget({ ...selectedWidget, h: parseInt(e.target.value) || 1 })}
              className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Data Source Driver</label>
          <select
            value={selectedWidget.data_source_type}
            onChange={(e) => onUpdateWidget({ ...selectedWidget, data_source_type: e.target.value })}
            className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200"
          >
            <option value="eloquent">Eloquent Model</option>
            <option value="query_builder">Query Builder (DB Table)</option>
            <option value="static">Static Payload</option>
            <option value="rest_api">REST API</option>
          </select>
        </div>

        {/* Visual Query Builder Inspector Fields */}
        {(selectedWidget.data_source_type === 'eloquent' || selectedWidget.data_source_type === 'query_builder') && (
          <div className="p-3 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-lg space-y-3">
            <div className="flex items-center space-x-1.5 text-indigo-700 dark:text-indigo-300 font-semibold text-[11px]">
              <Database className="w-3.5 h-3.5" />
              <span>Visual Query Builder</span>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">
                {selectedWidget.data_source_type === 'eloquent' ? 'Model Class' : 'Table Name'}
              </label>
              <input
                type="text"
                placeholder={selectedWidget.data_source_type === 'eloquent' ? 'App\\Models\\User' : 'users'}
                value={dsConfig.model || dsConfig.table || ''}
                onChange={(e) =>
                  handleConfigChange(selectedWidget.data_source_type === 'eloquent' ? 'model' : 'table', e.target.value)
                }
                className="w-full px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Aggregate Function</label>
              <select
                value={dsConfig.aggregate_function || 'COUNT'}
                onChange={(e) => handleConfigChange('aggregate_function', e.target.value)}
                className="w-full px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200"
              >
                <option value="COUNT">COUNT</option>
                <option value="SUM">SUM</option>
                <option value="AVG">AVG</option>
                <option value="MIN">MIN</option>
                <option value="MAX">MAX</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Target Column</label>
              <input
                type="text"
                placeholder="e.g. total_amount or *"
                value={dsConfig.aggregate_column || '*'}
                onChange={(e) => handleConfigChange('aggregate_column', e.target.value)}
                className="w-full px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Date Grouping</label>
              <select
                value={dsConfig.group_by || 'none'}
                onChange={(e) => handleConfigChange('group_by', e.target.value)}
                className="w-full px-3 py-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-200"
              >
                <option value="none">None</option>
                <option value="groupByDay">Daily (groupByDay)</option>
                <option value="groupByMonth">Monthly (groupByMonth)</option>
                <option value="groupByYear">Yearly (groupByYear)</option>
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Refresh Interval (Sec)</label>
          <input
            type="number"
            value={selectedWidget.refresh_interval || 30}
            onChange={(e) => onUpdateWidget({ ...selectedWidget, refresh_interval: parseInt(e.target.value) || 30 })}
            className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md"
          />
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={() => selectedWidget.id !== undefined && onDeleteWidget(selectedWidget.id)}
          className="w-full py-2 bg-rose-50 dark:bg-rose-950/30 text-rose-600 hover:bg-rose-100 rounded-md font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Remove Widget</span>
        </button>
      </div>
    </aside>
  );
};
