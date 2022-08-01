import React from "react";
import { CvHeadLabel } from "../../Atoms/CvHeadLabel";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { CvUnderTitleSection } from "../../Atoms/CvUnderTitleSection";
import { ClipHyperlink } from "../../Atoms/ClipHyperlink";
import { CvPortfolio } from "../../../utils/TestUser";

interface Props {
  portfolio: CvPortfolio;
}
export function PortfolioSection(props: Props) {
  const { portfolio } = props;
  const { link1 } = portfolio;

  return (
    <>
      <CvHeadLabel>
        <HeadTitle>Portfolio</HeadTitle>
      </CvHeadLabel>
      <CvUnderTitleSection flexDirection="column">
        <ClipHyperlink href={link1}>{link1}</ClipHyperlink>
      </CvUnderTitleSection>
    </>
  );
}
