import { createContext } from 'react'
import { getHeadline } from '../lib/api'

export const HeadlineContext = createContext({
	headlineNews: [],
})

const HeadlineContextProvider = ({ children }) => {
	const { data: headlineNews } = getHeadline()
	const headlineContext = headlineNews

	return <HeadlineContext.Provider value={headlineContext}>{children}</HeadlineContext.Provider>
}

export default HeadlineContextProvider
