import React from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa'

interface Props {
  id: number;
  rate: string;
  rated: string;
  type?: string;
  onClick?: (id: number, rate: string, type?: string) => void;
}

const StarRed = styled(FaStar)`

width: 19px;
height: 19px;
margin-left: 4px;
color: E02735;

:hover {
  background-color: #E02735;
  color: #F7F7F7;
}

`

const StyledRatingVal = styled.div`

  height: 27px;
  width: 42px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #292A2B 0% 0% no-repeat padding-box;

  :hover {
    background-color: #E02735;
    color: #F7F7F7;
  }

`

 const StyledRatingValSelected = styled.div`

  height: 27px;
  width: 42px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E02735;

  :hover {
   color: #F7F7F7;
 }

`

export const Star = (props: Props) => {
  
  const { rate, rated, id, type } = props;
  
  const handleOnClick = () => {
    
    if (props.onClick) {
      
      props.onClick(id, rate, type);
      
    }
    
  }
  
  let show;

  if (rated && rated === rate) {

    show = <StyledRatingValSelected onClick={handleOnClick}>
      <p>{rate}</p>
      <StarRed />
    </StyledRatingValSelected>

  } else {

    show = <StyledRatingVal onClick={handleOnClick}>
      <p>{rate}</p>
      <StarRed />
    </StyledRatingVal>

  }
  
  return (
    <>
      {show}
    </>
  )
    
};
