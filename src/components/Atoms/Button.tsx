import React, {MouseEventHandler} from 'react'
import styled from 'styled-components'

interface Props {
    children: string
    long?: boolean
    onClick?: MouseEventHandler;

}

const StyledButton = styled.button<Props>`
  width: ${({long}) => (long ? '220px' : '110px')};
  height: 39px;
  font-size: 1rem;
  letter-spacing: 2px;
  background-color: #e12735;
  color: white;
  text-align: center;
  border: none;
  align-self: center;
  transition: 0.2s linear;

  :hover {
    box-shadow: 0 0 1px 1px white;
    cursor: pointer;
  }
`

export const Button = (props: Props) => {

    const {long, children, onClick} = props

    return (
        <StyledButton onClick={onClick} long={long}>
            {children}
        </StyledButton>
    )
}
