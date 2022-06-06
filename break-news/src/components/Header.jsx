import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<Link to='/'>
				<p className='text-3xl text-center py-10 shadow-lg'>BREAK-NEWS</p>
			</Link>
		</div>
	)
}

export default Header
