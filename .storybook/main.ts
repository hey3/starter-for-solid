const Solid = require('vite-plugin-solid')

module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  stories: ['../src'],
  staticDirs: ['../public'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    config.plugins.unshift(Solid({ hot: false }))

    return config
  },
}
