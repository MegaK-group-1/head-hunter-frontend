import React, {FormEvent, useState} from 'react'
import styled from 'styled-components'
import {ReusableInput} from '../../Atoms/ReusableInput'
import { StyledLink } from '../../Atoms/Link'
import { Button } from '../../Atoms/Button'
import { Paragraph } from '../../Atoms/Paragraph'
import {api} from "../../../utils/api/api";
import { UserLoginReq } from 'types'
import {NavigateFunction, useNavigate} from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  padding: 15px;
`

const OperationStatusInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  padding: 15px;
`

const OperationStatusInfoText = styled.p`
  font-size: 15px;
  color: #e12735;
`

const PositionWrapper = styled.div`
  width: 100%;
  padding: 25px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const handleClickOnLogin = async (data : UserLoginReq, responseInfoSetter: React.Dispatch<React.SetStateAction<string>>, nav: NavigateFunction)=>{
    const response = JSON.parse(await  api.sendLoginReq(data));
    response.error && responseInfoSetter("Podane dane są niepoprawne !!!");
    //TODO Change this path below that it will redirect logged user to its account page.
    nav('./')
}

export const LoginForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const [ loginData, setLoginData ] = useState({} as UserLoginReq );
  const [ statusText, setStatusText ] = useState('');
  const nav = useNavigate();


    return (
      <>
          <OperationStatusInfo>
              <OperationStatusInfoText>{statusText}</OperationStatusInfoText>
          </OperationStatusInfo>

    <StyledForm onSubmit={handleSubmit}>
      <ReusableInput type='email' placeholder='E-mail'  onChangeHandler = {setLoginData} />

      <ReusableInput type='password' autoComplete='on' placeholder='Hasło' onChangeHandler={setLoginData} />

      <StyledLink align='flex-end' to='/password-reset'>
        Zapomniałeś Hasła?
      </StyledLink>

      <PositionWrapper>
        <Paragraph>Nie masz konta?</Paragraph>
        <StyledLink decoration='underline' align='center' to='/register'>
          Zarejestruj się
        </StyledLink>

        <Button onClick={() => handleClickOnLogin(loginData, setStatusText, nav)}>Zaloguj się</Button>
      </PositionWrapper>
    </StyledForm>
      </>
  )
}
