import { createContext, useEffect } from 'react'
import { getHeadline } from '../lib/api'
import usePromise from '../lib/usePromise'

export const HeadlineContext = createContext()

const HeadlineProvider = ({ children }) => {
	const { loading, response, error, process } = usePromise(getHeadline, [])
	useEffect(() => {
		process()
	}, [process])

	if (loading) return <div className='text-center'>Loading...</div>
	if (!response) return <div>아직 아무것도 없음</div>
	if (error) return <div>error</div>

	const headlineContext = { articles: response.data }

	return <HeadlineContext.Provider value={headlineContext}>{children}</HeadlineContext.Provider>
}

export default HeadlineProvider
