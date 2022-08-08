import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {

    children: string;
    onClick: MouseEventHandler;

}

const StyledButton = styled.button<Props>`

  width: 130px;
  height: 31px;
  border: 0;
  padding: 4px 10px;
  text-align: left;
  letter-spacing: 0px;
  color: #F7F7F7;
  background: #172A35 0% 0% no-repeat padding-box;
  font: normal normal 500 14px/23px Catamaran;

`

export const ClearButton = (props: Props) => {
    const { children, onClick } = props

    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}
