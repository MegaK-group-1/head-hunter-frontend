import React, {MouseEventHandler} from 'react'
import styled from 'styled-components'

interface Props {
    children: string
    onClick?: MouseEventHandler;
    size: ButtonSize

}

export enum ButtonSize{
    small= '100px',
    medium = '140px',
    big = '200px',
}

const StyledButton = styled.button<Props>`
  width: ${({size})=> size};
  height: 39px;
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

    const {children, onClick, size} = props

    return (
        <StyledButton onClick={onClick} size={size}>
            {children}
        </StyledButton>
    )
}
