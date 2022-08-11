import styled from "styled-components";
import React from "react";
// @ts-ignore
import { UserLoginReq } from "types";

const Input = styled.input`
  width: 18vw;
  min-width: 330px;
  height: 40px;
  background: #292a2b no-repeat padding-box;
  border: none;
  margin: 8px;
  padding: 2px 0 2px 15px;
  color: white;
`;
interface Props {
  type: string;
  onChangeHandler: React.Dispatch<React.SetStateAction<UserLoginReq>>;
  placeholder: string;
  autoComplete?: "on" | "off";
}

export function ReusableInput(props: Props) {
  const { type, autoComplete, onChangeHandler, placeholder } = props;
  return (
    <Input
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onChange={(event) =>
        onChangeHandler((prevState: any) => {
          return {
            ...prevState,
            [type]: event.target.value,
          };
        })
      }
    />
  );
}
