import React from 'react'
import uuid from 'react-uuid'

const HeadlineView = ({ articles }) => {
	return (
		<div>
			{articles.map((article) => (
				<div className='headline-view flex' key={uuid()}>
					<div className='headline-image w-32'>
						<img src={article.urlToImage} alt={`${article.title} 이미지`} />
					</div>
					<div className='headline-title'>{article.title}</div>
				</div>
			))}
		</div>
	)
}

export default HeadlineView
