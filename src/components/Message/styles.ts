import styled, { css } from 'styled-components'

export const Container = styled.main`
	${({ theme }) => css`
		max-width: 45.875rem;
		display: flex;
		justify-content: center;
		padding-bottom: 53px;
		margin: 5px 10px auto;
		background-color: ${theme.white};
		padding: 52px;
		border-radius: 4px;
		max-width: 734px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 40px;

		h1 {
			font-size: 20px;
			font-weight: 700;
			text-align: center;
			word-wrap: break-word;
		}

		img {
			width: 240px;
		}

		button {
			width: 117px;
		}

		@media (min-width: 745px) {
			margin: 60px auto;

			button {
				width: 180px;
			}
		}
	`}
`
