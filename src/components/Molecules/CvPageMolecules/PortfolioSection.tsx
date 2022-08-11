import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { ClipHyperlink } from "../../Atoms/ClipHyperlink";

interface Props {
  portfolio: string;
}
export function PortfolioSection(props: Props) {
  const { portfolio } = props;
  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Portfolio</HeadTitle>
      </CvHeadLabel>
      <CvUnderTitleSection flexDirection="column">
        <ClipHyperlink href="#">{portfolio}</ClipHyperlink>
      </CvUnderTitleSection>
    </>
  );
}
