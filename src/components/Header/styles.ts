import styled, { css } from 'styled-components'

export const Header = styled.header`
	${({ theme }) => css`
		align-items: baseline;
		background-color: ${theme.background};
		display: flex;
		height: 72px;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 45.875rem;
		overflow: hidden;
		padding: 1rem 10px;
		position: sticky;
		top: 0;

		a {
			color: ${theme.white};
			font-size: 20px;
			font-weight: 700;
		}

		button {
			min-width: 100px;
			width: auto;
			justify-content: space-between;
			display: flex;
			align-items: baseline;
			border: none;
			background-color: transparent;

			span {
				color: ${theme.gray};
				font-size: 12px;
				font-weight: 600;
			}
		}
	`}
`
