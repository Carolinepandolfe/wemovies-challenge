import { IoMdTrash } from 'react-icons/io'

import Button from 'components/Button'
import IncrementButton from 'components/IncrementButton'

import { formatCurrency } from 'utils/formatCurrency'

import * as Styled from './styles'

const MovieInCart = () => {
	return (
		<Styled.Container>
			<Styled.Content>
				<Styled.Header>
					<p>Produto</p>
					<p>QTD</p>
					<p>Subtotal</p>
				</Styled.Header>
				<Styled.Card>
					<img
						src="https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png"
						alt=""
					/>
					<Styled.InfoMovie>
						<Styled.Title>
							<p>Homem Aranha</p>
							<span>{formatCurrency(29)}</span>
						</Styled.Title>
						<Styled.Price>
							<IncrementButton />
							<div>
								<p>SUBTOTAL</p>
								<span>{formatCurrency(29)}</span>
								<button type="button">
									<IoMdTrash size={20} />
								</button>
							</div>
						</Styled.Price>
					</Styled.InfoMovie>
				</Styled.Card>
			</Styled.Content>
			<Styled.FinishPurchase>
				<hr />
				<Styled.Footer>
					<p>
						Total<strong>{formatCurrency(10)}</strong>
					</p>
					<Button>FINALIZAR PEDIDO</Button>
				</Styled.Footer>
			</Styled.FinishPurchase>
		</Styled.Container>
	)
}

export default MovieInCart
