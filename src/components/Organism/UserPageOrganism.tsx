import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Grow } from "@mui/material";
import { UserDescription } from "../Molecules/UserDescription/UserDescription";
import { UserForm } from "../Molecules/UserDescription/UserForm";

const ContainerDiv = styled.div`
  box-sizing: border-box;
  margin: 3px;
  text-align: center;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    margin: 0;
  }
`;
const MainDiv = styled.div`
  margin: 3px;
  text-align: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 20px;
  }
`;
const StyledDiv = styled.div`
  padding: 3px;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  width: 55vw;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const StyledForm = styled.div`
  padding: 3px;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  width: 35vw;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export function UserPageOrganism() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    githubUsername: "",
    portfolioUrls: "",
    bonusProjectUrls: "",
    bio: "",
    expectedContractType: "",
    expectedSalary: "",
    expectedTypeWork: "",
    targetWorkCity: "",
    canTakeApprenticeship: "",
    education: "",
    monthsOfCommercialExp: "",
    workExperience: "",
    courses: "",
  });

  // const updateField = (userData: React.SetStateAction<{ firstName: string; lastName: string; email: string; phone: string; githubUsername: string; portfolioUrls: string; bonusProjectUrls: string; bio: string; expectedContractType: string; expectedSalary: string; expectedTypeWork: string; targetWorkCity: string; canTakeApprenticeship: string; education: string; monthsOfCommercialExp: string; workExperience: string; courses: string; }>) => {
  //     setUserData(
  //         userData,
  //     )
  // }

  const updateData = (data: any) => {
    setUserData(data);
  };

  // const fetchUser = async () => {
  //     await fetch('http://localhost:3001/users/1')
  //         .then((response) => response.json())
  //         .then((response) => updateField(response))
  //         }
  // };

  // @ts-ignore
  return (
    <>
      {/* <button onClick={fetchUser}>Pobierz swoje dane</button> */}
      <ContainerDiv>
        <Grow in>
          <MainDiv>
            <Grid
              item
              xs={12}
              sm={7}
            >
              <StyledDiv>
                <UserDescription user={userData} />
              </StyledDiv>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <StyledForm>
                <UserForm func={updateData} />
              </StyledForm>
            </Grid>
          </MainDiv>
        </Grow>
      </ContainerDiv>
    </>
  );
}
