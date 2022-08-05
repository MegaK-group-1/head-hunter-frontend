import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  children: string;
  icon?: JSX.Element;
  to: string;
}

const StyledLink = styled(NavLink)`
  width: 100%;
  height: 20%;
  background-color: #222324;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 15px 10px;
  margin: 10px 0;
  position: relative;
  overflow: hidden;
  z-index: 5;
  border-radius: 20px;
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #e02735;
    position: absolute;
    z-index: -1;
    transition: 0.2s linear all;
    transform: translateX(-100%);
  }

  &:hover:after {
    transform: translateX(0);
  }
`;

export function NavigationLink(props: Props) {
  const { children, to, icon } = props;
  return (
    <StyledLink to={to}>
      {icon}
      {children}
    </StyledLink>
  );
}
