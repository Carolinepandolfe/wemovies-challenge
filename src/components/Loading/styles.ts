import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  to {
    transform: rotate(360deg)
  }
`

export const Loading = styled.span`
	border: 3px solid transparent;
	border-top-color: white;
	width: 60px;
	height: 60px;
	border-radius: 100%;
	animation: ${spinner} 2s infinite;
`
