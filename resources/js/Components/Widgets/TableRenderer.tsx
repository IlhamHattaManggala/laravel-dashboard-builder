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
      <div className="flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
        <span>{widget.title}</span>
        {widget.settings?.data_table && (
          <span className="text-[10px] uppercase font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded">
            DataTable Driver
          </span>
        )}
      </div>
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
                      {renderCellContent(row[col])}
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

function renderCellContent(val: any) {
  if (val === null || val === undefined) return <span className="text-slate-400">-</span>;

  const str = String(val);

  if (['active', 'completed', 'success', 'healthy', 'admin'].includes(str.toLowerCase())) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
        {str}
      </span>
    );
  }

  if (['inactive', 'failed', 'failing', 'danger', 'banned'].includes(str.toLowerCase())) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
        {str}
      </span>
    );
  }

  if (['pending', 'warning', 'editor'].includes(str.toLowerCase())) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
        {str}
      </span>
    );
  }

  return typeof val === 'object' ? JSON.stringify(val) : str;
}

export default TableRenderer;
