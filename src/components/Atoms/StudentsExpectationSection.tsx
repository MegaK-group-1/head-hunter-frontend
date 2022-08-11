import React from "react";
import { CvUnderTitleSection } from "./CvUnderTitleSection";
import { GridContainer } from "./GridContainer";
import { CvFlexContainer } from "./CvFlexContainer";
import { UnderTitle } from "./UnderTitle";
import { StudentDetails } from "../../utils/types/user";

interface ExpectationsDetails {
  userDetails: StudentDetails;
  isOpen?: boolean;
}

enum UnderTitleOptions {
  location = "Preferowane miejsce pracy",
  city = "Docelowe miasto, gdzie chce pracować kandydat",
  contract = "Oczekiwany typ kontraktu",
  salary = "Oczekiwane wynagrodzenie miesięczne netto",
  trial = "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
  experince = "Komercyjne doświadczenie w programowaniu",
  courseCompletion = "Ocena przejścia kursu",
  courseEngagment = "Ocena aktywności i zaangażowania na kursie",
  projectDegree = "Ocena kodu w projekcie własnym",
  teamProjectDegree = "Ocena pracy w zespole w Scrum",
}

export function StudentsExpectationSection(props: ExpectationsDetails) {
  const { userDetails, isOpen } = props;
  const {
    canTakeApprenticeship,
    expectedTypeWork,
    expectedContractType,
    monthsOfCommercialExp,
    targetWorkCity,
    expectedSalary,
    teamProjectDegree,
    courseEngagment,
    courseCompletion,
    projectDegree,
  } = userDetails;

  return (
    <CvUnderTitleSection
      isOpen={isOpen}
      flexDirection="row"
    >
      <GridContainer>
        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.courseCompletion}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {courseCompletion} / 5
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.courseEngagment}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {courseEngagment} / 5
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.projectDegree}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {projectDegree} / 5
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.teamProjectDegree}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {teamProjectDegree} / 5
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.location}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {expectedTypeWork}
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.city}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {targetWorkCity}
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.contract}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {expectedContractType}
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.salary}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {expectedSalary}
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.trial}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {canTakeApprenticeship}
          </UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer>
          <UnderTitle
            fontWeight="normal"
            fontSize=".7em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.experince}
          </UnderTitle>
          <UnderTitle
            fontSize=".8em"
            fontWeight="normal"
          >
            {monthsOfCommercialExp}
          </UnderTitle>
        </CvFlexContainer>
      </GridContainer>
    </CvUnderTitleSection>
  );
}
