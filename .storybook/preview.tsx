import type { DecoratorFunction } from '@storybook/addons'
import { render } from 'solid-js/web'
import { ThemeProvider } from '../src/stores/ThemeStore'
import '../src/styles/reset.css'
import '../src/styles/global.css'

let disposeStory: () => void

export const decorators: DecoratorFunction<Element>[] = [
  Story => {
    // Reset theme for each story.
    window.localStorage.setItem('theme', 'light')

    if (disposeStory) {
      disposeStory()
    }
    const root = window.document.getElementById('root')
    const solid = window.document.createElement('div')

    if (!root) throw new Error('Failed to find the root element')

    solid.setAttribute('id', 'solid-root')
    root.appendChild(solid)
    // JSX type using solid-js
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    disposeStory = render(() => <ThemeProvider>{Story()}</ThemeProvider>, solid)
    return solid
  },
]
