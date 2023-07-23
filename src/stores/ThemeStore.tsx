import { createContext, useContext, createRenderEffect, createEffect } from 'solid-js'
import type { ParentComponent } from 'solid-js'
import { createStore } from 'solid-js/store'

type Theme = 'light' | 'dark'

type ThemeContextState = {
  activeTheme: Theme
}

type ThemeContext = [
  state: ThemeContextState,
  actions: {
    toggleTheme: () => void
  },
]

const ThemeContext = createContext<ThemeContext | null>(null)

export const ThemeProvider: ParentComponent = props => {
  createRenderEffect(() => {
    let theme: Theme
    const savedTheme = window.localStorage.getItem('theme') as Theme
    if (savedTheme) {
      theme = savedTheme
    } else {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    window.document.documentElement.setAttribute('data-theme', theme)
  })

  const [state, setState] = createStore<ThemeContextState>({
    activeTheme: window.document.documentElement.getAttribute('data-theme') as Theme,
  })

  createEffect(() => {
    if (state.activeTheme) {
      window.document.documentElement.setAttribute('data-theme', state.activeTheme)
      window.localStorage.setItem('theme', state.activeTheme)
    }
  })

  const context: ThemeContext = [
    state,
    {
      toggleTheme: () =>
        setState('activeTheme', activeTheme => (activeTheme === 'light' ? 'dark' : 'light')),
    },
  ]

  return <ThemeContext.Provider value={context}>{props.children}</ThemeContext.Provider>
}

export const useThemeStore = (): ThemeContext => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('Need to pass a value to the context')
  }

  return themeContext
}
