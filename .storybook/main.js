module.exports = {
  stories: ['../src'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  babel: async options => ({
    ...options,
    presets: ['solid', '@babel/preset-typescript'],
  }),
}
