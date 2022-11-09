interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const CardLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			{children}
		</div>
	)
}
