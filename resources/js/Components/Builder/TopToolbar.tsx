import React from 'react';
import { Save, Eye, Copy, Download, Monitor, Tablet, Smartphone, Calendar, FileText, Image } from 'lucide-react';

interface TopToolbarProps {
  title: string;
  isEditing: boolean;
  onTogglePreview: () => void;
  onSave: () => void;
  onDuplicate?: () => void;
  onExport?: () => void;
  onExportPNG?: () => void;
  onExportPDF?: () => void;
  device: 'desktop' | 'tablet' | 'mobile';
  onDeviceChange: (device: 'desktop' | 'tablet' | 'mobile') => void;
  dateRange?: string;
  onDateRangeChange?: (range: string) => void;
}

export const TopToolbar: React.FC<TopToolbarProps> = ({
  title,
  isEditing,
  onTogglePreview,
  onSave,
  onDuplicate,
  onExport,
  onExportPNG,
  onExportPDF,
  device,
  onDeviceChange,
  dateRange = 'all_time',
  onDateRangeChange,
}) => {
  return (
    <header className="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-3">
        <h1 className="text-base font-bold text-slate-800 dark:text-slate-100">{title}</h1>
        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
          {isEditing ? 'Builder Mode' : 'Preview Mode'}
        </span>
      </div>

      <div className="flex items-center space-x-3">
        {onDateRangeChange && (
          <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-xs">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={dateRange}
              onChange={(e) => onDateRangeChange(e.target.value)}
              className="bg-transparent border-none text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
            >
              <option value="all_time">All Time</option>
              <option value="today">Today</option>
              <option value="last_7_days">Last 7 Days</option>
              <option value="this_month">This Month</option>
              <option value="last_30_days">Last 30 Days</option>
            </select>
          </div>
        )}

        <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button
            onClick={() => onDeviceChange('desktop')}
            className={`p-1.5 rounded-md text-xs transition-colors ${device === 'desktop' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-500'}`}
            title="Desktop view"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDeviceChange('tablet')}
            className={`p-1.5 rounded-md text-xs transition-colors ${device === 'tablet' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-500'}`}
            title="Tablet view"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDeviceChange('mobile')}
            className={`p-1.5 rounded-md text-xs transition-colors ${device === 'mobile' ? 'bg-white dark:bg-slate-900 text-indigo-600 shadow-sm' : 'text-slate-500'}`}
            title="Mobile view"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={onTogglePreview}
          className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md flex items-center space-x-1.5 transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{isEditing ? 'Preview' : 'Edit'}</span>
        </button>

        {onExportPNG && (
          <button
            onClick={onExportPNG}
            className="p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center space-x-1 text-xs"
            title="Export to PNG Image"
          >
            <Image className="w-4 h-4 text-emerald-600" />
          </button>
        )}

        {onExportPDF && (
          <button
            onClick={onExportPDF}
            className="p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md flex items-center space-x-1 text-xs"
            title="Export to PDF Document"
          >
            <FileText className="w-4 h-4 text-rose-600" />
          </button>
        )}

        {onDuplicate && (
          <button
            onClick={onDuplicate}
            className="p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            title="Duplicate dashboard"
          >
            <Copy className="w-4 h-4" />
          </button>
        )}

        {onExport && (
          <button
            onClick={onExport}
            className="p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            title="Export JSON schema"
          >
            <Download className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={onSave}
          className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm flex items-center space-x-1.5 transition-colors"
        >
          <Save className="w-3.5 h-3.5" />
          <span>Save</span>
        </button>
      </div>
    </header>
  );
};
