const presets = ['@babel/preset-flow']
const plugins = []

if (process.env.BABEL_ENV === 'cjs') {
  plugins.push('@babel/plugin-transform-modules-commonjs')
}

module.exports = {
  presets,
  plugins,
}
