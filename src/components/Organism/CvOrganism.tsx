import React from "react";
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
import { CvDetailsInterface } from "../../utils/types/CvDetailsInterface";

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

interface Props {
  userDetails: CvDetailsInterface;
}

export function CvOrganism(props: Props) {
  // @TODO Please Create UseContext for getting the right data here
  const { userDetails } = props;
  const { education, courses, workExperience, portfolioUrls } = userDetails;
  return (
    <Wrapper>
      <PositionContainer>
        <CvContactSection userDetails={userDetails} />
        <FlexContainer>
          <GradesSection userGrades={userDetails} />
          <ExpectationsSection userDetails={userDetails} />
          <EducationSection education={education} />
          <CoursesSection courses={courses} />
          <ExperienceSection experience={workExperience} />
          <PortfolioSection portfolio={portfolioUrls} />
          <ScrumProjectSection scrumProjects={portfolioUrls} />
          <FinalExamProjectSection finalProjects={portfolioUrls} />
        </FlexContainer>
      </PositionContainer>
    </Wrapper>
  );
}
