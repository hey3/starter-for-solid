import { render } from 'solid-js/web'
import { App } from './app'
import { ThemeProvider } from './stores/ThemeStore'
import './styles/reset.css'
import './styles/global.css'

const rootElement = window.document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

render(
  () => (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  ),
  rootElement
)
