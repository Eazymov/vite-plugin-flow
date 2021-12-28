/* @flow */
import fs from 'fs'
import flowRemoveTypes from 'flow-remove-types'

import type { FlowConfig, ESBuildPlugin } from './types'

const { readFile } = fs.promises

export function esbuildPluginFlow(
  filter: RegExp,
  flowConfig: FlowConfig,
): ESBuildPlugin {
  return {
    name: 'esbuild-plugin-flow',
    setup(build) {
      build.onLoad({ filter }, async ({ path }) => {
        const source = await readFile(path, 'utf8')
        const loader = path.endsWith('x') ? 'jsx' : 'js'

        return {
          loader,
          contents: flowRemoveTypes(source, flowConfig).toString(),
        }
      })
    },
  }
}
