import React, { useState } from "react";
import styled from "styled-components";
import { Button, ButtonSize } from "../../Atoms/Button";
import { StudentsArrowButton } from "../../Atoms/StudentsArrowButton";
import { UnderTitle } from "../../Atoms/UnderTitle";
import { StudentsHeadPart } from "../../Atoms/StudentsHeadPart";
import { StudentsExpectationSection } from "../../Atoms/StudentsExpectationSection";
import { StudentDetails } from "../../../utils/types/user";

interface Props {
  details: StudentDetails;
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
  const { details } = props;
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
          <UnderTitle
            fontWeight="normal"
            color="white"
          >
            {details.firstName}
          </UnderTitle>
          <UnderTitle
            fontWeight="normal"
            color="white"
          >
            {details.lastName}
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
