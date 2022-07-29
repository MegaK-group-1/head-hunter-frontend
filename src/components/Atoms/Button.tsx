import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
  children: string;
  long?: boolean;
  onCLick?: MouseEventHandler;
}

const StyledButton = styled.button<Props>`
  width: ${({ long }) => (long ? "140px" : "100px")};
  height: 40px;

  background-color: #e12735;
  color: white;
  text-align: center;
  border: none;
  align-self: center;
  transition: 0.2s linear;

  :hover {
    box-shadow: 0 0 1px 1px white;
    cursor: pointer;
  }
`;

export function Button(props: Props) {
  const { long, children, onCLick } = props;

  return (
    <StyledButton
      onClick={onCLick}
      long={long}
    >
      {children}
    </StyledButton>
  );
}
