import React, { useState } from "react";
import { Wrapper } from "../Atoms/Wrapper";
import { StudentsViewWrapper } from "../Atoms/StudentsViewWrapper";
import { SingleStudentContainer } from "../Molecules/AvailableStudents/SingleStudentContainer";
import { StudentsUnderNav } from "../Molecules/AvailableStudents/StudentsUnderNav";
import { fakeDb } from "../../utils/fakeDb";
import { StudentsFilterHead } from "../Molecules/AvailableStudents/StudentsFilterHead";

export function AvailableStudentsOrganism() {
  const [students] = useState(fakeDb);
  return (
    <Wrapper verticalStart="flex-start">
      <StudentsViewWrapper>
        <StudentsUnderNav />
        <StudentsFilterHead />
        {students.map((details) => (
          <SingleStudentContainer
            key={details.id}
            details={details}
          />
        ))}
      </StudentsViewWrapper>
    </Wrapper>
  );
}
