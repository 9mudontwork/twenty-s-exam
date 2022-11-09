interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const CardTitle: React.FC<Props> = ({ children }) => {
	return (
		<div className="sm:mx-auto sm:w-full sm:max-w-md">
			<p className="mt-6 text-center text-3xl font-extrabold text-gray-900">
				{children}
			</p>
		</div>
	)
}
