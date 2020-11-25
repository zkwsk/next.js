module.exports = {
  presets: ['next/babel'],
  env: {
    test: {
      plugins: ['transform-require-context'],
    },
  },
}
