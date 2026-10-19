import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'
import { getProxyOptions } from 'frappe-ui/src/utils/vite-dev-server'
import { webserver_port } from '../../../sites/common_site_config.json'

const appRoot = path.resolve(__dirname, '..')
const appModuleDir = path.join(appRoot, path.basename(appRoot))
const outDir = path.join(appModuleDir, 'public', 'frontend')

// Frappe serves the site root `/` from `demo_education/www/index.html`.
// Keep that file in sync with the Vite entry so its hashed asset
// references never go stale after a rebuild.
function syncFrappeHomepage() {
  return {
    name: 'sync-frappe-homepage',
    apply: 'build',
    closeBundle() {
      const builtHtml = path.join(outDir, 'index.html')
      const wwwHtml = path.join(appModuleDir, 'www', 'index.html')
      if (fs.existsSync(builtHtml)) {
        fs.copyFileSync(builtHtml, wwwHtml)
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  // In production the bundle is served by Frappe from the app's public
  // directory at `/assets/demo_education/frontend/`. The dev server keeps
  // serving from the root so `yarn dev` works unchanged.
  base:
    process.env.NODE_ENV === 'production'
      ? '/assets/demo_education/frontend/'
      : '/',
  plugins: [vue(), syncFrappeHomepage()],
  server: {
    port: 8080,
    proxy: getProxyOptions({ port: webserver_port }),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    target: 'es2015',
  },
  optimizeDeps: {
    include: ['frappe-ui > feather-icons', 'showdown', 'engine.io-client'],
  },
})
