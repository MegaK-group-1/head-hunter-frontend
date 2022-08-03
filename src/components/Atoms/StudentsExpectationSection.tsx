import React from "react";
import { CvExpectations } from "../../utils/TestUser";
import { CvUnderTitleSection } from "./CvUnderTitleSection";
import { GridContainer } from "./GridContainer";
import { CvFlexContainer } from "./CvFlexContainer";
import { UnderTitle } from "./UnderTitle";

interface ExpectationsDetails {
  userDetails: CvExpectations;
  isOpen?: boolean;
}

enum UnderTitleOptions {
  location = "Preferowane miejsce pracy",
  city = "Docelowe miasto, gdzie chce pracować kandydat",
  contract = "Oczekiwany typ kontraktu",
  salary = "Oczekiwane wynagrodzenie miesięczne netto",
  trial = "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
  experince = "Komercyjne doświadczenie w programowaniu",
}

export function StudentsExpectationSection(props: ExpectationsDetails) {
  const { userDetails, isOpen } = props;
  const {
    workPlacePreffer,
    prefferCity,
    expectedContractType,
    expectedSalary,
    consentForFreeInternships,
    commercialProgrammingExperience,
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
            fontSize=".8em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.location}
          </UnderTitle>
          <UnderTitle>{workPlacePreffer}</UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".8em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.city}
          </UnderTitle>
          <UnderTitle>{prefferCity}</UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".8em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.contract}
          </UnderTitle>
          <UnderTitle>{expectedContractType}</UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".8em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.salary}
          </UnderTitle>
          <UnderTitle>{expectedSalary}</UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".8em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.trial}
          </UnderTitle>
          <UnderTitle>{consentForFreeInternships}</UnderTitle>
        </CvFlexContainer>

        <CvFlexContainer borderR>
          <UnderTitle
            fontWeight="normal"
            fontSize=".8em"
            color="#CFCFCF"
            height="30px"
          >
            {UnderTitleOptions.experince}
          </UnderTitle>
          <UnderTitle>{commercialProgrammingExperience}</UnderTitle>
        </CvFlexContainer>
      </GridContainer>
    </CvUnderTitleSection>
  );
}
