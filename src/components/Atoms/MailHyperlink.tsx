import React from "react";
import styled from "styled-components";
import { IoMailSharp } from "react-icons/io5";
import { Hyperlink } from "./Hyperlink";

interface Props {
  children: string;
  href: string;
}

const StyledHyperLink = styled(Hyperlink)`
  color: #f7f7f7;
  justify-content: flex-start;
  max-width: 100%;
  padding-left: 10px;
  transition: .2s linear;
  :hover{
    color: yellowgreen;
  }
`;

const MailIcon = styled(IoMailSharp)`
  color: #4d4d4d;
`;

export const MailHyperlink = (props: Props) => {
  const { children, href } = props;

  return (
    <StyledHyperLink href={`mailto:${href}`}>
      <MailIcon />
      {children}
    </StyledHyperLink>
  );
};
