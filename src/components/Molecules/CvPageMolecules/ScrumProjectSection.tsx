import React from "react";
import {CvHeadLabel} from "../../Atoms/CvHeadLabel";
import {HeadTitle} from "../../Atoms/HeadTitle";
import {CvUnderTitleSection} from "../../Atoms/CvUnderTitleSection";
import {ClipHyperlink} from "../../Atoms/ClipHyperlink";
import {cvScrum} from "../../../utils/TestUser";

interface Props {
    scrumProjects: cvScrum
}

export const ScrumProjectSection = (props: Props) => {
const {scrumProjects} = props
const links = Object.entries(scrumProjects);

    return (
        <>
            <CvHeadLabel>
                <HeadTitle>Projekt w zespole Scrumowym</HeadTitle>
            </CvHeadLabel>
            <CvUnderTitleSection flexDirection='column'>
                {links.map((item)=> <ClipHyperlink key={item[1]} href={item[1]}>{item[1]}</ClipHyperlink>)}
            </CvUnderTitleSection>
        </>
    )
}