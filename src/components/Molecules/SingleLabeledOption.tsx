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

  .ratings {
    display: flex;
  }

`

export const SingleLabeledOption = (props: Props) => {

  const { labelName, options } = props;
    
  return(
    
    <StyledRatingElement>
      {labelName}
      <div className="ratings">
        {options}
      </div>
    </StyledRatingElement>
    
  )
      
};
