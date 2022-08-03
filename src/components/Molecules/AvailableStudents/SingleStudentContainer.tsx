import React, { useState } from "react";
import styled from "styled-components";
import { Button, ButtonSize } from "../../Atoms/Button";
import { StudentsArrowButton } from "../../Atoms/StudentsArrowButton";
import { UnderTitle } from "../../Atoms/UnderTitle";
import { StudentsHeadPart } from "../../Atoms/StudentsHeadPart";
import { StudentsExpectationSection } from "../../Atoms/StudentsExpectationSection";

interface Props {
  children?: string;
  details: {
    name: string;
    workPlacePreffer: string;
    prefferCity: string;
    expectedContractType: string;
    expectedSalary: string;
    consentForFreeInternships: string;
    commercialProgrammingExperience: string;
    id: number;
  };
}

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  gap: 25px;
  @media (max-width: 700px) {
    font-size: 0.7em;
    width: 70%;
    gap: 5px;
  }
`;

export function SingleStudentContainer(props: Props) {
  const { details, children } = props;
  const [userDetails] = useState(details);
  const [isOpen, setOpen] = useState(false);

  const handleOpening = () => {
    setOpen(false);
    setOpen(!isOpen);
  };

  return (
    <>
      <StudentsHeadPart
        key={details.id}
        isOpen={isOpen}
      >
        <Positioner>
          <UnderTitle color="white">{children}</UnderTitle>
          <UnderTitle
            fontWeight="normal"
            color="white"
          >
            {details.name}
          </UnderTitle>
        </Positioner>
        <Positioner>
          <Button size={ButtonSize.small}>Zarezerwuj rozmowę</Button>
          <StudentsArrowButton
            onClick={handleOpening}
            isOpen={isOpen}
          />
        </Positioner>
      </StudentsHeadPart>
      {isOpen && (
        <StudentsExpectationSection
          isOpen={isOpen}
          userDetails={userDetails}
        />
      )}
    </>
  );
}
