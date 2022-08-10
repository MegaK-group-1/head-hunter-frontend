import styled from "styled-components";

interface Props {
  isOpen?: boolean;
  justify?: string;
  squeeze?: boolean;
}
export const StudentsHeadPart = styled.div<Props>`
  display: flex;
  justify-content: ${({ justify }) => justify || "space-between"};
  align-items: center;
  flex-direction: row;
  background-color: #292a2b;
  width: 100%;
  height: 70px;
  position: relative;
  border-bottom: ${({ isOpen }) => (isOpen ? "none" : "10px solid #1e1e1f")};
  z-index: 5;
  overflow: hidden;

  @media (max-width: 1000px) {
    justify-content: space-around;
    height: ${({ squeeze }) => (squeeze ? "140px" : "70px")};
    flex-wrap: ${({ squeeze }) => (squeeze ? "wrap" : "nowrap")};
  }
  @media (max-width: 750px) {
    justify-content: space-around;
    height: ${({ squeeze }) => (squeeze ? "300px" : "70px")};
  } ;
`;
