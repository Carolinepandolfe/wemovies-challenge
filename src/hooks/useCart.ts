import { useContext } from 'react'

import { CartContext } from 'context/CartContext'

const useCart = () => {
	const contexts = useContext(CartContext)
	return contexts
}

export default useCart
