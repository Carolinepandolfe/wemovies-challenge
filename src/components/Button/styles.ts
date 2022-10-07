import styled, { css } from 'styled-components'

export const Button = styled.button`
	${({ theme }) => css`
		align-items: center;
		background: ${theme.blue};
		border-radius: 0.5rem;
		color: ${theme.white};
		display: flex;
		font-size: 0.75rem;
		font-weight: 700;
		height: 2.5rem;
		justify-content: center;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		transition: background 0.2s ease-out;
	`}
`
