import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from "../../assets/images/LogoMegaK.png";


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
//logo MegaK right-top
export const LogoMegaKRT = styled.div`
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

const NavbarLink = styled(Link)`
  width:auto;
  height: 39px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #e12735;
  margin-bottom: -500px;
  color: white;
  text-align: center;
  text-decoration: none;
  line-height: 39px;
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
            <LogoMegaKRT />
            <NavbarLink to='/csv'>Dodaj Kursantów</NavbarLink>
            <NavbarLink to='' >Dodaj HR</NavbarLink>
        </Wrapper>
    )
};
