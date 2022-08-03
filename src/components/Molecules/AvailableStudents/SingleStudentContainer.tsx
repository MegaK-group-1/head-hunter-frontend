import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, ButtonSize } from "../../Atoms/Button";
import { StudentsArrowButton } from "../../Atoms/StudentsArrowButton";
import { UnderTitle } from "../../Atoms/UnderTitle";
import { StudentsHeadPart } from "../../Atoms/StudentsHeadPart";
import { cvDetails, FinalCvInterface } from "../../../utils/TestUser";
import { StudentsExpectationSection } from "../../Atoms/StudentsExpectationSection";

interface Props {
  children?: string;
}

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  gap: 25px;
`;

export function SingleStudentContainer(props: Props) {
  const [userDetails] = useState(cvDetails as FinalCvInterface);
  const [isOpen, setOpen] = useState(false);
  const handleOpening = () => {
    setOpen(false);
    setOpen(!isOpen);
  };
  useEffect(() => {}, [isOpen]);

  const { children } = props;
  return (
    <>
      <StudentsHeadPart isOpen={isOpen}>
        <Positioner>
          <UnderTitle color="white">{children}</UnderTitle>
          <UnderTitle
            fontWeight="normal"
            color="white"
          >
            Jan Nowak
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
          userDetails={userDetails.expectations}
        />
      )}
    </>
  );
}
