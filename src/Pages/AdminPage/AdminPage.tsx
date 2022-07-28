import React, {MouseEventHandler, useCallback} from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Papa from "papaparse";
import Logo from "../../assets/images/LogoMegaK.png";

interface Props {
    children: string
    long?: boolean
    onClick?: MouseEventHandler;

}



const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #222224;
  display: flex;
  justify-content: center;
  gap:5rem;
  flex-direction: row;
  overflow: hidden;

  @media screen and  (max-width: 768px) {
gap:2rem;
}
`
const LogoMegaK = styled.div`
  display: flex;
  position: absolute;
  top: 5rem;
  right: 5rem;
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 30px;
  min-width: 120px;
  min-height: 75px;
  width: 10vw;
  height: 7vw;
`;
const StyledButton = styled.button<Props>`
  width: ${({long}) => (long ? '200px' : '100px')};
  height: 39px;
  background-color: #e12735;
  margin-bottom: -500px;
  color: white;
  text-align: center;
  border: none;
  align-self: center;
  transition: 0.2s linear;

  :hover {
    box-shadow: 0 0 1px 1px white;
    cursor: pointer;
  }

`





export const AdminPage = () => {


    return(

        <Wrapper>
            <LogoMegaK />
            <StyledButton>Dodaj Kursantów</StyledButton>
             {/*@ts-ignore*/}
            <StyledButton>Dodaj HR</StyledButton>
        </Wrapper>
    )
};
