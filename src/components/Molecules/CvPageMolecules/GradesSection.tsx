import React from "react";
import styled from "styled-components";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvGrades } from "../../../utils/TestUser";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { StarsGradeMolecule } from "./StarsGradeMolecule";
import { CvFlexContainer } from "../../Atoms/CvFlexContainer";
import { GridContainer } from "../../Atoms/GridContainer";

const UnderTitle = styled.p`
  color: #cfcfcf;
  width: 70%;
  font-size: 0.8em;
  height: 30px;
`;

enum UnderTitleOptions {
  courseCompletion = "Ocena przejścia kursu",
  courseEngagment = "Ocena aktywności i zaangażowania na kursie",
  projectDegree = "Ocena kodu w projekcie własnym",
  teamProjectDegree = "Ocena pracy w zespole w Scrum",
}

interface Props {
  userGrades: CvGrades;
}

export function GradesSection(props: Props) {
  const { userGrades } = props;
  const {
    courseCompletion,
    courseEngagment,
    projectDegree,
    teamProjectDegree,
  } = userGrades;

  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Oceny</HeadTitle>
      </CvHeadLabel>
      <CvUnderTitleSection flexDirection="row">
        <GridContainer>
          <CvFlexContainer>
            <UnderTitle>{UnderTitleOptions.courseCompletion}</UnderTitle>
            <StarsGradeMolecule rating={courseCompletion} />
          </CvFlexContainer>

          <CvFlexContainer>
            <UnderTitle>{UnderTitleOptions.courseEngagment}</UnderTitle>
            <StarsGradeMolecule rating={courseEngagment} />
          </CvFlexContainer>

          <CvFlexContainer>
            <UnderTitle>{UnderTitleOptions.projectDegree}</UnderTitle>
            <StarsGradeMolecule rating={projectDegree} />
          </CvFlexContainer>

          <CvFlexContainer>
            <UnderTitle>{UnderTitleOptions.teamProjectDegree}</UnderTitle>
            <StarsGradeMolecule rating={teamProjectDegree} />
          </CvFlexContainer>
        </GridContainer>
      </CvUnderTitleSection>
    </>
  );
}
