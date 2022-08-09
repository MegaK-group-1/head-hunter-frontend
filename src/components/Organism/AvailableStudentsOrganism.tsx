import React, { useEffect, useState } from "react";
import { Wrapper } from "../Atoms/Wrapper";
import { StudentsViewWrapper } from "../Atoms/StudentsViewWrapper";
import { StudentsUnderNav } from "../Molecules/AvailableStudents/StudentsUnderNav";
import { StudentsFilterHead } from "../Molecules/AvailableStudents/StudentsFilterHead";
import { StudentDetails } from "../../utils/types/user";
import { SingleStudentContainer } from "../Molecules/AvailableStudents/SingleStudentContainer";
import { getAllStudents } from "../Molecules/AvailableStudents/functions /getAllStudents";

export function AvailableStudentsOrganism() {
  const [students, setStudents] = useState([] as StudentDetails[]);
  useEffect(() => {
    (async () => {
      setStudents(await getAllStudents());
    })();
  }, []);
  return (
    <Wrapper verticalStart="flex-start">
      <StudentsViewWrapper>
        <StudentsUnderNav />
        <StudentsFilterHead />
        {students.map((single) => (
          <SingleStudentContainer
            key={single.id}
            details={single}
          />
        ))}
      </StudentsViewWrapper>
    </Wrapper>
  );
}
