import styled from "styled-components";

interface Props {
  borderR?: boolean;
}

export const CvFlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #222324;
  flex: 1;
  border-bottom: 2px solid #292a2b;
  color: white;
  padding: 10px;
  gap: 45px;

  @media (min-width: 1300px) {
    border-bottom: none;
    border-right: ${({ borderR }) => (borderR ? "2px solid #292A2B" : "none")};
    :nth-child(6) {
      border: none;
    }
  } ;
`;
