import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { Hyperlink } from "./Hyperlink";

interface Props {
  children: string;
  href: string;
}

const StyledHyperLink = styled(Hyperlink)`
  color: #0b8bd4;
`;

const GithubIcon = styled(FaGithub)`
  width: 20px;
  height: 20px;
`;

export function GithubHyperlink(props: Props) {
  const { children, href } = props;

  return (
    <StyledHyperLink
      target="_blank"
      href={href}
    >
      <GithubIcon />
      {children}
    </StyledHyperLink>
  );
}
