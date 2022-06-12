import React from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'react-uuid'

const Navigaion = () => {
	const navList = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

	return (
		<div className='nav-inner w-7/12 mx-auto p-5'>
			<nav className='nav-inner flex justify-between font-nimbusSans font-bold shrink-0 text-lg '>
				{navList.map((nav) => (
					<NavLink key={uuid()} to={`/${nav}`} className='hover:font-extrabold'>
						{nav}
					</NavLink>
				))}
			</nav>
		</div>
	)
}

export default Navigaion
