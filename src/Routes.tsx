import { Routes, Route } from 'react-router-dom'

import Cart from 'pages/Cart'
import Catalog from 'pages/Catalog'

const Router = () => {
	return (
		<Routes>
			<Route index element={<Catalog />} />
			<Route path="/meu-carrinho" element={<Cart />} />
		</Routes>
	)
}

export default Router
