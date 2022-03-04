import { Component } from 'solid-js'
import { render } from 'solid-js/web'
import './index.css'

const App: Component = () => {
  return <div>Hello World!</div>
}

render(() => <App />, document.getElementById('root') as HTMLElement)
