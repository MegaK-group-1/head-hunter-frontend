import styled from "styled-components";

interface Props {
  dark?: boolean;
  small?: boolean;
}

export const Input = styled.input<Props>`
  width: 18vw;
  min-width: ${({ small }) => (small ? "120px" : "330px")};
  height: 40px;
  background: ${({ dark }) => (dark ? "#1E1E1F" : "#292a2b")};
  border: none;
  margin: 8px;
  padding: 2px 0 2px 15px;
  color: white;
`;
