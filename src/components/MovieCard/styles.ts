import styled, { css } from 'styled-components'

export const Card = styled.div`
	${({ theme }) => css`
		background-color: ${theme.white};
		border-radius: 4px;
		display: flex;
		display: flex;
		flex-direction: column;
		padding: 10px;
		height: 298px;
		width: 230px;
		font-weight: 700;
	`}
`
export const Movie = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	img {
		width: 147px;
		height: 188px;
	}

	p {
		margin-top: 7px;
		font-size: 12px;
	}
`
export const Price = styled.div`
	display: flex;
	flex-direction: column;

	span {
		font-size: 10px;
	}

	button {
		display: flex;
		justify-content: space-around;
		margin-top: 7px;

		div {
			display: flex;
			gap: 5px;
		}
	}
`
