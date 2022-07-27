import React from "react";
import {CvHeadLabel} from "../../Atoms/CvHeadLabel";
import {HeadTitle} from "../../Atoms/HeadTitle";
import {CvUnderTitleSection} from "../../Atoms/CvUnderTitleSection";
import {Paragraph} from "../../Atoms/Paragraph";


interface Props{
    experience: string;
}
export const ExperienceSection = (props:Props) => {
const {experience} = props

    return (
        <>
            <CvHeadLabel>
                <HeadTitle>Doświadczenie zawodowe</HeadTitle>
            </CvHeadLabel>
            <CvUnderTitleSection>
                <Paragraph>{experience}</Paragraph>
            </CvUnderTitleSection>
        </>
    )
}