import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #e12735;
  color: white;
  text-align: center;
  border: none;
  align-self: center;

`

export const LoginButton = () => {

    return (
        <Button>Zaloguj Się</Button>
    )
}