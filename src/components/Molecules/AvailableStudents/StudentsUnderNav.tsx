import React from "react";
import { StudentsHeadPart } from "../../Atoms/StudentsHeadPart";
import { StudentsNavigationLinks } from "../../Atoms/StudentsNavigationLinks";

export function StudentsUnderNav() {
  return (
    <StudentsHeadPart justify="flex-start">
      <StudentsNavigationLinks to="/available-students">
        Dostępni kursanci
      </StudentsNavigationLinks>
      <StudentsNavigationLinks to="/reserved-students">
        Do rozmowy
      </StudentsNavigationLinks>
    </StudentsHeadPart>
  );
}
