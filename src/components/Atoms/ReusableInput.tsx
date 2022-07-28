import styled from 'styled-components'
import React from "react";
import { UserLoginReq } from 'types';

const Input = styled.input`
  width: 18vw;
  min-width: 330px;
  height: 40px;
  background: #292a2b no-repeat padding-box;
  border: none;
  margin: 8px;
  padding: 2px 0 2px 15px;
  color: white;
`
interface Props {
    type: string;
    onChangeHandler: React.Dispatch<React.SetStateAction<UserLoginReq>>;
    placeholder: string;
    autoComplete?: 'on' | 'off'
}

export const ReusableInput = (props: Props ) =>{
    return <Input
        type={props.type}
        onChange={event => props.onChangeHandler(prevState => {
            return {
                ...prevState,
                [props.type]:event.target.value,
            }
        })}
    />
}