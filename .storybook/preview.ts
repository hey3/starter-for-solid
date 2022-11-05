import type { DecoratorFunction } from '@storybook/addons'
import { render } from 'solid-js/web'
import '../src/styles/reset.css'
import '../src/styles/global.css'

let disposeStory: () => void

export const decorators: DecoratorFunction<Element>[] = [
  Story => {
    if (disposeStory) {
      disposeStory()
    }
    const root = document.getElementById('root')
    const solid = document.createElement('div')

    if (!root) throw new Error('Failed to find the root element')

    solid.setAttribute('id', 'solid-root')
    root.appendChild(solid)
    disposeStory = render(Story, solid)
    return solid
  },
]
