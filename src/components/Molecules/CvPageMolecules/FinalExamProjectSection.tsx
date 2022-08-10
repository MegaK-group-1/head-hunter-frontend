import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { ClipHyperlink } from "../../Atoms/ClipHyperlink";

interface Props {
  finalProjects: string;
}

export function FinalExamProjectSection(props: Props) {
  const { finalProjects } = props;
  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Projekt na zaliczenie</HeadTitle>
      </CvHeadLabel>
      <CvUnderTitleSection flexDirection="column">
        <ClipHyperlink
          key={finalProjects}
          href={finalProjects}
        >
          {finalProjects}
        </ClipHyperlink>
      </CvUnderTitleSection>
    </>
  );
}
