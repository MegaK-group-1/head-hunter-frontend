import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../Atoms/Wrapper";
import { CvContactSection } from "../Molecules/CvPageMolecules/CvContactSection";
import { GradesSection } from "../Molecules/CvPageMolecules/GradesSection";
import { EducationSection } from "../Molecules/CvPageMolecules/EducationSection";
import { CoursesSection } from "../Molecules/CvPageMolecules/CoursesSection";
import { ExperienceSection } from "../Molecules/CvPageMolecules/ExperienceSection";
import { PortfolioSection } from "../Molecules/CvPageMolecules/PortfolioSection";
import { ScrumProjectSection } from "../Molecules/CvPageMolecules/ScrumProjectSection";
import { FinalExamProjectSection } from "../Molecules/CvPageMolecules/FinalExamProjectSection";
import { ExpectationsSection } from "../Molecules/CvPageMolecules/ExpectationsSection";
import { cvDetails, FinalCvInterface } from "../../utils/TestUser";

const PositionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  gap: 5px;
  width: 80vw;
  min-width: 300px;
  max-width: 2500px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export function CvOrganism() {
  // @TODO Please Create UseContext for getting the right data here
  const [userDetails] = useState(cvDetails as FinalCvInterface);
  const {
    base,
    grades,
    expectations,
    education,
    courses,
    experinceAtWork,
    portfolio,
    scrumProject,
    finalProject,
  } = userDetails;

  return (
    <Wrapper>
      <PositionContainer>
        <CvContactSection userDetails={base} />
        <FlexContainer>
          <GradesSection userGrades={grades} />
          <ExpectationsSection userDetails={expectations} />
          <EducationSection education={education} />
          <CoursesSection courses={courses} />
          <ExperienceSection experience={experinceAtWork} />
          <PortfolioSection portfolio={portfolio} />
          <ScrumProjectSection scrumProjects={scrumProject} />
          <FinalExamProjectSection finalProjects={finalProject} />
        </FlexContainer>
      </PositionContainer>
    </Wrapper>
  );
}
