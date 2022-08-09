import React, { useEffect, useState } from "react";
import { Wrapper } from "../Atoms/Wrapper";
import { StudentsViewWrapper } from "../Atoms/StudentsViewWrapper";
import { StudentsUnderNav } from "../Molecules/AvailableStudents/StudentsUnderNav";
import { StudentsFilterHead } from "../Molecules/AvailableStudents/StudentsFilterHead";
import { StudentDetails } from "../../utils/types/user";
import { getAllStudents } from "../Molecules/AvailableStudents/functions /getAllStudents";
import { ReservedStudentContainer } from "../Molecules/ReservedStudents/ReservedStudentContainer";

export function ReservedStudentsOrganism() {
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
          <ReservedStudentContainer
            key={single.id}
            details={single}
          />
        ))}
      </StudentsViewWrapper>
    </Wrapper>
  );
}
