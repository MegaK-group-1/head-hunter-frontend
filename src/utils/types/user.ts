enum UserStatus {
  INACTIVE = "inactive",
  ACTIVE = "active",
  EMPLOYED = "employed",
}

export enum ExpectedTypeWork {
  "AT_LOCATION" = "at_location",
  "READY_TO_MOVE_OUT" = "ready_to_move_out",
  "REMOTELY" = "remotely",
  "Hybrid" = "hybrid",
  "NO_MATTER" = "no_matter",
}

export enum ExpectedContractType {
  "UOP" = "uop",
  "B2B" = "b2b",
  "UZ/UOD" = "uz/uod",
  "NO_MATTER" = "BRAK",
}

export interface GetAllUsers {
  company: string | null;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  maxReservedStudents: number | null;
  password: string | null;
  registerToken?: string | null;
  registerTokenDate?: string | null;
  role: string;
  status: UserStatus;
  userDetails: {
    id: string;
    bio: string;
    bonusProjectUrls: string;
    canTakeApprenticeship: number;
    courseCompletion: number;
    courseEngagment: number;
    projectDegree: number;
    targetWorkCity: string;
    teamProjectDegree: number;
    courses: string | null;
    education: string | null;
    expectedContractType: ExpectedContractType;
    expectedSalary: number;
    expectedTypeWork: ExpectedTypeWork;
    githubUsername: null | string;
    monthsOfCommercialExp: number;
    phone: number | null;
    portfolioUrls: string;
    workExperience: number | null;
  };
}

export interface StudentDetails {
  avatar: string;
  id: string;
  firstName: string;
  lastName: string;
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: number;
  canTakeApprenticeship: number;
  monthsOfCommercialExp: number;
}
