import styled, { css } from 'styled-components'

export const Container = styled.main`
	${({ theme }) => css`
		max-width: 45.875rem;
		display: flex;
		justify-content: center;
		padding-bottom: 53px;
		margin: 5px 10px auto;
		background-color: ${theme.white};
		padding: 37px 15px 27px;
		height: calc(100vh - (10px + 37px + 15px + 86px));
		border-radius: 4px;
		max-width: 734px;
		flex-direction: column;
		align-items: center;

		@media (min-width: 745px) {
			margin: 60px auto;
			height: auto;
			gap: 20px;
			padding-bottom: 5px;
		}
	`}
`

export const Content = styled.div`
	height: calc(100% - 120px);
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	overflow-y: scroll;
	padding-right: 10px;

	@media (min-width: 745px) {
		max-height: 500px;
	}
`

export const Card = styled.div`
	display: flex;
	gap: 20px;

	img {
		width: 96px;
		height: 114px;
	}
`
export const Header = styled.header`
	${({ theme }) => css`
		display: none;

		@media (min-width: 745px) {
			margin: auto;
			max-width: 550px;
			display: flex;
			font-size: 14px;
			color: ${theme.gray};
			font-weight: 700;
			justify-content: center;
			gap: 160px;
			text-transform: uppercase;
		}
	`}
`

export const InfoMovie = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 20px;

	@media (min-width: 745px) {
		flex-direction: row;
		gap: 74px;
	}
`

export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 700;
	font-size: 14px;
	width: 120px;

	@media (min-width: 745px) {
		flex-direction: column;
		justify-content: center;
	}
`
export const Price = styled.div`
	${({ theme }) => css`
		display: flex;
		justify-content: space-between;

		div:last-of-type {
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			gap: 5px;

			p {
				font-size: 12px;
				color: ${theme.gray};
				font-weight: 700;
			}

			span {
				font-weight: 700;
				font-size: 14px;
			}

			button {
				background: transparent;
				align-self: flex-end;
				svg {
					color: ${theme.blue};
				}
			}
		}

		@media (min-width: 745px) {
			gap: 130px;
			div:last-of-type {
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				flex: 1;

				p {
					display: none;
				}

				button {
					align-self: auto;
					line-height: 0;
				}
			}

			width: 100%;
			flex: 1;
		}
	`}
`

export const FinishPurchase = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: 100%;

		button {
			width: 100%;
			height: 45px;
			font-size: 14px;
			font-weight: 700;
		}

		hr {
			width: 100%;
			background-color: ${theme.gray};
		}

		p {
			align-items: baseline;
			color: ${theme.gray};
			display: flex;
			font-size: 14px;
			font-weight: 700;
			gap: 5px;
			justify-content: flex-end;
			text-transform: uppercase;

			strong {
				font-size: 24px;
				font-weight: 700;
				color: ${theme.black};
			}
		}
	`}
`
export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media (min-width: 400px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;

		button {
			width: 180px;
		}

		p {
			order: 2;
		}
	}
`
