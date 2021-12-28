/* @flow */

export type FlowConfig = $ReadOnly<{|
  all?: boolean,
  pretty?: boolean,
  ignoreUninitializedFields?: boolean,
|}>

export type Options = $ReadOnly<{|
  ...FlowConfig,
  filter?: RegExp,
|}>

export type DefaultOptions = $ReadOnly<{|
  filter: RegExp,
|}>

export type { VitePlugin } from './VitePlugin'
export type { ESBuildPlugin } from './ESBuildPlugin'
