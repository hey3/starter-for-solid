import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  stories: ['../src'],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      define: { 'process.env': {} },
    }
  },
}

export default config
