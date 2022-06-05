import React from 'react'
import uuid from 'react-uuid'

const Nav = () => {
	return (
		<div className='nav-inner w-7/12 mx-auto p-5'>
			<nav className=''>
				<div className='nav-inner flex justify-between font-nimbusSans font-bold'>
					<div>Business</div>
					<div>Entertainment</div>
					<div>General</div>
					<div>Health</div>
					<div>Science</div>
					<div>Sports</div>
					<div>Technology</div>
				</div>
			</nav>
		</div>
	)
}

export default Nav
