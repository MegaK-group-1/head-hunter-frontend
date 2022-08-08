import React, {useState} from "react";
import {TextField, Button, Typography, Paper} from "@mui/material";
import styled from "styled-components";

const StyledBtn = styled.div`
  background-color: darkorange;
  text-align: center;
`

export const UserForm = (props: { func: (arg0: { firstName: string; lastName: string; }) => void; }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const updateFirstName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(e.target.value);
    }
    const updateLastName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastName(e.target.value);
    }
    const transferValue = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const val = {firstName, lastName,};
        props.func(val);
    };
    const clearForm = () => {
        setFirstName('');
        setLastName('');
    };

    // @ts-ignore
    return (
        <Paper variant='outlined'>
            <form
                autoComplete='off'
                noValidate
                onSubmit={transferValue}
            >
                <Typography variant='h6'>Aktualizuj dane</Typography>
                <TextField
                    name={'firstName'}
                    label={'Twoje imię'}
                    fullWidth
                    value={firstName}
                    onChange={updateFirstName}
                    placeholder={'Podaj swoje imię'}
                />
                <TextField
                    name={'lastName'}
                    label={'Twoje nazwisko'}
                    fullWidth
                    value={lastName}
                    onChange={updateLastName}
                    placeholder={'Podaj swoje nazwisko'}
                />
            </form>
            <Button
                variant={'contained'}
                size={'large'}
                type={'submit'}
                fullWidth
                onClick={transferValue}
                style={{color: 'white', backgroundColor: 'darkorange'}}
            >
                Aktualizuj
            </Button>
            <Button
                variant={'contained'}
                size={'small'}
                onClick={clearForm}
                fullWidth
                style={{color: 'white', backgroundColor: 'grey'}}
            >
                Wyczyść formularz
            </Button>
        </Paper>
    )
};


