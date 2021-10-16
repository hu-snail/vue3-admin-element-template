import { defineConfig } from 'vite';
const path = require('path');
import vue from '@vitejs/plugin-vue';
import VitePluginElementPlus from 'vite-plugin-element-plus';
import legacy from '@vitejs/plugin-legacy';
import { viteMockServe } from 'vite-plugin-mock';
import { setting } from './src/config/setting';
import { svgBuilder } from './src/plugin/svgBuilder';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const {
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
  chunkSizeWarningLimit,
} = setting;

const isDev = process.env.NODE_ENV === 'development';

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
    VitePluginElementPlus({
      // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
      // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
      // 的文档注释
      // useSource: true,
      format: isDev ? 'esm' : 'cjs',
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    viteMockServe({
      mockPath: 'mock',
      supportTs: false,
      localEnabled: isDev,
      prodEnabled: !isDev,
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
    }),
    svgBuilder('./src/icons/svg/'),
  ],

  server: {
    host,
    port,
    cors,
    strictPort,
    open,
    fs: {
      strict: false,
    },
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
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`,
      },
    },
  },

  corePlugins: {
    preflight: false,
  },

  build: {
    target: 'es2015',
    outDir,
    assetsDir,
    sourcemap,
    cssCodeSplit,
    brotliSize,
    // rollupOptions: {
    //   output: {
    //     // chunkFileNames: 'static/js/[name]-[hash].js',
    //     // entryFileNames: 'static/js/[name]-[hash].js',
    //     // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
    //   },
    // },
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console,
        drop_debugger,
      },
    },
    chunkSizeWarningLimit,
  },

  optimizeDeps: {
    // 检测需要预构建的依赖项
    entries: [],
  },
});
