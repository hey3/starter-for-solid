import { createRoot } from 'solid-js'
import { insert, template, createComponent } from 'solid-js/web'
import '../src/index.css'

export const decorators = [
  Story =>
    createRoot(() => {
      const root = template(`<div></div>`, 2).cloneNode(true)
      insert(root, createComponent(Story, {}))
      return root
    }),
]
