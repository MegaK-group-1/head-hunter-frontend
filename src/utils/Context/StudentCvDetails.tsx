import { createContext } from "react";

export const StudentCvDetails = createContext({
  cvDetails: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDetails: (p: {
    lastName: string;
    targetWorkCity: string;
    expectedContractType: string;
    courseCompletion: number;
    teamProjectDegree: number;
    firstName: string;
    projectDegree: number;
    courseEngagment: number;
    expectedTypeWork: string;
    canTakeApprenticeship: number;
    id: string;
    expectedSalary: number;
    monthsOfCommercialExp: number;
  }) => {},
});
