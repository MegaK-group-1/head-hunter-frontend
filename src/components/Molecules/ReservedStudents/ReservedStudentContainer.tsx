import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button, ButtonSize } from "../../Atoms/Button";
import { StudentsArrowButton } from "../../Atoms/StudentsArrowButton";
import { UnderTitle } from "../../Atoms/UnderTitle";
import { StudentsHeadPart } from "../../Atoms/StudentsHeadPart";
import { StudentsExpectationSection } from "../../Atoms/StudentsExpectationSection";
import { StudentDetails } from "../../../utils/types/user";
import { CvLink } from "../../Atoms/CvLink";
import { StudentCvDetails } from "../../../utils/Context/StudentCvDetails";

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

export function ReservedStudentContainer(props: Props) {
  const { details } = props;
  const [userDetails] = useState(details);
  const [isOpen, setOpen] = useState(false);
  const UserDetails = useContext(StudentCvDetails);
  const handleUninterested = () => {
    // here is going to be fetch for backend that this student is no more reserved
    return true;
  };
  const handleHired = () => {
    // there will be fetch that tells this person is hired!
    return true;
  };
  const handleCvDetails = () => {
    // set Context with all details needed.
    UserDetails.setDetails(details);
  };
  const handleOpening = () => {
    setOpen(false);
    setOpen(!isOpen);
  };

  // @TODO Create Avatar and Register HeadTitle for each Student.
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
            {`${details.firstName}  ${details.lastName}`}
          </UnderTitle>
        </Positioner>
        <Positioner>
          <CvLink
            onClick={handleCvDetails}
            to={details.id}
          >
            Pokaz CV
          </CvLink>
          <Button
            onClick={handleUninterested}
            size={ButtonSize.small}
          >
            Brak zainteresowania
          </Button>
          <Button
            onClick={handleHired}
            size={ButtonSize.small}
          >
            Zatrudniony
          </Button>
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
