import React, { useContext } from 'react'
import HeadlineView from './HeadlineView'
import { HeadlineContext } from '../../store/HeadlineContext'

const Headline = () => {
	// const headlineValue = useContext(HeadlineContext)
	// const { headlineNews } = headlineValue

	return (
		<div className=''>
			<HeadlineView />
		</div>
	)
}

export default Headline
