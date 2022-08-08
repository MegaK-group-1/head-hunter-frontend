import React from "react";
import styled from "styled-components";

interface Props {

  id: string;
  minVal: number;
  maxVal: number;
  placeholder: string;
  value: number;
  onSetVal: (value: number) => void;

}

const StyledInputNumber = styled.div`

  height: 28px;
  width: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #292A2B;
  font: normal normal 500 12px/19px Catamaran;
  letter-spacing: 0px;
  color: #7E7E7E;
  padding-top: 5px;
  padding-bottom: 4px;
  padding-left: 10px;

`
const StyledArrows = styled.div`

  display: flex;
  flex-direction: column;
  margin-right: 8px;

`

const StyledArrowUp = styled.div`

  width: 0;
  height: 0;
  margin-bottom: 2px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #7E7E7E;
  cursor: pointer;

`

const StyledArrowDown = styled.div`

  width: 0;
  height: 0;
  margin-top: 2px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid #7E7E7E;
  cursor: pointer;

`

let acc = 0;

export const InputNumber = (props: Props) => {

  const { minVal, maxVal, placeholder, value } = props;

  acc = value;

  const handleOnClickArrow = (sign: string, minVal: number, maxVal: number) => {

    if (sign === '+' && acc <= maxVal - 1) {
      
      if (props.onSetVal) {

        props.onSetVal(++acc);

      };

    } 
    
    if (sign === '-' && acc >= minVal + 1) {

      if (props.onSetVal) {

        props.onSetVal(--acc);

      };

    }

  };

  return (

    <StyledInputNumber>
      <div>
        { acc ? value : placeholder }
      </div>
      <StyledArrows>
        <StyledArrowUp onClick={
          () => handleOnClickArrow('+', minVal, maxVal)
          } />
        <StyledArrowDown onClick={
          () => handleOnClickArrow('-', minVal, maxVal)
          }/>
      </StyledArrows>
    </StyledInputNumber>

  )
}
