import styled from "styled-components";
import {Input} from "../../Atoms/Input/Input";
import {StyledLink} from "../../Atoms/StyledLink/Link";
import React from "react";
import {LoginButton} from "../../Atoms/LoginButton/LoginButton";
import {Paragraph} from "../../Atoms/Paragraph/Paragraph";


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
                type={"email"}
                placeholder={"E-mail"}/>

            <Input
                type={"password"}
                placeholder={"Hasło"}/>

            <StyledLink
                align={"flex-end"}
                to={'/password-reset'}>
                Zapomniałeś Hasła?
            </StyledLink>

            <PositionWrapper>

                <Paragraph>Nie masz konta?</Paragraph>
                <StyledLink
                    underline={"true"}
                    align={"center"}
                    to={'/register'}>
                    Zarejestruj się
                </StyledLink>

                <LoginButton/>
            </PositionWrapper>

        </StyledForm>
    )
}