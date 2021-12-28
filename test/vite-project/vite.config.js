import { defineConfig } from 'vite'

// Run "yarn build" if not exist
import vitePluginFlow from '../../dist/esm'

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    minify: false,
  },
  plugins: [vitePluginFlow()],
})
