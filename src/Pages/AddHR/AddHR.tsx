import React from "react";
import {Wrapper} from "../../components/Atoms/Wrapper";
import {LogoMegaK } from "../../components/Atoms/LogoMegaK";
import {Input} from "../../components/Atoms/Input";
import { Button} from '../../components/Atoms/Button'


export const AddHR = () =>{
    return (
        <Wrapper>
            <LogoMegaK />
            <Input type='email' placeholder='E-mail' />
            <Input type='text' autoComplete='on' placeholder='fullName' />
            <Input type='text' autoComplete='on' placeholder='company' />
            <Input type='number' autoComplete='on' placeholder='maxReservedStudents' min={1} max={999}/>
            <Button>Dodaj</Button>

        </Wrapper>
    )
}
