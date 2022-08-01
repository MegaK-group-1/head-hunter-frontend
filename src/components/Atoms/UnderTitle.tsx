import styled from "styled-components";

interface Props {
  color?: string;
  width?: string;
  fontSize?: string;
  height?: string;
  fontWeight?: string;
}
export const UnderTitle = styled.h3<Props>`
  color: ${({ color }) => color || "4d4d4d"};
  font-size: ${({ fontSize }) => fontSize || "1em"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  font-weight: ${({ fontWeight }) => fontWeight || "auto"};
`;
