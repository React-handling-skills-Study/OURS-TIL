import React, { useContext } from 'react'
import HeadlineView from './HeadlineView'
import { HeadlineContext } from '../../store/HeadlineContext'

const Headline = () => {
	const articles = useContext(HeadlineContext)
	console.log(articles)

	return (
		<div className=''>
			<HeadlineView articles={articles} />
		</div>
	)
}

export default Headline
