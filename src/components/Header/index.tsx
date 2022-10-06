import cartIcon from 'assets/cartIcon.png'

import * as Styled from './styles'

const Header = () => {
	return (
		<Styled.Header>
			<h1>WeMovies</h1>
			<div>
				<span>0 itens</span>
				<img src={cartIcon} alt="Carrinho de compras" />
			</div>
		</Styled.Header>
	)
}

export default Header
