import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DetailNews from '../pages/DetailNews'
import Main from '../components/main-headline/Main'
import CategoryNews from '../pages/CategoryNews'

const RouteBundle = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path=':category' element={<CategoryNews />} />
			<Route path=':category/:id' element={<DetailNews />} />
		</Routes>
	)
}

export default RouteBundle
