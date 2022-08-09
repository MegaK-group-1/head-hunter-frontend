import React, { ReactElement } from "react";
import styled from "styled-components"

interface Props {
  labelName: string;
  options?: ReactElement[];
  children: React.ReactNode;
}

const StyledButtonedElement = styled.div`

  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  p.label {
    color: #F7F7F7;
    padding-bottom: 3px;
  }

  .singleOption {
    color: #F7F7F7;
  }

  .singleOption:hover {
    background: #E02735 0% 0% no-repeat padding-box;
  }

`

export const SingleButtonedOption = (props: Props) => {

  const { labelName, options } = props;
    
  return(
    
    <StyledButtonedElement>
      <p className="label">{labelName}</p>
      <div>
        {options}
      </div>
    </StyledButtonedElement>
    
  )
      
};
