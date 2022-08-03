import React from "react";
import { Navbar } from "../../components/Organism/Navbar";
import { AvailableStudentsOrganism } from "../../components/Organism/AvailableStudentsOrganism";

export function AvailableStudentsPage() {
  return (
    <>
      <Navbar />
      <AvailableStudentsOrganism />
    </>
  );
}
