import { render } from '@solidjs/testing-library'
import { type Component, type JSX } from 'solid-js'
import { ThemeProvider } from '../src/stores/ThemeStore'

type Options = NonNullable<Parameters<typeof render>[1]>
type Result = ReturnType<typeof render>

type Props = {
  children: JSX.Element
}

const AllTheProviders: Component<Props> = props => {
  return <ThemeProvider>{props.children}</ThemeProvider>
}

const customRender = (ui: () => JSX.Element, options?: Options): Result =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  })

export * from '@solidjs/testing-library'
export { userEvent } from '@testing-library/user-event'
export { customRender as render }
