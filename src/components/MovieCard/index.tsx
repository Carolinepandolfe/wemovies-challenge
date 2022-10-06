import Button from 'components/Button'

import * as Styled from './styles'

const MovieCard = () => {
	return (
		<Styled.Card>
			<Styled.Movie>
				<img
					src="https://www.imagemhost.com.br/images/2022/07/10/shang-chi.png"
					alt="Cartaz filme"
				/>
				<p>Nome do filme aqui</p>
			</Styled.Movie>
			<Styled.Price>
				<span>R$ 30,99</span>
				<Button>ADICIONAR AO CARRINHO</Button>
			</Styled.Price>
		</Styled.Card>
	)
}

export default MovieCard
