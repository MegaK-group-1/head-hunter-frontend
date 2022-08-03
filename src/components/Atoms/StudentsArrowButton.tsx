import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MouseEventHandler } from "react";

interface Props {
  onClick: MouseEventHandler;
  isOpen: boolean;
}
const Arrow = styled(MdKeyboardArrowDown)`
  width: 100%;
  height: 100%;
`;

const Button = styled.button<Props>`
  color: #9e9e9e;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  transition: 0.3s linear;
  transform: ${({ isOpen }) => (isOpen ? "rotateX(180deg)" : "rotateX(0deg)")};

  :hover {
    color: #e12735;
  }
`;

export function StudentsArrowButton(props: Props) {
  const { onClick, isOpen } = props;
  return (
    <Button
      isOpen={isOpen}
      onClick={onClick}
    >
      <Arrow />
    </Button>
  );
}
