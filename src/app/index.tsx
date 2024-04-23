import { Route, Router } from '@solidjs/router'
import { type Component } from 'solid-js'

export const App: Component = () => (
  <Router>
    <Route path="*" component={() => <div>Hello World!</div>} />
  </Router>
)
