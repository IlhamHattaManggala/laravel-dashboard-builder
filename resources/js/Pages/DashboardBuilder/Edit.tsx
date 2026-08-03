import { useState } from 'react';
import { router } from '@inertiajs/react';
import { DashboardData, DashboardWidget } from '../../Types';
import { TopToolbar } from '../../Components/Builder/TopToolbar';
import { LeftSidebar } from '../../Components/Builder/LeftSidebar';
import { RightSidebar } from '../../Components/Builder/RightSidebar';
import { CanvasGrid } from '../../Components/Builder/CanvasGrid';

interface EditProps {
  dashboard: DashboardData;
}

export default function Edit({ dashboard }: EditProps) {
  const [widgets, setWidgets] = useState<DashboardWidget[]>(dashboard.widgets || []);
  const [selectedWidget, setSelectedWidget] = useState<DashboardWidget | null>(widgets[0] || null);
  const [isEditing, setIsEditing] = useState(true);
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const handleAddWidget = (type: string, title: string) => {
    const newWidget: DashboardWidget = {
      id: Date.now(),
      dashboard_id: dashboard.id,
      type,
      title,
      x: 0,
      y: widgets.length * 2,
      w: 6,
      h: 4,
      data_source_type: 'static',
      refresh_interval: 30,
      settings: {
        description: 'New widget added to canvas',
      },
    };

    setWidgets((prev) => [...prev, newWidget]);
    setSelectedWidget(newWidget);
  };

  const handleUpdateWidget = (updated: DashboardWidget) => {
    setWidgets((prev) => prev.map((w) => (w.id === updated.id ? updated : w)));
    setSelectedWidget(updated);
  };

  const handleDeleteWidget = (id: number | string) => {
    setWidgets((prev) => prev.filter((w) => w.id !== id));
    if (selectedWidget?.id === id) {
      setSelectedWidget(null);
    }
  };

  const handleSave = () => {
    if (!dashboard.id) return;

    router.put(
      route('dashboard-builder.update', dashboard.id),
      {
        name: dashboard.name,
        description: dashboard.description,
        layout: widgets as any,
      },
      {
        preserveScroll: true,
      }
    );
  };

  const handleDuplicate = () => {
    if (dashboard.id) {
      router.post(route('dashboard-builder.duplicate', dashboard.id));
    }
  };

  const handleExport = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(widgets, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${dashboard.name.toLowerCase().replace(/\s+/g, '-')}-schema.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <TopToolbar
        title={dashboard.name}
        isEditing={isEditing}
        onTogglePreview={() => setIsEditing(!isEditing)}
        onSave={handleSave}
        onDuplicate={handleDuplicate}
        onExport={handleExport}
        device={device}
        onDeviceChange={setDevice}
      />

      <div className="flex-1 flex overflow-hidden">
        {isEditing && <LeftSidebar onAddWidget={handleAddWidget} />}

        <main className="flex-1 overflow-y-auto">
          <CanvasGrid
            widgets={widgets}
            selectedWidgetId={selectedWidget?.id}
            onSelectWidget={setSelectedWidget}
            isEditing={isEditing}
          />
        </main>

        {isEditing && (
          <RightSidebar
            selectedWidget={selectedWidget}
            onUpdateWidget={handleUpdateWidget}
            onDeleteWidget={handleDeleteWidget}
            onClose={() => setSelectedWidget(null)}
          />
        )}
      </div>
    </div>
  );
}
