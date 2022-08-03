import styled from "styled-components";

interface Props {
  isOpen?: boolean;
}
export const StudentsHeadPart = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #292a2b;
  width: 100%;
  height: 70px;
  position: relative;
  border-bottom: ${({ isOpen }) => (isOpen ? "none" : "10px solid #1e1e1f")};
  z-index: 5;
  overflow: hidden;
`;
