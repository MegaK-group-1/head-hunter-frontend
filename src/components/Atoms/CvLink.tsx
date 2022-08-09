import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  children: string;
  width?: string;
  to: string;
  onClick?: MouseEventHandler;
}

const StyledCvLink = styled(NavLink)<Props>`
  min-width: 100px;
  height: 39px;
  letter-spacing: 2px;
  background-color: #e12735;
  color: white;
  text-align: center;
  border: none;
  align-self: center;
  transition: 0.2s linear;
  text-decoration: none;
  padding: 10px;
  font-size: 0.9em;
  :hover {
    box-shadow: 0 0 1px 1px white;
    cursor: pointer;
  }
`;

export function CvLink(props: Props) {
  const { children, width, to, onClick } = props;

  return (
    <StyledCvLink
      width={width}
      to={`/student/:${to}`}
      onClick={onClick}
    >
      {children}
    </StyledCvLink>
  );
}
