import React from "react";
import { Wrapper } from "../Atoms/Wrapper";
import { StudentsViewWrapper } from "../Atoms/StudentsViewWrapper";
import { SingleStudentContainer } from "../Molecules/AvailableStudents/SingleStudentContainer";

export function AvailableStudentsOrganism() {
  return (
    <Wrapper verticalStart="flex-start">
      <StudentsViewWrapper>
        <SingleStudentContainer />
        <SingleStudentContainer />
        <SingleStudentContainer />
        <SingleStudentContainer />
        <SingleStudentContainer />
        <SingleStudentContainer />
      </StudentsViewWrapper>
    </Wrapper>
  );
}
