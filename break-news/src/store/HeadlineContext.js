import { createContext } from 'react'
import { getHeadline } from '../lib/api'
import usePromise from '../lib/usePromise'

export const HeadlineContext = createContext()

const HeadlineProvider = ({ children }) => {
	const [loading, response, error] = usePromise(getHeadline, [])

	if (loading) return <div>로딩중...</div>
	if (!response) return <div>아직 아무것도 없음</div>
	if (error) return <div>에러 발생!</div>

	const { articles } = response

	return <HeadlineContext.Provider value={articles}>{children}</HeadlineContext.Provider>
}

export default HeadlineProvider
