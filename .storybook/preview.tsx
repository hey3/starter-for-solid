import type { Preview } from '@storybook/html'
import { render } from 'solid-js/web'
import { ThemeProvider } from '../src/stores/ThemeStore'
import '../src/styles/reset.css'
import '../src/styles/global.css'

let disposeStory: () => void

const preview: Preview = {
  decorators: [
    Story => {
      // Reset theme for each story.
      window.localStorage.setItem('theme', 'light')

      if (disposeStory) {
        disposeStory()
      }
      const solidRoot = window.document.createElement('div')

      // JSX type using solid-js
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      disposeStory = render(() => <ThemeProvider>{Story()}</ThemeProvider>, solidRoot)
      return solidRoot
    },
  ],
}

export default preview
