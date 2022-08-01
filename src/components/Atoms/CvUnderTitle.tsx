import styled from "styled-components";

interface Props {
  white?: boolean;
}

export const CvUnderTitle = styled.p<Props>`
  font-size: ${({ white }) => (white ? "1em" : ".8em")};
  font-weight: ${({ white }) => (white ? "bold" : "normal")};
  color: ${({ white }) => (white ? "white" : "#CFCFCF")};
  height: 30px;
  margin-bottom: 5px;
`;
