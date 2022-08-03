import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
}

export const StudentsNavigationLinks = styled(NavLink)<Props>`
  color: white;
  text-decoration: none;
  padding: 20px;
  height: 100%;
  &.active {
    border-bottom: 3px solid #e02735;
  }
`;
