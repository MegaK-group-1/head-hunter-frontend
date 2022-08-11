import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element | JSX.Element[];
  flexDirection?: string;
  isOpen?: boolean;
}

const Container = styled.section<Props>`
  background-color: #222324;
  width: 100%;
  padding: 15px 25px;
  min-height: 75px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  border-bottom: ${({ isOpen }) => (isOpen ? "10px solid #1e1e1f" : "none")};
  justify-content: flex-start;
  align-items: flex-start;
  animation: showMe 0.3s linear forwards;
  @keyframes showMe {
    0% {
      opacity: 0;
      transform: scaleY(0) translateY(-100%);
    }

    30% {
      opacity: 0;
    }
  }
  100% {
    transform: scaleY(1) translateY(0);
    opacity: 1;
  }
`;

export function CvUnderTitleSection(props: Props) {
  const { children, flexDirection, isOpen } = props;

  return (
    <Container
      isOpen={isOpen}
      flexDirection={flexDirection}
    >
      {children}
    </Container>
  );
}
