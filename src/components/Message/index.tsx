import { useNavigate } from 'react-router-dom'

import Button from 'components/Button'

import { getType } from './constants/getType'

import * as Styled from './styles'

type MessageProps = {
	type: 'empty' | 'success'
}

const Message = ({ type }: MessageProps) => {
	const navigate = useNavigate()

	const backToHome = () => navigate('/')

	return (
		<Styled.Container>
			<h1>{getType[type].message}</h1>
			<img src={getType[type].image} alt="" />
			<Button type="button" onClick={backToHome}>
				Voltar
			</Button>
		</Styled.Container>
	)
}

export default Message
