import React from "react";
import {CvHeadLabel} from "../../Atoms/CvHeadLabel";
import {HeadTitle} from "../../Atoms/HeadTitle";
import {CvUnderTitleSection} from "../../Atoms/CvUnderTitleSection";
import {ClipHyperlink} from "../../Atoms/ClipHyperlink";
import {cvPortfolio} from "../../../utils/TestUser";


interface Props {
    portfolio: cvPortfolio
}
export const PortfolioSection = (props:Props) => {
const {link1} = props.portfolio

    return (
        <>
            <CvHeadLabel>
                <HeadTitle>Portfolio</HeadTitle>
            </CvHeadLabel>
            <CvUnderTitleSection flexDirection='column'>
                <ClipHyperlink href={link1}>{link1}</ClipHyperlink>
            </CvUnderTitleSection>
        </>
    )
}