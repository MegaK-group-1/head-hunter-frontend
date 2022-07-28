import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: aliceblue;
  margin: 15px;
  text-align: center;
`

export const Header = () => {
    return <StyledHeader>Witamy w serwisie!</StyledHeader>
}