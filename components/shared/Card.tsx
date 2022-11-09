interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="sm:mx-auto sm:w-full sm:max-w-md">
			<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
				{children}
			</div>
		</div>
	)
}
