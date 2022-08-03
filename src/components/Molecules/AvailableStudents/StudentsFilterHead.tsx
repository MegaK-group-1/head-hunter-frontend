import React from "react";
import { StudentsHeadPart } from "../../Atoms/StudentsHeadPart";
import { Input } from "../../Atoms/Input";
import { FilterButton } from "../../Atoms/FilterButton";

export function StudentsFilterHead() {
  return (
    <StudentsHeadPart style={{ padding: "0 20px" }}>
      <Input
        dark
        small
        type="text"
        placeholder="Szukaj"
      />
      <FilterButton />
    </StudentsHeadPart>
  );
}
