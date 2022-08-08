import react, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  placeholder: string;
  label: string;
  type: string;
  value: string;
  onChangeVal?: (id: string, value: string, type: string) => void;
}

const StyledLabel = styled.div`

  font: normal normal 500 12px/19px Catamaran;
  color: #F7F7F7;

`

const StyledInput = styled.input`

  height: 28px;
  width: 95px;
  margin-left: 8px;
  margin-right: 11px;
  background: #292A2B 0% 0% no-repeat padding-box;
  padding: 5px 0 4px 10px;
  border: 0px;

`

export const LabeledOptionInput = (props: Props) => {

  const { placeholder, label, onChangeVal, type, value, id } = props;
  
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (onChangeVal) {
  
      onChangeVal(id, e.target.value, type);
      
    }

  }

  return (

    <StyledLabel>
    {label} 
      <StyledInput 
        className="optionInput" 
        type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={handleOnChange}
      />
    </StyledLabel>

  )
}
