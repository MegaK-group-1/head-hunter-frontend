import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  children: string;
  to: string;
  onClick?: MouseEventHandler;
  squeeze?: boolean;
}

const StyledCvLink = styled(NavLink)<Props>`
  min-width: 100px;
  height: 39px;
  letter-spacing: 2px;
  background-color: #e12735;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  align-self: center;
  transition: 0.2s linear;
  text-decoration: none;
  font-size: 0.7em;
  :hover {
    box-shadow: 0 0 1px 1px white;
    cursor: pointer;
  }
  @media (max-width: 750px) {
    font-size: 0.7em;
    height: 30px;
    width: 120px;
  }
`;

export function CvLink(props: Props) {
  const { children, to, onClick, squeeze } = props;

  return (
    <StyledCvLink
      squeeze={squeeze}
      to={`/student/:${to}`}
      onClick={onClick}
    >
      {children}
    </StyledCvLink>
  );
}
