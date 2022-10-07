import { Link } from 'react-router-dom'

import useCart from 'hooks/useCart'

import cartIcon from 'assets/cartIcon.png'

import * as Styled from './styles'

const Header = () => {
	const { movies } = useCart()
	return (
		<Styled.Header>
			<Link to="/">WeMovies</Link>
			<Link to="/meu-carrinho">
				<div>
					<p>Meu Carrinho</p>
					<span>{`${movies?.length} itens`}</span>
				</div>
				<img src={cartIcon} alt="Carrinho de compras" />
			</Link>
		</Styled.Header>
	)
}

export default Header
