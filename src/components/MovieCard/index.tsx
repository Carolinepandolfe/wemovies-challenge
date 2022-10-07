import { MdAddShoppingCart } from 'react-icons/md'

import Button from 'components/Button'

import { formatCurrency } from 'utils/formatCurrency'

import * as Styled from './styles'

type MovieProps = {
	image: string
	title: string
	price: number
	quantity: number
}

const MovieCard = ({ image, price, title, quantity }: MovieProps) => {
	return (
		<Styled.Card>
			<Styled.Movie>
				<img src={image} alt={`Cartaz filme do ${title}`} />
				<p>{title}</p>
			</Styled.Movie>
			<Styled.Price>
				<span>{formatCurrency(price)}</span>
				<Button>
					<div>
						<MdAddShoppingCart size={15} />
						{quantity}
					</div>
					ADICIONAR AO CARRINHO
				</Button>
			</Styled.Price>
		</Styled.Card>
	)
}

export default MovieCard
