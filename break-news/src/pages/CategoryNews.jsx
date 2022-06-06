import React, { useEffect } from 'react'
import usePromise from '../lib/usePromise'
import { getHeadline } from '../lib/api'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CategoryNews = () => {
	const { category } = useParams()
	console.log(category)

	const { loading, response, error, process } = usePromise(getHeadline)
	useEffect(() => {
		process(category)
	}, [category])
	console.log(response)
	if (loading) {
		return <p>Loading...</p>
	}
	if (!response) {
		console.log(response)
		return <p>Nothing</p>
	}
	if (error) {
		return <p>{error}</p>
	}

	const articles = response.data.articles
	console.log(articles)

	return (
		<>
			<div className='font-noto text-3xl grid grid-cols-4 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 text-center p-5'>
				{articles.map((article) => (
					<div key={article.url}>
						<div className='flex justify-center'>
							<img
								src={article.urlToImage}
								alt='newsImage'
								className='w-72 h-52 p-2 border-2 border-gray-300 rounded-lg shadow-xl m-5'
							/>
						</div>
						<div className='text-base p-5 text-center'>{article.title}</div>
					</div>
				))}
			</div>
			<button className='w-1/6 border block mx-auto my-10 hover:bg-sky-200 rounded border-gray-300 shadow-lg transition'>
				News!
			</button>
		</>
	)
}

export default CategoryNews
