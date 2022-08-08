import React, {useEffect, useState} from 'react';
import {UserPageOrganism} from "../../components/Organism/UserPageOrganism";
import {Header} from "../../components/Atoms/Header";
import {Footer} from "../../components/Atoms/Footer";
import styled from "styled-components";
import {Container, Grid, Grow} from "@mui/material";
import {useDispatch} from "react-redux";

export const UserPageDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #222224;
  text-align: center;
  color: white;
  padding: 25px;
`

export const UserPage = () => {
    return (
        <UserPageDiv>
            <Header/>
            <UserPageOrganism/>
            <Footer/>
        </UserPageDiv>
    )
}


