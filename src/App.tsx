import { ThemeProvider } from 'styled-components'

import { defaultTheme } from 'styles/themes/default'

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<h1>teste</h1>
		</ThemeProvider>
	)
}

export default App
