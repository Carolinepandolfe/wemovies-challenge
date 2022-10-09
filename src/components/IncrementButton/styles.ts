import styled, { css } from 'styled-components'

export const Increment = styled.div`
	${({ theme }) => css`
		align-items: center;
		display: flex;
		gap: 5px;

		button {
			width: 18px;
			height: 18px;
			border-radius: 50%;
			border: 2px solid ${theme.blue};
			background-color: transparent;

			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}

			svg {
				width: 100%;
				height: 100%;
				color: ${theme.blue};
			}
		}
	`}
`

export const Input = styled.input`
	${({ theme }) => css`
		background: ${theme.white};
		border-radius: 4px;
		border: 2px solid #d9d9d9;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 400;
		padding: 0.25rem;
		width: 50px;
		height: 27px;
	`}
`
