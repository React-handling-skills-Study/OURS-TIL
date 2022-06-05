import React, { useState } from 'react'
import axios from 'axios'

import NewsList from './components/NewsList'
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/main-headline/Main'
import HeadlineContextProvider from './store/HeadlineContext'

function App() {
	return (
		<div className='App'>
			<Header />
			<Nav />
			<HeadlineContextProvider>
				<Main />
			</HeadlineContextProvider>
			{/* <NewsList /> */}
		</div>
	)
}

export default App
