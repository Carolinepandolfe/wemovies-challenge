import { ChangeEvent } from 'react'

import { BsPlus } from 'react-icons/bs'
import { RiSubtractFill } from 'react-icons/ri'

import Button from 'components/Button'

import * as Styled from './styles'

type IncrementProps = {
	quantity: number
	increment: () => void
	decrement: () => void
	onInputQuantity: (quantity: number) => void
}

const IncrementButton = ({
	quantity,
	decrement,
	increment,
	onInputQuantity,
}: IncrementProps) => {
	const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		onInputQuantity(
			Number(value.replace(/\D/g, '').replace(/(\d{4})\d+?$/, '$1'))
		)
	}

	return (
		<Styled.Increment>
			<Button type="button" onClick={decrement} disabled={quantity === 0}>
				<RiSubtractFill />
			</Button>
			<Styled.Input
				type="text"
				value={quantity}
				onChange={handleChangeQuantity}
			/>
			<Button type="button" onClick={increment}>
				<BsPlus />
			</Button>
		</Styled.Increment>
	)
}

export default IncrementButton
