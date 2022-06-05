import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NewsList = () => {
	const [articles, setArticles] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const res = await axios.get(
					'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fc6feda2f1494c178cfa2b3206437328'
				)
				setArticles(res.data.articles)
			} catch (e) {
				alert(e)
			}
			setLoading(false)
		}
		fetchData()
	}, [])

	// Loading 처리
	if (loading) {
		return <div>Loading...</div>
	}

	// Articles 제대로 가져왔을 때
	if (!articles) {
		return null
	}

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
			<button className='w-1/6 border block mx-auto my-10 hover:bg-sky-200 rounded border-gray-300 border-4 shadow-lg transition'>
				News!
			</button>
		</>
	)
}

export default NewsList
