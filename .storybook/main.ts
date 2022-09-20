const Solid = require('vite-plugin-solid')

module.exports = {
  stories: ['../src'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    config.plugins.unshift(Solid({ hot: false }))

    return config
  },
}
