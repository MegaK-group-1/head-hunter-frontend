import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
  children: string;
  onClick?: MouseEventHandler;
  size: ButtonSize;
  width?: string;
  squeeze?: boolean;
}

export enum ButtonSize {
  small = "100px",
  medium = "140px",
  big = "200px",
}

const StyledButton = styled.button<Props>`
  min-width: ${({ size }) => size};
  width: ${({ width }) => width};
  height: 39px;
  letter-spacing: 2px;
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

  @media (max-width: 700px) {
    letter-spacing: ${({ squeeze }) => (squeeze ? "0" : "2px")};
    font-size: ${({ squeeze }) => (squeeze ? "0.7em" : "auto")};
    height: ${({ squeeze }) => (squeeze ? "30px" : "39px")};
    width: ${({ squeeze, width }) => (squeeze ? "120px" : width)};
  }

  @media (max-width: 800px) {
    font-size: ${({ squeeze }) => (squeeze ? "0.75em" : "auto")};
  }
`;

export function Button(props: Props) {
  const { children, onClick, size, width, squeeze } = props;

  return (
    <StyledButton
      width={width}
      onClick={onClick}
      size={size}
      squeeze={squeeze}
    >
      {children}
    </StyledButton>
  );
}
