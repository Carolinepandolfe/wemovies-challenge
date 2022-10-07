import Button from 'components/Button'

import * as Styled from './styles'

type MessageProps = {
	message: string
	image: string
}

const Message = ({ image, message }: MessageProps) => {
	return (
		<Styled.Container>
			<h1>{message}</h1>
			<img src={image} alt="" />
			<Button type="button">Voltar</Button>
		</Styled.Container>
	)
}

export default Message
