import React from "react";
import styled from "styled-components";

interface Props {
    children: string
    long?: boolean

}

const StyledButton = styled.button<Props>`
  width: ${({long}) => long ? "140px" : "100px"};
  height: 40px;
  background-color: #e12735;
  color: white;
  text-align: center;
  border: none;
  align-self: center;


`

export const Button = (props: Props) => {
    const {long, children} = props

    return (
        <StyledButton long={long}>{children}</StyledButton>
    )
}