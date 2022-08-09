import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarLink = styled(Link)`
  width: auto;
  height: 39px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #e12735;
  color: white;
  text-align: center;
  text-decoration: none;
  line-height: 39px;
  border: none;
  align-self: center;
  transition: 0.2s linear;

  :hover {
    box-shadow: 0 0 1px 1px white;
    cursor: pointer;
  }
`;
