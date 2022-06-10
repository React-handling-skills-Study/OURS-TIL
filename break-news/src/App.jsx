import React from 'react'

import Header from './components/Header'
import HeadlineProvider from './store/HeadlineContext'
import RouteBundle from './routes/RouteBundle'
import Navigaion from './components/Navigaion'
import UtilProvider from './store/UtilContext'

function App() {
	return (
		<div className='App'>
			<Header />
			<Navigaion />
			<HeadlineProvider>
				<UtilProvider>
					<RouteBundle />
				</UtilProvider>
			</HeadlineProvider>
		</div>
	)
}

export default App
