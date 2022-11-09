import { EffectCallback, useEffect, useRef } from 'react'

export const useOnMount = (fn: EffectCallback) => {
	const isMounted = useRef(true)
	useEffect(() => {
		if (isMounted.current) {
			fn()
			isMounted.current = false
		}
	}, [])
}
