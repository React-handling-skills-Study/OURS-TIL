import React from 'react'

const DetailNewsView = ({ article }) => {
	return (
		<div>
			<div className='main-inner w-7/12 mx-auto flex flex-col p-5'>
				<img src={article.urlToImage} alt='' />
				<h1>{article.title}</h1>
				<p>{article.description}</p>
			</div>
		</div>
	)
}

export default DetailNewsView
