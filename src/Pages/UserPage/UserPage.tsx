import React from "react";
import styled from "styled-components";
import { Header } from "../../components/Atoms/Header";
import { Footer } from "../../components/Atoms/Footer";
import { UserPageOrganism } from "../../components/Organism/UserPageOrganism";

export const UserPageDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #222224;
  text-align: center;
  color: white;
  padding: 25px;
`;

export function UserPage() {
  return (
    <UserPageDiv>
      <Header />
      <UserPageOrganism />
      <Footer />
    </UserPageDiv>
  );
}
