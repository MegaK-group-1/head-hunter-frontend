import styled from "styled-components";
import { Container } from "./Container";

interface Props {
  height?: string;
}

export const Positioner = styled(Container)<Props>`
  justify-content: center;
  align-items: flex-start;
  height: ${({ height }) => height};
  padding: 10px 30px;
`;
