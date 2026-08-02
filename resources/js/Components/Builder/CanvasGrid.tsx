import React from 'react';
import { DashboardWidget } from '../../Types';
import { StatCardRenderer } from '../Widgets/StatCardRenderer';
import { ApexChartRenderer } from '../Widgets/ApexChartRenderer';
import { TableRenderer } from '../Widgets/TableRenderer';

interface CanvasGridProps {
  widgets: DashboardWidget[];
  selectedWidgetId?: number | string;
  onSelectWidget: (widget: DashboardWidget) => void;
  isEditing: boolean;
}

export const CanvasGrid: React.FC<CanvasGridProps> = ({
  widgets,
  selectedWidgetId,
  onSelectWidget,
  isEditing,
}) => {
  const renderWidgetContent = (widget: DashboardWidget) => {
    switch (widget.type) {
      case 'card':
      case 'stats':
        return <StatCardRenderer widget={widget} />;
      case 'line_chart':
      case 'bar_chart':
      case 'pie_chart':
      case 'area_chart':
        return <ApexChartRenderer widget={widget} />;
      case 'table':
        return <TableRenderer widget={widget} />;
      case 'markdown':
        return (
          <div className="h-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
            <h4 className="font-bold mb-2 text-sm text-slate-800 dark:text-slate-200">{widget.title}</h4>
            <div className="text-xs text-slate-600 dark:text-slate-400">{widget.settings?.content || 'Markdown Content Placeholder'}</div>
          </div>
        );
      case 'iframe':
        return (
          <div className="h-full w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-2 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-600">{widget.title}</div>
            <iframe src={widget.settings?.url || 'https://example.com'} className="w-full flex-1 border-none" title={widget.title} />
          </div>
        );
      default:
        return (
          <div className="h-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm flex flex-col items-center justify-center text-xs text-slate-400">
            <span>{widget.title}</span>
            <span className="text-[10px] text-indigo-500">[{widget.type}]</span>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 p-6 bg-slate-100 dark:bg-slate-950 min-h-[calc(100vh-3.5rem)] overflow-y-auto">
      {widgets.length === 0 ? (
        <div className="h-64 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-400 text-xs">
          <p className="font-medium">Canvas is empty</p>
          <p className="mt-1">Add widgets from the left palette to build your dashboard layout</p>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          {widgets.map((widget, index) => {
            const isSelected = selectedWidgetId === widget.id || (selectedWidgetId === undefined && index === 0);
            const colSpan = Math.min(Math.max(widget.w, 1), 12);

            return (
              <div
                key={widget.id || index}
                onClick={() => onSelectWidget(widget)}
                style={{ gridColumn: `span ${colSpan} / span ${colSpan}` }}
                className={`relative group cursor-pointer transition-all duration-150 ${
                  isEditing && isSelected ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-950 rounded-lg' : ''
                }`}
              >
                {renderWidgetContent(widget)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
