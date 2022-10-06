import { ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string
}

const Button = ({ text, ...props }: ButtonProps) => {
	return <Styled.Button {...props}>{text}</Styled.Button>
}

export default Button
