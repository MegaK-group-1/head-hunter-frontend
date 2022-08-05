import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

interface Stars {
  rating?: number;
}

const StarDescription = styled.p`
  line-height: 30px;
  text-align: center;
  font-size: 1.1em;
  margin-right: 5px;
  letter-spacing: 2px;
  font-weight: bolder;

  :nth-child(2) {
    font-weight: normal;
    color: #9e9e9e;
  }
`;

const GradesStar = styled(FaStar)`
  width: 20px;
  height: 20px;
  color: #4d4d4d;
  margin: 1px;
`;

const Positioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StarPositioner = styled.div<Stars>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > :nth-child(-n + ${({ rating }) => rating}) {
    color: #e02735;
  }
`;

interface Props {
  rating: number;
}

export function StarsGradeMolecule(props: Props) {
  const { rating } = props;

  return (
    <Positioner>
      <StarDescription>{rating}</StarDescription>
      <StarDescription>/5</StarDescription>
      <StarPositioner rating={rating}>
        <GradesStar />
        <GradesStar />
        <GradesStar />
        <GradesStar />
        <GradesStar />
      </StarPositioner>
    </Positioner>
  );
}
