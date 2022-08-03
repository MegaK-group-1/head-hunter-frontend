import react, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  placeholder: string;
  label: string;
  type: string;
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

  const { placeholder, label, onChangeVal, type, id } = props;

  const [inputVal, setInputVal] = useState('');

  if (onChangeVal) {

    onChangeVal(id, inputVal, type);

  }

  return (

    <StyledLabel>
    {label} 
      <StyledInput 
        className="optionInput" 
        type="text" 
        placeholder={placeholder} 
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
      />
  </StyledLabel>

  )
}
