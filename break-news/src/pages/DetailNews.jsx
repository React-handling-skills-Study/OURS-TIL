import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailNewsView from '../components/DetailNewsView'
import { HeadlineContext } from '../store/HeadlineContext'
import usePromise from '../lib/usePromise'
import { getHeadline } from '../lib/api'
import { UtilContext } from '../store/UtilContext'

const DetailNews = () => {
	const { curPageNum, getPageNum } = useContext(UtilContext)

	const { id } = useParams()
	const { category } = useParams()

	const { loading, response, error, process } = usePromise(getHeadline)
	useEffect(() => {
		process(category, curPageNum)
	}, [category, curPageNum, process])

	if (loading) {
		return <p className='text-center'>Loading...</p>
	}
	if (!response) {
		return <p>Nothing</p>
	}
	if (error) {
		return <p>{error}</p>
	}

	const { articles } = response.data

	const article = articles.find((article) => article.publishedAt === id)
	console.log(article)

	return (
		<div>
			<DetailNewsView article={article} />
		</div>
	)
}

export default DetailNews
