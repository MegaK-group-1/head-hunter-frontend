import react, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  caption: string;
  checked?: boolean;
  answer: string;
  onChange?: (id: string, value: string) => void;
}

const StyledBox = styled.label`

  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 14px;
  cursor: pointer;
  font: normal normal 500 14px/23px Catamaran;

  input.optionRadio {
    height: 15px;
    width: 15px;
    border: 1px solid #292A2B;
    background-color: #0A0A0A;
  }

  span.checkmark {
    position: absolute;
    top: 3px;
    left: 3px;
    height: 15px;
    width: 15px;
    background-color: #0A0A0A;
    border-radius: 50%;
    border: 1px solid #292A2B;
  }

`

export const RadioBox = (props: Props) => {
  
  const { caption, onChange, answer, id } = props;

  const onChangeVal = (e: ChangeEvent<HTMLInputElement>) => {

    if (onChange) {
      
      onChange(id, String(e.target.value));
      
      console.log('e.target.value: ', e.target.value);

    }
  };

  return (

    <StyledBox>{caption}
      <input className="optionRadio" name="radio" type="radio" value={caption} checked={answer === caption} onChange={onChangeVal}/>
      <span className="checkmark"></span>
    </StyledBox>  

  )
};
