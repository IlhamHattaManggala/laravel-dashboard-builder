import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
    lib: {
      entry: path.resolve(__dirname, 'resources/js/index.ts'),
      name: 'LaravelDashboardBuilder',
      fileName: (format) => `dashboard-builder.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@inertiajs/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@inertiajs/react': 'InertiaReact',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
    },
  },
});
