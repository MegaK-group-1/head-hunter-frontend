import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  labelName: string;
  options?: ReactElement[];
  children: React.ReactNode;
}

const StyledRadioElement = styled.div`

  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #F7F7F7;
  font: normal normal 500 14px/23px Catamaran;

  .options {
    display: flex;
  }

  .optionElement {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: #F7F7F7;
    font: normal normal 500 14px/23px Catamaran;
  }

  .options--vertical {
    display: flex;
    flex-direction: column;
  }

  .optionElement--marginBottom2 {
    margin-bottom: 2px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  :hover input~.checkmark {
    background-color: #292A2B;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  input:checked~.checkmark:after {
    display: block;
  }
  
  .checkmark:after {
    top: 3px;
    left: 3px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #E02735;
  }
  
`

export const SingleLabeledRadioOption = (props: Props) => {

  const { labelName, options } = props;
    
  return (
    
    <StyledRadioElement>
      <p className="label">{labelName}</p>
      <div className="optionElement optionElement--marginBottom2">
        <div className="options options--vertical">
          {options}
        </div>
      </div>
    </StyledRadioElement>
    
  )
      
};
