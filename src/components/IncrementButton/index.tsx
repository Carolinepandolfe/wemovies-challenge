import { ChangeEvent, useState } from 'react'

import { BsPlus } from 'react-icons/bs'
import { RiSubtractFill } from 'react-icons/ri'

import Button from 'components/Button'

import * as Styled from './styles'

const IncrementButton = () => {
	const [quantity, setQuantity] = useState(0)

	const increment = () => {
		setQuantity((prevState) => {
			return prevState + 1
		})
	}

	const decrement = () => {
		setQuantity((prevState) => {
			if (prevState > 0) {
				return prevState - 1
			}
			return 0
		})
	}

	const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target

		setQuantity(Number(value.replace(/\D/g, '').replace(/(\d{4})\d+?$/, '$1')))
	}

	return (
		<Styled.Increment>
			<Button type="button" onClick={decrement}>
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
