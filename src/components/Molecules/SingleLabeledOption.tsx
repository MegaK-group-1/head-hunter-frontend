import React, { Children, ReactElement, useState } from "react";

interface Props {
  labelName: string;
  options?: ReactElement[];
  children: React.ReactNode;
}

export const SingleLabeledOption = (props: Props) => {

  const { labelName, options } = props;
    
  return(
    
    <div className="ratingElement">
      <p className="label">{labelName}</p>
      <div className="ratings">
        {options}
      </div>
    </div>
    
  )
      
};
