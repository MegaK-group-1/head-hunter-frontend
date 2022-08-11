import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { StarsGradeMolecule } from "./StarsGradeMolecule";
import { CvFlexContainer } from "../../Atoms/CvFlexContainer";
import { GridContainer } from "../../Atoms/GridContainer";
import { UnderTitle } from "../../Atoms/UnderTitle";
import { CvDetailsInterface } from "../../../utils/types/CvDetailsInterface";

enum UnderTitleOptions {
  courseCompletion = "Ocena przejścia kursu",
  courseEngagment = "Ocena aktywności i zaangażowania na kursie",
  projectDegree = "Ocena kodu w projekcie własnym",
  teamProjectDegree = "Ocena pracy w zespole w Scrum",
}

interface Props {
  userGrades: CvDetailsInterface;
}

export function GradesSection(props: Props) {
  const { userGrades } = props;
  const {
    courseCompletion,
    teamProjectDegree,
    projectDegree,
    courseEngagment,
  } = userGrades;

  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Oceny</HeadTitle>
      </CvHeadLabel>
      <CvUnderTitleSection flexDirection="row">
        <GridContainer>
          <CvFlexContainer>
            <UnderTitle
              color="#cfcfcf"
              width="70%"
              fontSize=".8em"
              height="30px"
              fontWeight="normal"
            >
              {UnderTitleOptions.courseCompletion}
            </UnderTitle>
            <StarsGradeMolecule rating={courseCompletion} />
          </CvFlexContainer>

          <CvFlexContainer>
            <UnderTitle
              color="#cfcfcf"
              width="70%"
              fontSize=".8em"
              height="30px"
              fontWeight="normal"
            >
              {UnderTitleOptions.courseEngagment}
            </UnderTitle>
            <StarsGradeMolecule rating={courseEngagment} />
          </CvFlexContainer>

          <CvFlexContainer>
            <UnderTitle
              color="#cfcfcf"
              width="70%"
              fontSize=".8em"
              height="30px"
              fontWeight="normal"
            >
              {UnderTitleOptions.projectDegree}
            </UnderTitle>
            <StarsGradeMolecule rating={projectDegree} />
          </CvFlexContainer>

          <CvFlexContainer>
            <UnderTitle
              color="#cfcfcf"
              width="70%"
              fontSize=".8em"
              height="30px"
              fontWeight="normal"
            >
              {UnderTitleOptions.teamProjectDegree}
            </UnderTitle>
            <StarsGradeMolecule rating={teamProjectDegree} />
          </CvFlexContainer>
        </GridContainer>
      </CvUnderTitleSection>
    </>
  );
}
