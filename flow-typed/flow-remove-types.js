/* @flow */

declare module 'flow-remove-types' {
  declare export type Config = $ReadOnly<{|
    all?: boolean,
    pretty?: boolean,
    ignoreUninitializedFields?: boolean,
  |}>

  declare export type Output = $ReadOnly<{|
    toString(): string,
    generateMap(): string,
  |}>

  declare function flowRemoveTypes(code: string, config?: Config): Output

  declare module.exports: typeof flowRemoveTypes
}
