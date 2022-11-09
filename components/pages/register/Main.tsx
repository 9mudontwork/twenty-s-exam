import { Card } from '@/components/shared/Card'
import { CardLayout } from '@/components/shared/CardLayout'
import { CardTitle } from '@/components/shared/CardTitle'
import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd'
import Link from 'next/link'

interface IRegisterForm {
	gender: 'male' | 'female'
	firstName: string
	lastName: string
	address: string
	postCode: number
	email: string
	telephoneNumber: number
	accept: boolean
}

export const Main = () => {
	const [form] = Form.useForm<IRegisterForm>()

	const onFinish = (values: IRegisterForm) => {
		values.telephoneNumber = Number(values.telephoneNumber)

		console.log(
			'After submitting the form, all values should print at the console',
			values
		)
	}

	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
		},
	}

	return (
		<CardLayout>
			<CardTitle>Register</CardTitle>

			<Card>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					validateMessages={validateMessages}
				>
					<Form.Item
						label="Gender"
						name="gender"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Select
							labelInValue
							options={[
								{ label: 'Male', value: 'male' }, // remember to pass the key prop
								{ label: 'Female', value: 'female' },
							]}
						/>
					</Form.Item>

					<Form.Item
						label="First Name"
						name="firstName"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Last Name"
						name="lastName"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Address"
						name="address"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input.TextArea rows={3} />
					</Form.Item>

					<Form.Item
						label="Pastcode"
						name="pastCode"
						rules={[
							{
								required: true,
							},
						]}
					>
						<InputNumber controls={false} className="w-full" />
					</Form.Item>

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
						label="Telephone Number"
						name="telephoneNumber"
						rules={[
							{
								required: true,
							},
							{
								pattern: /^[0][689]\d{8}$/,
								message: 'Please enter a valid phone number',
							},
						]}
					>
						<Input className="w-full" />
					</Form.Item>

					<Form.Item
						label="term and condition"
						name="accept"
						valuePropName="checked"
						rules={[
							{
								validator: (_, value) =>
									value
										? Promise.resolve()
										: Promise.reject(
												new Error(
													'Should accept term and condition'
												)
										  ),
							},
						]}
					>
						<Checkbox className="w-full">Accept</Checkbox>
					</Form.Item>

					<Form.Item className="mt-12">
						<Button block type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>

					<div className="w-full bg-neutral-300 my-4 h-[1px]"></div>

					<Link href="/login">
						<Button block type="default">
							Back to Login
						</Button>
					</Link>
				</Form>
			</Card>
		</CardLayout>
	)
}
