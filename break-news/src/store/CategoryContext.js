import { createContext } from 'react'
import { useParams } from 'react-router-dom'
import { getHeadline } from '../lib/api'
import usePromise from '../lib/usePromise'

export const CategoryContext = createContext()

const CategoryProvider = ({ children }) => {
	const { category } = useParams()

	const [loading, response, error] = usePromise(getHeadline(category), [category])
	if (loading) return <div>로딩중...</div>
	if (!response) return <div>아직 아무것도 없음</div>
	if (error) return <div>에러 발생!</div>

	const { articles } = response

	return <CategoryContext.Provider value={articles}>{children}</CategoryContext.Provider>
}

export default CategoryProvider
