import styled, { css } from 'styled-components'

export const Header = styled.header`
	${({ theme }) => css`
		display: flex;
		max-width: 45.875rem;
		justify-content: space-between;
		padding: 1rem 10px;
		height: 72px;
		margin: 0 auto;
		align-items: baseline;

		h1 {
			color: ${theme.white};
		}

		div {
			width: 6.25rem;
			justify-content: space-between;
			display: flex;
			align-items: baseline;
			span {
				color: ${theme.gray};
			}
		}
	`}
`
