import { Card } from '@/components/shared/Card'
import { CardLayout } from '@/components/shared/CardLayout'
import { CardTitle } from '@/components/shared/CardTitle'
import { useAuth } from '@/hooks/useAuth'
import { Button, Form, Input } from 'antd'
import Link from 'next/link'

export const Main = () => {
	const auth = useAuth()
	const [form] = Form.useForm()

	const onFinish = (values: any) => {
		auth.login({ email: values.email })
	}

	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
		},
	}

	return (
		<CardLayout>
			<CardTitle>Login</CardTitle>

			<Card>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					validateMessages={validateMessages}
				>
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								type: 'email',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button block type="primary" htmlType="submit">
							Login
						</Button>
					</Form.Item>
				</Form>

				<div className="w-full bg-neutral-300 my-4 h-[1px]"></div>

				<Link href="/register">
					<Button block type="default">
						Register
					</Button>
				</Link>

				<div className="w-full bg-neutral-300 my-4 h-[1px]"></div>
				<Link href="/exam-2-6">
					<span className="cursor-pointer">ดูโจทย์ข้อ 2-6</span>
				</Link>
			</Card>
		</CardLayout>
	)
}
