interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const LayoutDefault = ({ children }: Props) => {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				{children}
			</div>
		</div>
	)
}
