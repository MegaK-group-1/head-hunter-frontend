import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {

    children: string;
    long?: boolean;
    onClick?: MouseEventHandler;

}

const StyledButton = styled.button<Props>`

  height: 40px;
  width: 62px;
  margin-right: 20px;
  color: #F7F7F7;
  background-color: #0A0A0A;
  border: 0;

`

export const CancelButton = (props: Props) => {

    const { children, onClick } = props

    return (

        <StyledButton onClick={onClick}>{children}</StyledButton>
        
    )
    
}
