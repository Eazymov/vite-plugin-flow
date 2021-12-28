/* @flow */
import flowRemoveTypes from 'flow-remove-types'

import { esbuildPluginFlow } from './esbuildPluginFlow'
import type { Options, VitePlugin, DefaultOptions } from './types'

const defaultOptions: DefaultOptions = {
  filter: /\.jsx?$/,
}

export function vitePluginFlow(options: Options = defaultOptions): VitePlugin {
  const { filter = defaultOptions.filter, ...flowConfig } = options

  return {
    name: 'vite-plugin-flow',
    enforce: 'pre',
    config: () => ({
      optimizeDeps: {
        esbuildOptions: {
          plugins: [esbuildPluginFlow(filter, flowConfig)],
        },
      },
    }),
    transform(source, filePath) {
      if (filter.test(filePath)) {
        const output = flowRemoveTypes(source, flowConfig)

        return {
          code: output.toString(),
          map: output.generateMap(),
        }
      }
    },
  }
}
