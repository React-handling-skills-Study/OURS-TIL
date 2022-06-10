import { useState, createContext } from 'react'

export const UtilContext = createContext({
	curPageNum: 0,
	getPageNum: (number) => {},
	pagePlus: () => {},
	pageMinus: () => {},
})

const UtilProvider = ({ children }) => {
	const [curPageNum, setCurPageNum] = useState(1)

	const getPageNum = (number) => {
		setCurPageNum(number)
	}

	const pagePlus = () => {
		setCurPageNum(curPageNum + 1)
	}

	const pageMinus = () => {
		setCurPageNum(curPageNum - 1)
	}

	return (
		<UtilContext.Provider
			value={{
				curPageNum,
				getPageNum,
				pagePlus,
				pageMinus,
			}}
		>
			{children}
		</UtilContext.Provider>
	)
}

export default UtilProvider
