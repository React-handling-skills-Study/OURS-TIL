import React, { useState } from 'react'
import { useContext } from 'react'
import UtilProvider, { UtilContext } from '../store/UtilContext'
import PaginationView from './PaginationView'

const Pagination = ({ totalResults, articles }) => {
	const pageNum = articles.length === 10 ? Math.ceil(totalResults / articles.length) : Math.ceil(totalResults / 10)
	const { getPageNum, curPageNum } = useContext(UtilContext)

	return (
		<div>
			<PaginationView
				pageNum={pageNum}
				articles={articles}
				totalResults={totalResults}
				getPageNum={getPageNum}
				curPageNum={curPageNum}
			/>
		</div>
	)
}

export default Pagination
