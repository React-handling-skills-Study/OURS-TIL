import React, { useState } from 'react'
import PaginationView from './PaginationView'

const Pagination = ({ totalResults, articles }) => {
	const pageNum = articles.length === 10 ? Math.ceil(totalResults / articles.length) : Math.ceil(totalResults / 10)
	const [page, setPage] = useState(1)

	return (
		<div>
			<PaginationView pageNum={pageNum} page={page} articles={articles} totalResults={totalResults} />
		</div>
	)
}

export default Pagination
