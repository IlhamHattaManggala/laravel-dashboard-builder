import React from 'react';
import { LayoutGrid, BarChart2, TrendingUp, Table, FileText, Globe, PieChart, Layers } from 'lucide-react';

interface LeftSidebarProps {
  onAddWidget: (type: string, title: string) => void;
}

const AVAILABLE_WIDGETS = [
  { type: 'card', title: 'Stat Card', icon: LayoutGrid, category: 'Stats' },
  { type: 'stats', title: 'KPI Trend', icon: TrendingUp, category: 'Stats' },
  { type: 'line_chart', title: 'Line Chart', icon: BarChart2, category: 'Charts' },
  { type: 'bar_chart', title: 'Bar Chart', icon: BarChart2, category: 'Charts' },
  { type: 'pie_chart', title: 'Pie Chart', icon: PieChart, category: 'Charts' },
  { type: 'table', title: 'Data Table', icon: Table, category: 'Content' },
  { type: 'markdown', title: 'Markdown Text', icon: FileText, category: 'Content' },
  { type: 'iframe', title: 'Web Iframe Embed', icon: Globe, category: 'Embed' },
];

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ onAddWidget }) => {
  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 flex flex-col h-[calc(100vh-3.5rem)] overflow-y-auto">
      <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-200 mb-4 font-semibold text-xs uppercase tracking-wider">
        <Layers className="w-4 h-4 text-indigo-600" />
        <span>Widget Palette</span>
      </div>

      <div className="space-y-2">
        {AVAILABLE_WIDGETS.map((w) => {
          const Icon = w.icon;
          return (
            <div
              key={w.type}
              onClick={() => onAddWidget(w.type, w.title)}
              className="p-3 bg-slate-50 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 rounded-lg cursor-pointer transition-all flex items-center space-x-3 group"
            >
              <div className="p-2 bg-white dark:bg-slate-800 rounded-md text-slate-600 dark:text-slate-300 group-hover:text-indigo-600">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600">{w.title}</h4>
                <p className="text-[10px] text-slate-400">{w.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
