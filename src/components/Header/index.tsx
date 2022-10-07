import { Link } from 'react-router-dom'

import cartIcon from 'assets/cartIcon.png'

import * as Styled from './styles'

type QuantityProps = {
	quantity: number
}

const Header = ({ quantity }: QuantityProps) => {
	return (
		<Styled.Header>
			<Link to="/">WeMovies</Link>
			<Link to="/meu-carrinho">
				<span>{`${quantity} itens`}</span>
				<img src={cartIcon} alt="Carrinho de compras" />
			</Link>
		</Styled.Header>
	)
}

export default Header
