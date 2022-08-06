import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { Paragraph } from "../../Atoms/Paragraph";

interface Props {
  education: string;
}

export function EducationSection(props: Props) {
  const { education } = props;

  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Edukacja</HeadTitle>
      </CvHeadLabel>
      <CvUnderTitleSection>
        <Paragraph>{education}</Paragraph>
      </CvUnderTitleSection>
    </>
  );
}
