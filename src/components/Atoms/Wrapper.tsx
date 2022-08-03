import styled from "styled-components";

interface Props {
  verticalStart?: string;
}

export const Wrapper = styled.div<Props>`
  width: 100vw;
  min-height: 100vh;
  background-color: #222224;
  display: flex;
  justify-content: ${({ verticalStart }) => verticalStart || "center"};
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
