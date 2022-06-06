import React from 'react'

import Header from './components/Header'
import HeadlineProvider from './store/HeadlineContext'
import RouteBundle from './routes/RouteBundle'
import Navigaion from './components/Navigaion'

function App() {
	return (
		<div className='App'>
			<Header />
			<Navigaion />
			<HeadlineProvider>
				<RouteBundle />
			</HeadlineProvider>
		</div>
	)
}

export default App
