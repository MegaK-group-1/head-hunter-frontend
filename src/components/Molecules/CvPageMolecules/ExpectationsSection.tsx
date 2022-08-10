import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { CvFlexContainer } from "../../Atoms/CvFlexContainer";
import { GridContainer } from "../../Atoms/GridContainer";
import { UnderTitle } from "../../Atoms/UnderTitle";
import { CvDetailsInterface } from "../../../utils/types/CvDetailsInterface";

interface ExpectationsDetails {
  userDetails: CvDetailsInterface;
}

enum UnderTitleOptions {
  location = "Preferowane miejsce pracy",
  city = "Docelowe miasto, gdzie chce pracować kandydat",
  contract = "Oczekiwany typ kontraktu",
  salary = "Oczekiwane wynagrodzenie miesięczne netto",
  trial = "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
  experince = "Komercyjne doświadczenie w programowaniu",
}

export function ExpectationsSection(props: ExpectationsDetails) {
  const { userDetails } = props;
  const {
    workExperience,
    targetWorkCity,
    expectedTypeWork,
    canTakeApprenticeship,
    expectedContractType,
    expectedSalary,
  } = userDetails;

  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Oczekiwanie w stosunku do zatrudnienia</HeadTitle>
      </CvHeadLabel>

      <CvUnderTitleSection flexDirection="row">
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
            <UnderTitle>{expectedTypeWork}</UnderTitle>
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
            <UnderTitle>{targetWorkCity}</UnderTitle>
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
            <UnderTitle>{canTakeApprenticeship}</UnderTitle>
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
            <UnderTitle>{workExperience}</UnderTitle>
          </CvFlexContainer>
        </GridContainer>
      </CvUnderTitleSection>
    </>
  );
}
