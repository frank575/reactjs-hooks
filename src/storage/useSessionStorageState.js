import { useState } from 'react'
import { getStorageItem, useUpdateStorage } from './util'

/**
 * 自動存到 sessionStorage 的 useState
 * @template T
 * @param {string} key
 * @param {T} initialValue
 * @returns {[T, function(T | function(T): T): void]}
 */
function useSessionStorageState(key, initialValue) {
	const [state, setState] = useState(
		getStorageItem(key, initialValue, sessionStorage),
	)
	useUpdateStorage(key, state, sessionStorage)
	return [state, setState]
}

export default useSessionStorageState
