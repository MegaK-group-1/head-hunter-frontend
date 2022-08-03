import React, {FormEvent} from "react";
import {Wrapper} from "../../components/Atoms/Wrapper";
import {LogoMegaK } from "../../components/Atoms/LogoMegaK";
import {Input} from "../../components/Atoms/Input";
import { Button} from '../../components/Atoms/Button'
import styled from "styled-components";



const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  padding: 15px;
`




export const AddHR = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('działa')
    };


    return (
        <Wrapper>
        <StyledForm onSubmit={handleSubmit}>
            <LogoMegaK />
            <Input type='email' placeholder='E-mail' />
            <Input type='text' autoComplete='on' placeholder='fullName' />
            <Input type='text' autoComplete='on' placeholder='company' />
            <Input type='number' autoComplete='on' placeholder='maxReservedStudents' min={1} max={999}/>
            <Button>Dodaj</Button>
        </StyledForm>
        </Wrapper>
    )
};
