import styled, { css } from 'styled-components'

import { darken } from 'polished'

export const Button = styled.button`
	${({ theme }) => css`
		align-items: center;
		background: ${theme.blue};
		border-radius: 0.5rem;
		color: ${theme.white};
		display: flex;
		font-size: 1rem;
		font-weight: 700;
		height: 3.125rem;
		justify-content: center;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		transition: background 0.2s ease-out;

		&:hover {
			background: ${darken(0.04, theme.blue)};
		}

		&:active {
			background: ${darken(0.04, theme.blue)};
		}

		&:disabled {
			background: ${darken(0.3, theme.blue)};
			cursor: not-allowed;
		}
	`}
`
