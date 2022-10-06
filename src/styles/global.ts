import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
		*,
		*::before,
		*::after {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			outline: none;
		}

		html {
			font-size: 87.5%;
		}

		body {
			background-color: ${theme.background};
			color: ${theme.black};
		}

		body,
		input,
		textarea,
		select,
		button {
			font-family: 'Open Sans', sans-serif;
			font-size: 1rem;
			font-weight: 400;
		}

		button {
			border: none;
			cursor: pointer;
		}

		@media (min-width: 769px) {
			html {
				font-size: 100%;
			}
		}
	`}

`
export default GlobalStyle
