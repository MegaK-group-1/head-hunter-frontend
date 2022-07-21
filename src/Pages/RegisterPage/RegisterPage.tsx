import React from "react";
import styled from "styled-components";
import {Input} from "../../components/Atoms/Input";
import {StyledLink} from "../../components/Atoms/Link";
import {LogoMegaK} from "../../components/Atoms/LogoMegaK";
import {Button} from "../../components/Atoms/Button";
import {Paragraph} from "../../components/Atoms/Paragraph";


const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  padding: 15px;

`

const PositionWrapper = styled.div`
  width: 25%;
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: row;
`


export const RegisterPage = () => {

    return (

        <StyledForm>
            <LogoMegaK />
            <Input
                type="email"
                placeholder="E-mail"/>

            <Input
                type="password"
                autoComplete="on"
                placeholder="Hasło"/>

            <Input
                type="password"
                autoComplete="on"
                placeholder="Powtórz Hasło"/>


            <PositionWrapper>


                <Button>Utwórz użytkownika</Button>
            </PositionWrapper>

        </StyledForm>
    )
}
