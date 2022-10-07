import { useState } from 'react'

import { IoMdTrash } from 'react-icons/io'

import useCart from 'hooks/useCart'

import Button from 'components/Button'
import IncrementButton from 'components/IncrementButton'
import Message from 'components/Message'

import { formatCurrency } from 'utils/formatCurrency'

import * as Styled from './styles'

const MovieInCart = () => {
	const {
		movies,
		removeMovie,
		decrementMovie,
		incrementMovie,
		totalPrice,
		inputQuantity,
		clearCart,
	} = useCart()

	const [success, setSuccess] = useState(false)

	const handleSuccess = () => {
		setSuccess(true)
		clearCart()
	}

	return (
		<Styled.Container>
			{movies.length < 1 && !success && <Message type="empty" />}

			{success && <Message type="success" />}

			{movies.length >= 1 && (
				<>
					<Styled.Content>
						<Styled.Header>
							<p>Produto</p>
							<p>QTD</p>
							<p>Subtotal</p>
						</Styled.Header>
						{movies.map((movie) => (
							<Styled.Card key={movie.id}>
								<img src={movie.image} alt="" />
								<Styled.InfoMovie>
									<Styled.Title>
										<p>{movie.title}</p>
										<span>{formatCurrency(movie.price)}</span>
									</Styled.Title>
									<Styled.Price>
										<IncrementButton
											quantity={movie.quantity}
											decrement={() => decrementMovie(movie.id)}
											increment={() => incrementMovie(movie.id)}
											onInputQuantity={(quantity) =>
												inputQuantity(quantity, movie.id)
											}
										/>
										<div>
											<p>SUBTOTAL</p>
											<span>
												{formatCurrency(movie.price * movie.quantity)}
											</span>
											<button
												type="button"
												onClick={() => removeMovie(movie.id)}
											>
												<IoMdTrash size={20} />
											</button>
										</div>
									</Styled.Price>
								</Styled.InfoMovie>
							</Styled.Card>
						))}
					</Styled.Content>
					<Styled.FinishPurchase>
						<hr />
						<Styled.Footer>
							<p>
								Total<strong>{formatCurrency(totalPrice)}</strong>
							</p>
							<Button onClick={handleSuccess}>FINALIZAR PEDIDO</Button>
						</Styled.Footer>
					</Styled.FinishPurchase>
				</>
			)}
		</Styled.Container>
	)
}

export default MovieInCart
