/* @flow */

type LoadOptions = $ReadOnly<{|
  filter: RegExp,
|}>

type LoadResult = $ReadOnly<{|
  loader: 'js' | 'jsx',
  contents: string,
|}>

type LoadHandlerOptions = $ReadOnly<{|
  path: string,
|}>

type LoadHandler = (options: LoadHandlerOptions) => Promise<LoadResult>

type Build = $ReadOnly<{|
  onLoad: (options: LoadOptions, handler: LoadHandler) => void,
|}>

export type ESBuildPlugin = $ReadOnly<{|
  name: string,
  setup: (build: Build) => void,
|}>
