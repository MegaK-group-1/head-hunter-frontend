import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element | JSX.Element[];
  flexDirection?: string;
}

const Container = styled.section<Props>`
  background-color: #222324;
  width: 100%;
  padding: 15px 25px;
  min-height: 75px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: flex-start;
  align-items: flex-start;
`;

export function CvUnderTitleSection(props: Props) {
  const { children, flexDirection } = props;

  return <Container flexDirection={flexDirection}>{children}</Container>;
}
