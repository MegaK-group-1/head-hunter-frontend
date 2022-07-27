import React from "react";
import styled from "styled-components";
import {FaStar} from "react-icons/fa";

interface Stars {
    stars?: number
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
    color: #9E9E9E;
  }

`


const Stars = styled(FaStar)`
  width: 20px;
  height: 20px;
  color: #4D4D4D;
  margin: 1px;
`


const Positioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`


const StarPositioner = styled.div<Stars>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  > :nth-child(-n +${({stars}) => stars}) {
    color: #E02735;
  }

`

interface Props {
    rating: number
}

export const StarsGradeMolecule = (props: Props) => {
    const {rating} = props

    return (
        <Positioner>
            <StarDescription>{rating}</StarDescription>
            <StarDescription>/5</StarDescription>
            <StarPositioner stars={rating}>
                <Stars/>
                <Stars/>
                <Stars/>
                <Stars/>
                <Stars/>
            </StarPositioner>
        </Positioner>
    )
}