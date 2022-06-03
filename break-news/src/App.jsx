import React, { useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'

function App() {
	return (
		<div className="App">
			<h1 className="underline text-3xl bg-sky-100 font-nimbus text-center py-10 shadow-lg">
				Seoul Times
			</h1>
			<NewsList />
		</div>
	)
}

export default App
