import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  labelName: string;
  options?: ReactElement[];
  children: React.ReactNode;
}

const StyledRatingElement = styled.div`

  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #F7F7F7;
  font: normal normal 500 14px/23px Catamaran;

  .ratings {
    display: flex;
  }

  p.label {
    padding-bottom: 3px;
  }

`

export const SingleLabeledOption = (props: Props) => {

  const { labelName, options } = props;
    
  return(
    
    <StyledRatingElement>
      <p className="label">{labelName}</p>
      <div className="ratings">
        {options}
      </div>
    </StyledRatingElement>
    
  )
      
};
