import { Button } from '@/components/global/Button'
import { Input } from '@/components/global/Input'
import { InputPassword } from '@/components/global/InputPassword'
import { NextPage } from 'next'

// ไม่ custom เองแล้ว ขี้เกียจใช้เวลานานเกิน
const Example: NextPage = () => {
	return (
		<div className="my-4 flex flex-col items-center justify-center gap-4 w-[300px] mx-auto">
			<Button>Example</Button>
			<Input label="Email" id="email" type="email" className="w-full" />
			<InputPassword label="Password" id="password" type="password" />
		</div>
	)
}

export default Example
