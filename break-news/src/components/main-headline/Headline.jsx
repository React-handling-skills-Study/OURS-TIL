import React, { useContext } from 'react'
import HeadlineView from './HeadlineView'
import { HeadlineContext } from '../../store/HeadlineContext'

const Headline = () => {
	const headlineContext = useContext(HeadlineContext)
	const { articles } = headlineContext.articles
	console.log(articles)
	return (
		<div className='headline-inner border border-black shadow-lg mx-5'>
			<HeadlineView articles={articles} />
		</div>
	)
}

export default Headline
