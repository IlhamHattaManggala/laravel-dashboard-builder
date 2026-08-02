export interface DashboardWidget {
  id?: number;
  dashboard_id?: number;
  type: string;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  data_source_type: string;
  data_source_config?: Record<string, any>;
  settings?: Record<string, any>;
  refresh_interval?: number;
  order?: number;
  data?: any;
}

export interface DashboardCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  icon?: string;
}

export interface DashboardTag {
  id: number;
  name: string;
  slug: string;
  color?: string;
}

export interface DashboardTheme {
  mode: 'light' | 'dark' | 'system';
  primary_color: string;
  radius: string;
  typography: string;
}

export interface DashboardData {
  id?: number;
  name: string;
  slug?: string;
  description?: string;
  category_id?: number;
  category?: DashboardCategory;
  tags?: DashboardTag[];
  widgets: DashboardWidget[];
  layout?: Record<string, any>;
  theme?: DashboardTheme;
  settings?: Record<string, any>;
  is_favorite?: boolean;
  is_archived?: boolean;
  is_public?: boolean;
}
