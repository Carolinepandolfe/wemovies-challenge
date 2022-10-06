import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as Styled from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
	return <Styled.Button {...props}>{children}</Styled.Button>
}

export default Button
