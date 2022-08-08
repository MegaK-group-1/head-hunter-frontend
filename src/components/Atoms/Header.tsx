import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: aliceblue;
  margin: 15px;
  text-align: center;
  @media (max-width: 480px) {
    margin: 2px;
    font-size: 1.2em;
  }
`

export const Header = () => {
    return <StyledHeader>Witamy w serwisie!</StyledHeader>
}