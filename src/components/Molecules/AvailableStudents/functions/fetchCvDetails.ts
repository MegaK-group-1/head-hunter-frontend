import { GetAllUsers } from "../../../../utils/types/user";
import { CvDetailsInterface } from "../../../../utils/types/CvDetailsInterface";
import avatar from "../../../../assets/images/testAvatar.png";

export const fetchCvDetails = (idFind: string): Promise<CvDetailsInterface> => {
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    const { users } = data;
    return users
      .map((u: GetAllUsers) => {
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
          education,
          courses,
          workExperience,
          portfolioUrls,
          bonusProjectUrls,
          phone,
          githubUsername,
          bio,
        } = u.userDetails;
        return {
          id,
          avatar,
          mail: u.email,
          firstName: u.firstName,
          lastName: u.lastName,
          education,
          courses,
          workExperience,
          portfolioUrls,
          bonusProjectUrls,
          phone,
          githubUsername,
          bio,
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
          canTakeApprenticeship:
            (canTakeApprenticeship === 0 && "TAK") || "NIE",
          monthsOfCommercialExp:
            (monthsOfCommercialExp === 0 && "BRAK") || monthsOfCommercialExp,
        };
      })
      .filter((all: CvDetailsInterface) => all.id === idFind)[0];
  };
  return fetchData();
};
