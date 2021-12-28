/* @flow */
import type { ESBuildPlugin } from './ESBuildPlugin'

type EsbuildOptions = $ReadOnly<{|
  plugins: $ReadOnlyArray<ESBuildPlugin>,
|}>

type OptimizeDeps = $ReadOnly<{|
  esbuildOptions?: EsbuildOptions,
|}>

type ServerConfig = $ReadOnly<{|
  open?: boolean,
|}>

type BuildConfig = $ReadOnly<{|
  minify: false | 'terser' | 'esbuild',
|}>

type Config = $ReadOnly<{|
  build?: BuildConfig,
  server?: ServerConfig,
  optimizeDeps?: OptimizeDeps,
  plugins?: $ReadOnlyArray<VitePlugin>,
|}>

type TransformResult = $ReadOnly<{|
  code: string,
  map: null | string,
|}>

export type VitePlugin = $ReadOnly<{|
  name: string,
  enforce?: 'pre',
  config?: () => Config,
  transform?: (source: string, filePath: string) => void | TransformResult,
|}>
