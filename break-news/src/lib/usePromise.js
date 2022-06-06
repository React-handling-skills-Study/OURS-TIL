import { useState, useEffect, useCallback } from 'react'

export default function usePromise(promiseCreator, deps) {
	// 대기 중/완료/실패에 대한 상태 관리
	const [loading, setLoading] = useState(false)
	const [resolved, setResolved] = useState(null)
	const [error, setError] = useState(null)

	const process = useCallback(
		async (category = 'technology', pageNumber = 1) => {
			setLoading(true) // 대기 중 상태로 변경
			try {
				const responseData = await promiseCreator(category, pageNumber)
				setResolved(responseData)
			} catch (e) {
				setError(e) // 실패 상태로 변경
			}
			setLoading(false)
		},
		[promiseCreator]
	)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return {
		loading,
		response: resolved,
		error,
		process,
	}
}
