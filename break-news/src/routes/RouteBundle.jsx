import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../components/main-headline/Main'
import CategoryNews from '../pages/CategoryNews'

const RouteBundle = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path=':category' element={<CategoryNews />} />
		</Routes>
	)
}

export default RouteBundle
