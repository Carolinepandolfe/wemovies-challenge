import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'

import { MovieProps } from 'pages/Catalog'

type CartContextProviderProps = {
	children: ReactNode
}

type CartContextProps = {
	movies: MovieProps[]
	addMovieCart: (movie: MovieProps) => void
	removeMovie: (id: number) => void
	incrementMovie: (id: number) => void
	decrementMovie: (id: number) => void
	inputQuantity: (quantity: number, id: number) => void
	totalPrice: number
	clearCart: () => void
}

export const CartContext = createContext({} as CartContextProps)

const CartContextProvider = ({ children }: CartContextProviderProps) => {
	const getMovie = () => {
		const listMovie = localStorage.getItem('movies')
		return listMovie ? JSON.parse(listMovie) : []
	}

	const [movies, setMovies] = useState<MovieProps[]>(getMovie)

	useEffect(() => {
		localStorage.setItem('movies', JSON.stringify(movies))
	}, [movies])

	const addMovieCart = useCallback(
		(movie: MovieProps) => {
			const existsMovie = movies.find((item) => item.id === movie.id)
			if (existsMovie) {
				setMovies((prevState) =>
					prevState.map((item) => {
						if (item.id === movie.id) {
							return {
								...item,
								quantity: item.quantity + 1,
							}
						}
						return item
					})
				)
			} else {
				setMovies((prevState) => [...prevState, movie])
			}
		},

		[movies]
	)

	const removeMovie = useCallback((id: number) => {
		setMovies((prevState) => prevState.filter((item) => item.id !== id))
	}, [])

	const incrementMovie = useCallback((id: number) => {
		setMovies((prevState) =>
			prevState.map((item) => {
				if (item?.id === id) {
					return {
						...item,
						quantity: item.quantity + 1,
					}
				}
				return item
			})
		)
	}, [])

	const decrementMovie = useCallback((id: number) => {
		setMovies((prevState) =>
			prevState.map((item) => {
				if (item?.id === id) {
					return {
						...item,
						quantity: item.quantity - 1,
					}
				}
				return item
			})
		)
	}, [])

	const totalPrice = movies.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	const inputQuantity = useCallback(
		(quantity: number, id: number) => {
			const newMovie = movies.map((item) =>
				item?.id === id ? { ...item, quantity } : item
			)
			setMovies(newMovie)
		},
		[movies]
	)

	const clearCart = useCallback(() => {
		setMovies([])
	}, [])

	const values = useMemo(
		() => ({
			movies,
			addMovieCart,
			removeMovie,
			incrementMovie,
			decrementMovie,
			totalPrice,
			inputQuantity,
			clearCart,
		}),
		[
			movies,
			addMovieCart,
			removeMovie,
			incrementMovie,
			decrementMovie,
			totalPrice,
			inputQuantity,
			clearCart,
		]
	)

	return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export default CartContextProvider
