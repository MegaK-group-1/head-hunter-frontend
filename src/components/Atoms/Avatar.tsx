import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  big?: boolean;
}

const Img = styled.img<Props>`
  border-radius: 50%;
  width: 7.5vw;
  height: 7.5vw;
  min-width: ${({ big }) => (big ? "150px" : "45px")};
  min-height: ${({ big }) => (big ? "150px" : "45px")};
`;

export function Avatar(props: Props) {
  const { src, big } = props;

  return (
    <Img
      src={src}
      big={big}
    />
  );
}
