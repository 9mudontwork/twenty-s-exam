// my research source (typescript)
// https://stackoverflow.com/questions/54654303/using-a-forwardref-component-with-children-in-typescript

import { _ } from '@/utils/_.utils'
import { forwardRef } from 'react'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	variant?: 'primary' | 'secondary'
	size?: 'default'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ children, className, variant = 'primary', size = 'default', ...rest },
		ref
	) => {
		const classes = {
			base: 'px-4 py-2 inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-offset-2 ',
			variant: {
				primary:
					'focus:ring-indigo-500 border-transparent text-white bg-indigo-600 hover:bg-indigo-700',
				secondary:
					'focus:ring-gray-300 border-gray-300 text-gray-700 bg-white hover:bg-gray-50',
			},
			size: {
				default: 'text-sm font-medium rounded-md shadow-sm',
			},
		}

		return (
			<button
				ref={ref}
				{...rest}
				type="button"
				className={_.cls(`
					${classes.base} 
					${classes.variant[variant]}
					${classes.size[size]}
					${className}
				`)}
			>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'
