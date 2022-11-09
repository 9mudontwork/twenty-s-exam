interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ children, ...rest }) => {
	return <form {...rest}>{children}</form>
}
