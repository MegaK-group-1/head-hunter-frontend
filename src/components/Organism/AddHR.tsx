import React from "react";
import {useForm,SubmitHandler} from "react-hook-form";
import {Wrapper} from "../Atoms/Wrapper";
import {NavbarLink} from "../Atoms/NavbarLink";
import {LogoMegaK } from "../Atoms/LogoMegaK";
import {Input} from "../Atoms/Input";
import { Button} from '../Atoms/Button'
import styled from "styled-components";
import { Container } from "../Atoms/Container";



const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 90%;
  padding: 15px;
`

type Inputs = {
    example: string,
    exampleRequired: string,
};

const firstNameValidation = {
    required:true,
    minLength:1,
}

export const AddHR = () => {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


    return (
        <Wrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <LogoMegaK />
            {/*@ts-ignore*/}
            <Input {...register('email',{firstNameValidation})} type='email' placeholder='E-mail' name='email'/>
            {/*@ts-ignore*/}
            <Input {...register('fullName',{firstNameValidation})} {...firstNameValidation} type='text'  placeholder='fullName' name='fullName'/>
            {/*@ts-ignore*/}
            <Input {...register('company',{required:true})} type='text'  placeholder='company' name='company'/>
            {/*@ts-ignore*/}
            <Input {...register('maxReservedStudents',{required:true})} type='number'  placeholder='maxReservedStudents' name='maxReservedStudents' min={1} max={999}/>
             {/*@ts-ignore*/}
            <Container>
                {/*@ts-ignore*/}
                <Button type='submit'>Dodaj</Button>
                <NavbarLink to={'/admin'}>Powrót</NavbarLink>
            </Container>

        </StyledForm>
        </Wrapper>
    )
};
