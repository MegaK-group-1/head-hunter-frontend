import React from "react";
import styled from 'styled-components'
import {LogoMegaKRT} from "../Atoms/LogoMegaKRT";
import {NavbarLink} from '../Atoms/NavbarLink'

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #222224;
  display: flex;
  justify-content: center;
  gap:15rem;
  flex-direction: row;
  overflow: hidden;

  @media screen and  (max-width: 768px) {
    
gap:7rem;
}
`



export const AdminPage = () => {
    return(

        <Wrapper>
            <LogoMegaKRT />
            <NavbarLink to='/csv'>Dodaj Kursantów</NavbarLink>
            <NavbarLink to='/hr' >Dodaj HR</NavbarLink>
        </Wrapper>
    )
};
