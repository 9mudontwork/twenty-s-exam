import { Card } from '@/components/shared/Card'
import { CardLayout } from '@/components/shared/CardLayout'
import { CardTitle } from '@/components/shared/CardTitle'
import { useAuth } from '@/hooks/useAuth'
import { Button } from 'antd'

export const Main = () => {
	const auth = useAuth()

	return (
		<CardLayout>
			<CardTitle>User Info</CardTitle>

			<Card>
				<p>Email: {auth.email}</p>

				<div className="w-full bg-neutral-300 my-4 h-[1px]"></div>

				<Button block type="default" onClick={() => auth.logout()}>
					Logout
				</Button>
			</Card>
		</CardLayout>
	)
}
