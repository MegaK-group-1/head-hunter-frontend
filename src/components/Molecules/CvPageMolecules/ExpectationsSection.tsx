import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { CvExpectations } from "../../../utils/TestUser";
import { CvFlexContainer } from "../../Atoms/CvFlexContainer";
import { GridContainer } from "../../Atoms/GridContainer";
import { CvUnderTitle } from "../../Atoms/CvUnderTitle";

interface ExpectationsDetails {
  userDetails: CvExpectations;
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
    workPlacePreffer,
    prefferCity,
    expectedContractType,
    expectedSalary,
    consentForFreeInternships,
    commercialProgrammingExperience,
  } = userDetails;

  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Oczekiwanie w stosunku do zatrudnienia</HeadTitle>
      </CvHeadLabel>

      <CvUnderTitleSection flexDirection="row">
        <GridContainer>
          <CvFlexContainer borderR>
            <CvUnderTitle>{UnderTitleOptions.location}</CvUnderTitle>
            <CvUnderTitle white>{workPlacePreffer}</CvUnderTitle>
          </CvFlexContainer>

          <CvFlexContainer borderR>
            <CvUnderTitle>{UnderTitleOptions.city}</CvUnderTitle>
            <CvUnderTitle white>{prefferCity}</CvUnderTitle>
          </CvFlexContainer>

          <CvFlexContainer borderR>
            <CvUnderTitle>{UnderTitleOptions.contract}</CvUnderTitle>
            <CvUnderTitle white>{expectedContractType}</CvUnderTitle>
          </CvFlexContainer>

          <CvFlexContainer borderR>
            <CvUnderTitle>{UnderTitleOptions.salary}</CvUnderTitle>
            <CvUnderTitle white>{expectedSalary}</CvUnderTitle>
          </CvFlexContainer>

          <CvFlexContainer borderR>
            <CvUnderTitle>{UnderTitleOptions.trial}</CvUnderTitle>
            <CvUnderTitle white>{consentForFreeInternships}</CvUnderTitle>
          </CvFlexContainer>

          <CvFlexContainer borderR>
            <CvUnderTitle>{UnderTitleOptions.experince}</CvUnderTitle>
            <CvUnderTitle white>
              {" "}
              {commercialProgrammingExperience}
            </CvUnderTitle>
          </CvFlexContainer>
        </GridContainer>
      </CvUnderTitleSection>
    </>
  );
}
