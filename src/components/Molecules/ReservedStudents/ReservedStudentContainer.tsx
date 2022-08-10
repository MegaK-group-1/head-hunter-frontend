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
import { Avatar } from "../../Atoms/Avatar";

interface Props {
  details: StudentDetails;
}

interface PosProps {
  direction?: string;
  squeeze?: boolean;
}

const Positioner = styled.div<PosProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction || "row"};
  padding: 10px;
  gap: ${({ direction }) => (direction ? "5px" : "25px")};
  @media (max-width: 1000px) {
    font-size: 0.8em;
    width: 70%;
    gap: 5px;
  }
  @media (max-width: 600px) {
    flex-direction: ${({ squeeze }) => (squeeze ? "row" : "column")};
  }
`;

export function ReservedStudentContainer(props: Props) {
  const [isOpen, setOpen] = useState(false);
  const { details } = props;
  const [userDetails] = useState(details);
  const { avatar } = userDetails;
  const UserDetails = useContext(StudentCvDetails);
  const handleUninterested = async () => {
    // here is going to be fetch for backend that this student is no more reserved
    return true;
  };
  const handleHired = () => {
    // there will be fetch that tells this person is hired!
    return true;
  };
  const handleCvDetails = async () => {
    // set Context id to fetch the right data on Cv Page view
    UserDetails.id = userDetails.id;
  };
  const handleOpening = () => {
    setOpen(false);
    setOpen(!isOpen);
  };

  // @TODO Create Avatar and Register HeadTitle for each Student.
  return (
    <>
      <StudentsHeadPart
        squeeze
        key={details.id}
        isOpen={isOpen}
      >
        <Positioner>
          <Positioner direction="column">
            <UnderTitle
              fontWeight="normal"
              color="#CFCFCF"
              fontSize=".8em"
            >
              Rezerwacja do
            </UnderTitle>
            <UnderTitle
              fontWeight="bold"
              color="white"
            >
              12.09.2022
            </UnderTitle>
          </Positioner>
          <Avatar src={avatar} />
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
            squeeze
            onClick={handleUninterested}
            size={ButtonSize.small}
          >
            Brak zainteresowania
          </Button>
          <Button
            squeeze
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
