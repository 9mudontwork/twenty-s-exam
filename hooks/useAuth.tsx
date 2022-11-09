import Router from 'next/router'
import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useState,
} from 'react'
import { useEffect } from 'react'

interface IAuthContext {
	authenticated: boolean
	email: string
	login: ({ email }: { email: string }) => void
	logout: () => void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const initAuth = {
		authenticated: false,
		email: '',
		login: () => {},
		logout: () => {},
	}

	const [auth, setAuth] = useState(initAuth)

	function login({ email }: { email: string }) {
		setAuth({ ...auth, authenticated: true, email })
		Router.push('/user-info')
	}

	function logout() {
		setAuth({ ...auth, authenticated: false, email: '' })
	}

	const ignoreRoutes = ['exam-2-6']
	function isIgnoreRoute() {
		const currentRoute = Router.pathname.split('/')[1]
		return ignoreRoutes.includes(currentRoute)
	}

	useEffect(() => {
		if (isIgnoreRoute()) return
		if (auth.authenticated) return

		Router.push('/login')
	}, [auth.authenticated])

	const state = {
		...auth,
		login,
		logout,
	}

	return (
		<>
			<AuthContext.Provider value={state}>
				{children}
			</AuthContext.Provider>
		</>
	)
}
