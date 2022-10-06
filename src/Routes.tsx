import { Routes, Route } from 'react-router-dom'

import Catalog from 'pages/Catalog'

const Router = () => {
	return (
		<Routes>
			<Route index element={<Catalog />} />
		</Routes>
	)
}

export default Router
