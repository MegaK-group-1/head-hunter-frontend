import React, { useEffect, useState } from "react";
import { Wrapper } from "../Atoms/Wrapper";
import { StudentsViewWrapper } from "../Atoms/StudentsViewWrapper";
import { StudentsUnderNav } from "../Molecules/AvailableStudents/StudentsUnderNav";
import { StudentsFilterHead } from "../Molecules/AvailableStudents/StudentsFilterHead";
import { GetAllUsers, StudentDetails } from "../../utils/types/user";
import { SingleStudentContainer } from "../Molecules/AvailableStudents/SingleStudentContainer";

export function AvailableStudentsOrganism() {
  const [students, setStudents] = useState([] as StudentDetails[]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      const { users } = data;
      const studentFilter = users.map((u: GetAllUsers) => {
        return {
          id: u.id,
          firstName: u.firstName,
          lastName: u.lastName,
          courseCompletion: u.userDetails.courseCompletion,
          courseEngagment: u.userDetails.courseEngagment,
          projectDegree: u.userDetails.projectDegree,
          teamProjectDegree: u.userDetails.projectDegree,
          expectedTypeWork: u.userDetails.expectedTypeWork,
          targetWorkCity: u.userDetails.targetWorkCity,
          expectedContractType: u.userDetails.expectedContractType,
          expectedSalary: u.userDetails.expectedSalary,
          canTakeApprenticeship:
            u.userDetails.canTakeApprenticeship === 0 ? "NIE" : "TAK",
          monthsOfCommercialExp: u.userDetails.monthsOfCommercialExp,
        };
      });
      setStudents(studentFilter);
    })();
  }, []);

  return (
    <Wrapper verticalStart="flex-start">
      <StudentsViewWrapper>
        <StudentsUnderNav />
        <StudentsFilterHead />
        {students.map((single) => (
          <SingleStudentContainer details={single} />
        ))}
      </StudentsViewWrapper>
    </Wrapper>
  );
}
