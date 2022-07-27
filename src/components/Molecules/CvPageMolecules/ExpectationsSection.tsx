import React from "react";
import styled from "styled-components";
import {CvHeadLabel} from "../../Atoms/CvHeadLabel";
import {HeadTitle} from "../../Atoms/HeadTitle";
import {CvUnderTitleSection} from "../../Atoms/CvUnderTitleSection";
import {cvExpectations} from "../../../utils/TestUser";
import {CvFlexContainer} from "../../Atoms/CvFlexContainer";
import {GridContainer} from "../../Atoms/GridContainer";

interface Props {
    white?: boolean;
}
interface ExpectationsDetails {
    userDetails: cvExpectations
}
enum UnderTitleOptions {
    location = "Preferowane miejsce pracy",
    city = "Docelowe miasto, gdzie chce pracować kandydat",
    contract = "Oczekiwany typ kontraktu",
    salary = "Oczekiwane wynagrodzenie miesięczne netto",
    trial = "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
    experince = "Komercyjne doświadczenie w programowaniu",


}

const UnderTitle = styled.p<Props>`
  font-size: ${({white}) => white ? "1em" : ".8em"};
  font-weight: ${({white})=> white ? "bold" : "normal"};
  color: ${({white}) => white ? "white" : "#CFCFCF"};
  height: 30px;
  margin-bottom: 5px;
`;

export const ExpectationsSection = (props: ExpectationsDetails) => {
    const {
        workPlacePreffer,
        prefferCity,
        expectedContractType,
        expectedSalary,
        consentForFreeInternships,
        commercialProgrammingExperience
    } = props.userDetails

    return (
        <>
            <CvHeadLabel>
                <HeadTitle>Oczekiwanie w stosunku do zatrudnienia</HeadTitle>
            </CvHeadLabel>

            <CvUnderTitleSection flexDirection='row'>
                <GridContainer>

                    <CvFlexContainer borderR>
                        <UnderTitle>{UnderTitleOptions.location}</UnderTitle>
                        <UnderTitle white>{workPlacePreffer}</UnderTitle>
                    </CvFlexContainer>

                    <CvFlexContainer borderR>
                        <UnderTitle>{UnderTitleOptions.city}</UnderTitle>
                        <UnderTitle white>{prefferCity}</UnderTitle>
                    </CvFlexContainer>

                    <CvFlexContainer borderR>
                        <UnderTitle>{UnderTitleOptions.contract}</UnderTitle>
                        <UnderTitle white>{expectedContractType}</UnderTitle>
                    </CvFlexContainer>

                    <CvFlexContainer borderR>
                        <UnderTitle>{UnderTitleOptions.salary}</UnderTitle>
                        <UnderTitle white>{expectedSalary}</UnderTitle>
                    </CvFlexContainer>

                    <CvFlexContainer borderR>
                        <UnderTitle>{UnderTitleOptions.trial}</UnderTitle>
                        <UnderTitle white>{consentForFreeInternships}</UnderTitle>
                    </CvFlexContainer>

                    <CvFlexContainer borderR>
                        <UnderTitle>{UnderTitleOptions.experince}</UnderTitle>
                        <UnderTitle white> {commercialProgrammingExperience}</UnderTitle>
                    </CvFlexContainer>

                </GridContainer>
            </CvUnderTitleSection>
        </>
    )
}