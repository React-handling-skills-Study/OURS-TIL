import React from 'react'
import { NavLink } from 'react-router-dom'
import uuid from 'react-uuid'

const Navigaion = () => {
	const navList = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

	return (
		<div className='nav flex justify-center w-4/5 mx-auto xs:text-xs sm:w-2/4 sm:text-xs md:text-md lg:text-lg'>
			<nav className='nav-inner flex justify-between font-nimbusSans font-bold p-10 xs:w-1/4 xs:mx-auto xs:justify-center'>
				{navList.map((nav) => (
					<div className='mr-8'>
						<NavLink key={uuid()} to={`/${nav}`} className='hover:font-extrabold'>
							{nav}
						</NavLink>
					</div>
				))}
			</nav>
		</div>
	)
}

export default Navigaion
