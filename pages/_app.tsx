import 'antd/dist/antd.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LayoutDefault } from '@/components/layouts/LayoutDefault'
import { AuthProvider } from '@/hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<LayoutDefault>
				<Component {...pageProps} />
			</LayoutDefault>
		</AuthProvider>
	)
}

export default MyApp
