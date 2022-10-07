import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import Routes from 'Routes'

import Header from 'components/Header'

import GlobalStyle from 'styles/global'
import { defaultTheme } from 'styles/themes/default'

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Header quantity={230} />
				<Routes />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
