import React, { useContext, useEffect, useState } from "react";
import { CvOrganism } from "../components/Organism/CvOrganism";
import { Navbar } from "../components/Organism/Navbar";
import { StudentCvDetails } from "../utils/Context/StudentCvDetails";
import { CvDetailsInterface } from "../utils/types/CvDetailsInterface";
import { fetchCvDetails } from "../components/Molecules/AvailableStudents/functions/fetchCvDetails";

export function CvPage() {
  const context = useContext(StudentCvDetails);
  const { cvDetails } = context;
  const [userDetails, setDetails] = useState(cvDetails as CvDetailsInterface);

  useEffect(() => {
    (async () => {
      setDetails(await fetchCvDetails(context.id));
    })();
  }, [context.id]);

  return (
    <>
      <Navbar />
      <CvOrganism userDetails={userDetails} />
    </>
  );
}
