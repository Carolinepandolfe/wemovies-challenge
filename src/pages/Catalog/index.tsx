import { useCallback, useEffect, useState } from 'react'

import { api } from 'services/api'

import useCart from 'hooks/useCart'

import Loading from 'components/Loading'
import MovieCard from 'components/MovieCard'

import * as Styled from './styles'

export type MovieProps = {
	id: number
	title: string
	price: number
	image: string
	quantity: number
}

const Catalog = () => {
	const [listMovies, setListMovies] = useState<MovieProps[]>([])
	const [loading, setLoading] = useState(true)
	const { addMovieCart, movies } = useCart()

	const getMovies = useCallback(async () => {
		try {
			setLoading(true)
			const response = await api.get<MovieProps[]>('/products')
			setListMovies(
				response.data.map((item) => ({
					...item,
					quantity: 1,
				}))
			)
		} catch (err) {
			console.log('err')
		} finally {
			setLoading(false)
		}
	}, [])

	const getQuantity = (movie: MovieProps) => {
		const quantity = movies.find((item) => item.id === movie.id)?.quantity
		return quantity || 0
	}

	useEffect(() => {
		getMovies()
	}, [getMovies])

	return (
		<Styled.Container>
			{loading && <Loading />}
			{listMovies?.map((movie) => (
				<MovieCard
					{...movie}
					key={movie.id}
					quantity={() => getQuantity(movie)}
					addMovie={() => addMovieCart(movie)}
				/>
			))}
		</Styled.Container>
	)
}
export default Catalog
