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

		a:last-of-type {
			min-width: 100px;
			width: auto;
			justify-content: space-between;
			display: flex;
			align-items: baseline;
			border: none;
			background-color: transparent;
			gap: 10px;

			div {
				p {
					display: none;
				}
			}

			img {
				align-self: flex-end;
			}

			span {
				color: ${theme.gray};
				font-size: 12px;
				font-weight: 600;
			}
		}

		@media (min-width: 745px) {
			a:last-of-type div {
				display: flex;
				flex-direction: column;

				p {
					display: block;
				}

				span {
					text-align: end;
				}
			}
		}
	`}
`
