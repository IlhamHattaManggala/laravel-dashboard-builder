import React from 'react';
import Chart from 'react-apexcharts';
import { DashboardWidget } from '../../Types';

interface ApexChartRendererProps {
  widget: DashboardWidget;
}

export const ApexChartRenderer: React.FC<ApexChartRendererProps> = ({ widget }) => {
  const chartType = widget.settings?.chart_type || (widget.type.replace('_chart', '') as any) || 'line';

  const options = {
    chart: {
      id: `chart-${widget.id}`,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif',
      background: 'transparent',
    },
    title: {
      text: widget.title,
      align: 'left' as const,
      style: { fontSize: '14px', fontWeight: '600', color: '#64748b' },
    },
    stroke: { curve: 'smooth' as const, width: 2 },
    colors: ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'],
    xaxis: {
      categories: widget.data?.raw?.categories || ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
  };

  const series = widget.data?.raw?.series || [
    {
      name: widget.title,
      data: [30, 40, 45, 50, 49],
    },
  ];

  return (
    <div className="h-full w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
      <Chart options={options} series={series} type={chartType} height="100%" width="100%" />
    </div>
  );
};
