import React from "react";
import styled from "styled-components";
import { BsPaperclip } from "react-icons/bs";
import { Hyperlink } from "./Hyperlink";

interface Props {
  href: string;
  children: string;
}

const StyledHyperLink = styled(Hyperlink)`
  justify-content: flex-start;
  margin-bottom: 5px;
  transition: 0.2s linear;
  :hover {
    color: white;
  }
`;

const ClipIcon = styled(BsPaperclip)`
  width: 25px;
  height: 35px;
`;

export function ClipHyperlink(props: Props) {
  const { children, href } = props;

  return (
    <StyledHyperLink
      target="_blank"
      href={href}
    >
      <ClipIcon />
      {children}
    </StyledHyperLink>
  );
}
