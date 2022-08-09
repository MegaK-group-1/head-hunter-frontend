import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  children: string;
  to: string;
  align?: string;
  decoration?: string;
}

export const StylesLink = styled(Link)<Props>`
  color: white;
  align-self: ${({ align }) => align};
  text-decoration: ${({ decoration }) => decoration || "none"};
  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`;

export function StyledLink(props: Props) {
  const { decoration, align, to, children } = props;

  return (
    <StylesLink
      decoration={decoration}
      align={align}
      to={to}
    >
      {children}
    </StylesLink>
  );
}
