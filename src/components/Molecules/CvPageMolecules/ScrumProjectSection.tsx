import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { ClipHyperlink } from "../../Atoms/ClipHyperlink";

interface Props {
  scrumProjects: string;
}

export function ScrumProjectSection(props: Props) {
  const { scrumProjects } = props;

  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Projekt w zespole Scrumowym</HeadTitle>
      </CvHeadLabel>
      <CvUnderTitleSection flexDirection="column">
        <ClipHyperlink
          key={scrumProjects}
          href={scrumProjects}
        >
          {scrumProjects}
        </ClipHyperlink>
      </CvUnderTitleSection>
    </>
  );
}
