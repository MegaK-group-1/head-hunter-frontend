import styled from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";
import { MouseEventHandler } from "react";

interface Props {
  onClick: MouseEventHandler;
  isOpen: boolean;
}
const Button = styled.button<Props>`
  color: #9e9e9e;
  width: 37px;
  height: 15px;
  background: none;
  border: none;
  transition: 0.3s linear;
  transform: ${({ isOpen }) => (isOpen ? "rotateX(0deg)" : "rotateX(180deg)")};

  :hover {
    color: #e12735;
  }
`;

export function NavArrowButton(props: Props) {
  const { onClick, isOpen } = props;
  return (
    <Button
      isOpen={isOpen}
      onClick={onClick}
    >
      <BsFillTriangleFill />
    </Button>
  );
}
