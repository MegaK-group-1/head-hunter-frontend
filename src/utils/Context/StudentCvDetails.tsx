import { createContext } from "react";
import { CvDetailsInterface } from "../types/CvDetailsInterface";

export const StudentCvDetails = createContext({
  cvDetails: {} as CvDetailsInterface,
  id: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDetails: (p: CvDetailsInterface) => {},
});
