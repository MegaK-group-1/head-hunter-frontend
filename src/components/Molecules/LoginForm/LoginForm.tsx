import React from "react";
import styled from "styled-components";
import {Input} from "../../Atoms/Input";
import {StyledLink} from "../../Atoms/Link";
import {Button} from "../../Atoms/Button";
import {Paragraph} from "../../Atoms/Paragraph";


const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  padding: 15px;

`

const PositionWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
`


export const LoginForm = () => {

    return (

        <StyledForm>
            <Input
                type="email"
                placeholder="E-mail"/>

            <Input
                type="password"
                autoComplete="on"
                placeholder="Hasło"/>

            <StyledLink
                align="flex-end"
                to='/password-reset'>
                Zapomniałeś Hasła?
            </StyledLink>

            <PositionWrapper>

                <Paragraph>Nie masz konta?</Paragraph>
                <StyledLink
                    decoration="underline"
                    align="center"
                    to='/register'>
                    Zarejestruj się
                </StyledLink>

                <Button>Zaloguj się</Button>
            </PositionWrapper>

        </StyledForm>
    )
}