import { useCallback, useEffect, useState } from 'react'

import { api } from 'services/api'

import MovieCard from 'components/MovieCard'

import * as Styled from './styles'

export type MovieProps = {
	id: number
	title: string
	price: number
	image: string
}

const Catalog = () => {
	const [movies, setMovies] = useState<MovieProps[]>([])

	const getMovies = useCallback(async () => {
		try {
			const response = await api.get('/products')
			setMovies(response?.data)
		} catch (err) {
			console.log('err')
		}
	}, [])

	useEffect(() => {
		getMovies()
	}, [getMovies])

	return (
		<Styled.Container>
			{movies?.map((movie) => (
				<MovieCard {...movie} key={movie.id} />
			))}
		</Styled.Container>
	)
}
export default Catalog
