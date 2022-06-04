import React, { useState } from 'react'
import axios from 'axios'

import NewsList from './components/NewsList'
import Category from './components/Category'
import Header from './components/Header'

function App() {
	return (
		<div className='App'>
			<Header />
			<Category />
			{/* <NewsList /> */}
		</div>
	)
}

export default App
