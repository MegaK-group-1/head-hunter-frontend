import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { Paragraph } from "../../Atoms/Paragraph";

interface Props {
  courses: string;
}

export function CoursesSection(props: Props) {
  const { courses } = props;
  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Kursy</HeadTitle>
      </CvHeadLabel>
      <CvUnderTitleSection>
        <Paragraph>{courses}</Paragraph>
      </CvUnderTitleSection>
    </>
  );
}
