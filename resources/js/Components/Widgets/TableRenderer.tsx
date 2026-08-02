import React from 'react';
import { DashboardWidget } from '../../Types';

interface TableRendererProps {
  widget: DashboardWidget;
}

export const TableRenderer: React.FC<TableRendererProps> = ({ widget }) => {
  const rows = Array.isArray(widget.data?.result) ? widget.data.result : [];
  const columns = widget.settings?.columns || (rows.length > 0 ? Object.keys(rows[0]) : ['ID', 'Name', 'Status']);

  return (
    <div className="h-full w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">{widget.title}</div>
      <div className="overflow-x-auto flex-1">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-xs">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              {columns.map((col: string, i: number) => (
                <th key={i} className="px-3 py-2 text-left font-medium text-slate-500 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {rows.length > 0 ? (
              rows.map((row: any, rIndex: number) => (
                <tr key={rIndex} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                  {columns.map((col: string, cIndex: number) => (
                    <td key={cIndex} className="px-3 py-2 text-slate-700 dark:text-slate-300">
                      {typeof row[col] === 'object' ? JSON.stringify(row[col]) : String(row[col] ?? '-')}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-3 py-4 text-center text-slate-400">
                  No table data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
