import { GetAllUsers, StudentDetails } from "../../../../utils/types/user";
import avatar from "../../../../assets/images/testAvatar.png";

export const getAllStudents = (): Promise<StudentDetails[]> => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    const { users } = data;
    return users.map((u: GetAllUsers) => {
      const {
        courseCompletion,
        courseEngagment,
        projectDegree,
        teamProjectDegree,
        expectedContractType,
        targetWorkCity,
        expectedTypeWork,
        canTakeApprenticeship,
        expectedSalary,
        monthsOfCommercialExp,
        id,
      } = u.userDetails;
      return {
        id,
        avatar,
        firstName: u.firstName,
        lastName: u.lastName,
        courseCompletion,
        courseEngagment,
        projectDegree,
        teamProjectDegree,
        expectedTypeWork,
        targetWorkCity,
        expectedContractType:
          (expectedContractType.toString() === "no_matter" && "BRAK") ||
          expectedContractType,
        expectedSalary,
        canTakeApprenticeship: (canTakeApprenticeship === 0 && "TAK") || "NIE",
        monthsOfCommercialExp:
          (monthsOfCommercialExp === 0 && "BRAK") || monthsOfCommercialExp,
      };
    });
  };
  return fetchData();
};
