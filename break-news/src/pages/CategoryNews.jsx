import React, { useEffect, useContext } from 'react'
import usePromise from '../lib/usePromise'
import { getHeadline } from '../lib/api'
import { Link, useParams } from 'react-router-dom'
import Pagination from '../assets/Pagination'
import { UtilContext } from '../store/UtilContext'
import noImage from '../images/no-image.jpeg'

const CategoryNews = () => {
	const { curPageNum, getPageNum } = useContext(UtilContext)

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

	const { articles, totalResults } = response.data

	return (
		<>
			<div className='font-noto text-3xl grid grid-cols-4 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 text-center p-5'>
				{articles.map((article) => (
					<div key={article.url}>
						<Link to={article.publishedAt}>
							<div className='flex justify-center cursor-pointer'>
								<img
									src={article.urlToImage === null ? noImage : article.urlToImage}
									alt='newsImage'
									className='w-72 h-52 p-2 border-2 border-gray-300 rounded-lg shadow-xl m-5'
								/>
							</div>
						</Link>
						<div className='text-base p-5 text-center'>{article.title}</div>
					</div>
				))}
			</div>
			<Pagination totalResults={totalResults} articles={articles} />
		</>
	)
}

export default CategoryNews
