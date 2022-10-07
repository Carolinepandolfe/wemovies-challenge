import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import CartContextProvider from 'context/CartContext'
import Routes from 'Routes'

import Header from 'components/Header'

import GlobalStyle from 'styles/global'
import { defaultTheme } from 'styles/themes/default'

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<CartContextProvider>
					<Header />
					<Routes />
				</CartContextProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
