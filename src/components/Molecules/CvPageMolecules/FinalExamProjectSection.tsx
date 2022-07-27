import React from "react";
import {CvHeadLabel} from "../../Atoms/CvHeadLabel";
import {HeadTitle} from "../../Atoms/HeadTitle";
import {CvUnderTitleSection} from "../../Atoms/CvUnderTitleSection";
import {ClipHyperlink} from "../../Atoms/ClipHyperlink";
import {cvFinalProject} from "../../../utils/TestUser";



interface Props {
    finalProjects: cvFinalProject
}

export const FinalExamProjectSection = (props:Props) => {
const {finalProjects} = props
const links = Object.entries(finalProjects);
    return (
        <>
            <CvHeadLabel>
                <HeadTitle>Projekt na zaliczenie</HeadTitle>
            </CvHeadLabel>
            <CvUnderTitleSection flexDirection='column'>
                {links.map((item)=> <ClipHyperlink key={item[1]} href={item[1]}>{item[1]}</ClipHyperlink>)}
            </CvUnderTitleSection>
        </>
    )
}