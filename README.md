# vite-plugin-flow

[![npm](https://img.shields.io/npm/v/vite-plugin-flow.svg)](https://www.npmjs.com/package/vite-plugin-flow)
[![License](https://img.shields.io/npm/l/vite-plugin-flow.svg)](https://www.npmjs.com/package/vite-plugin-flow)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Eazymov/vite-plugin-flow/pulls)

> Flow support for Vite

## Installation

```bash
# npm
npm i vite-plugin-flow -D

# yarn
yarn add vite-plugin-flow -D

# pnpm
pnpm add vite-plugin-flow -D
```

```javascript
// vite.config.js
import vitePluginFlow from 'vite-plugin-flow'

export default {
  plugins: [vitePluginFlow()],
}
```

## Options

```javascript
export type Options = $ReadOnly<{|
  /*
    Which files to parse with flow
    default: /\.jsx?$/
  */
  filter?: RegExp,
  /*
    If true, bypasses looking for an @flow pragma comment before parsing.
    default: false
  */
  all?: boolean,
  /*
    If true, removes types completely rather than replacing with spaces.
    This may require using source maps.
    default: false
  */
  pretty?: boolean,
  /*
    If true, removes uninitialized class fields (`foo;`, `foo: string;`)
    completely rather than only removing the type. THIS IS NOT SPEC
    COMPLIANT! Instead, use `declare foo: string;` for type-only fields.
    default: false
  */
  ignoreUninitializedFields?: boolean,
|}>
```

## Questions

If you have any troubles, questions or proposals you can create the [issue](https://github.com/Eazymov/vite-plugin-flow/issues)

## License

[MIT](http://opensource.org/licenses/MIT) (c) 2021 - present, [Eazymov](https://github.com/Eazymov)
