import styled from "styled-components";
import { CvContactContainer } from "./CvContactContainer";

interface Props {
  height?: string;
  scroll?: boolean;
}

export const CvPositioner = styled(CvContactContainer)<Props>`
  justify-content: center;
  max-width: 100%;
  align-items: center;
  height: ${({ height }) => height};
  padding: 10px 20px;
  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "hidden")};
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 1px;
  }
`;
