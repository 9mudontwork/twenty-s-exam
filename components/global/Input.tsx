import { _ } from '@/utils/_.utils'
import { forwardRef } from 'react'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
	label: string
	variant?: 'default' | 'error'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ children, className, variant = 'default', id, label, ...rest }, ref) => {
		const classes = {
			base: 'shadow-sm block w-full rounded-md sm:text-sm',
			variant: {
				default:
					'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300',
				error: '',
			},
		}

		return (
			<div className="w-full relative">
				<label
					htmlFor={id}
					className="block text-sm font-medium text-gray-700"
				>
					{label}
				</label>
				<div className="mt-1">
					<input
						ref={ref}
						{...rest}
						className={_.cls(`
							${classes.base} 
							${classes.variant[variant]}
							${className}
						`)}
					/>
				</div>
			</div>
		)
	}
)

Input.displayName = 'Input'
