// test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../themes/theme'
import Default from '../layouts/Default'


const AllTheProviders = ({ children }) => {
    const mockStore = configureStore()
    const store = mockStore({basket: [], product: []})

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Default>
                    {children}
                </Default>
            </ThemeProvider>
        </Provider>
    )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }