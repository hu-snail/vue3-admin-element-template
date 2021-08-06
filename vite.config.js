import { defineConfig } from 'vite';
const path = require('path');
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import legacy from '@vitejs/plugin-legacy';

import {
  base,
  publicDir,
  outDir,
  assetsDir,
  sourcemap,
  cssCodeSplit,
  host,
  port,
  strictPort,
  open,
  cors,
  brotliSize,
  logLevel,
  clearScreen,
  drop_console,
  drop_debugger,
} from './src/config/index.js';

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base,
  publicDir,
  logLevel,
  clearScreen,
  plugins: [
    vue(),
    legacy({
      polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      modernPolyfills: ['es.promise.finally'],
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],

  server: {
    host,
    port,
    cors,
    strictPort,
    open,
  },

  resolve: {
    // 设置别名
    alias: {
      views: path.resolve(__dirname, 'src/views'),
      styles: path.resolve(__dirname, 'src/styles'),
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    css: {
      postcss: {
        plugins: [require('autoprefixer')],
      },
    },
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`,
      },
    },
  },

  build: {
    outDir,
    assetsDir,
    sourcemap,
    cssCodeSplit,
    brotliSize,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    terserOptions: {
      compress: {
        drop_console,
        drop_debugger,
      },
    },
  },

  optimizeDeps: {
    // 检测需要预构建的依赖项
    entries: [],
    include: ['element-plus'],
  },
});
