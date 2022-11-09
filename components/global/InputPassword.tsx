import IconMdiEye from '~icons/mdi/eye.jsx'
import IconMdiEyeOff from '~icons/mdi/eye-off.jsx'
import { useState } from 'react'
import { When } from '@/components/utils/When'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export const InputPassword: React.FC<InputProps> = ({
	children,
	className,
	id,
	label,
	...rest
}) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<div className="w-full relative">
			<label
				htmlFor={id}
				className="block text-sm font-medium text-gray-700"
			>
				{label}
			</label>
			<div className="mt-1 relative rounded-md shadow-sm">
				<input
					{...rest}
					type={showPassword ? 'text' : 'password'}
					className="focus:ring-indigo-500 focus:border-indigo-500 
					block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
				/>
				<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
					<When is={showPassword}>
						<IconMdiEye
							className="h-5 w-5 text-gray-400 cursor-pointer"
							aria-hidden="true"
							onClick={() => setShowPassword(false)}
						/>
					</When>

					<When is={!showPassword}>
						<IconMdiEyeOff
							className="h-5 w-5 text-gray-400 cursor-pointer"
							aria-hidden="true"
							onClick={() => setShowPassword(true)}
						/>
					</When>
				</div>
			</div>
		</div>
	)
}
