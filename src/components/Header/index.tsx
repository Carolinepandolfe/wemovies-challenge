import cartIcon from 'assets/cartIcon.png'

import * as Styled from './styles'

type QuantityProps = {
	quantity: number
}

const Header = ({ quantity }: QuantityProps) => {
	return (
		<Styled.Header>
			<h1>WeMovies</h1>
			<button type="button">
				<span>{`${quantity} itens`}</span>
				<img src={cartIcon} alt="Carrinho de compras" />
			</button>
		</Styled.Header>
	)
}

export default Header
