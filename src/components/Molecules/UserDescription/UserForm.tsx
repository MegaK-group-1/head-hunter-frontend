import React, {useState} from "react";
import {TextField, Button, Typography, Paper} from "@mui/material";

export const UserForm = (props: { func: (arg0: { firstName: string; lastName: string; }) => void; }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [githubUsername, setGithubUsername] = useState("");
    const [portfolioUrls, setPortfolioUrls] = useState("");
    const [bonusProjectUrls, setBonusProjectUrls] = useState("");
    const [bio, setBio] = useState("");
    const [expectedContractType, setExpectedContractType] = useState("");
    const [expectedSalary, setExpectedSalary] = useState("");
    const [expectedTypeWork, setExpectedTypeWork] = useState("");
    const [targetWorkCity, setTargetWorkCity] = useState("");
    const [canTakeApprenticeship, setCanTakeApprenticeship] = useState("");
    const [education, setEducation] = useState("");
    const [monthsOfCommercialExp, setMonthsOfCommercialExp] = useState("");
    const [workExperience, setWorkExperience] = useState("");
    const [courses, setCourses] = useState("");

    const updateFirstName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(e.target.value);
    }
    const updateLastName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastName(e.target.value);
    }
    const updateEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    }
    const updatePhone = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPhone(e.target.value);
    }
    const updateGithubUsername = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setGithubUsername(e.target.value);
    }
    const updatePortfolioUrls = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPortfolioUrls(e.target.value);
    }
    const updateBonusProjectUrls = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setBonusProjectUrls(e.target.value);
    }
    const updateBio = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setBio(e.target.value);
    }
    const updateExpectedContractType = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setExpectedContractType(e.target.value);
    }
    const updateExpectedSalary = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setExpectedSalary(e.target.value);
    }
    const updateExpectedTypeWork = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setExpectedTypeWork(e.target.value);
    }
    const updateTargetWorkCity = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setTargetWorkCity(e.target.value);
    }
    const updateCanTakeApprenticeship = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setCanTakeApprenticeship(e.target.value);
    }
    const updateEducation = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEducation(e.target.value);
    }
    const updateMonthsOfCommercialExp = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setMonthsOfCommercialExp(e.target.value);
    }
    const updateWorkExperience = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setWorkExperience(e.target.value);
    }
    const updateCourses = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setCourses(e.target.value);
    }

    const transferValue = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const val = {
            firstName,
            lastName,
            email,
            phone,
            githubUsername,
            portfolioUrls,
            bonusProjectUrls,
            bio,
            expectedContractType,
            expectedSalary,
            expectedTypeWork,
            targetWorkCity,
            canTakeApprenticeship,
            education,
            monthsOfCommercialExp,
            workExperience,
            courses
        };
        props.func(val);
    };
    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setGithubUsername("");
        setPortfolioUrls("");
        setBonusProjectUrls("");
        setBio("");
        setExpectedContractType("");
        setExpectedSalary("");
        setExpectedTypeWork("");
        setTargetWorkCity("");
        setCanTakeApprenticeship("");
        setEducation("");
        setMonthsOfCommercialExp("");
        setWorkExperience("");
        setCourses("");
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
                    label={'Imię'}
                    fullWidth
                    value={firstName}
                    onChange={updateFirstName}
                    placeholder={'Podaj swoje imię'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'lastName'}
                    label={'Nazwisko'}
                    fullWidth
                    value={lastName}
                    onChange={updateLastName}
                    placeholder={'Podaj swoje nazwisko'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'email'}
                    label={'Email'}
                    fullWidth
                    value={email}
                    onChange={updateEmail}
                    placeholder={'Adres email...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'phone'}
                    label={'Telefon'}
                    fullWidth
                    value={phone}
                    onChange={updatePhone}
                    placeholder={'Numer kontaktowy do Ciebie...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'githubUsername'}
                    label={'konto Github'}
                    fullWidth
                    value={githubUsername}
                    onChange={updateGithubUsername}
                    placeholder={'Twoja nazwa na Github...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'portfolioUrls'}
                    label={'Portfolio'}
                    fullWidth
                    value={portfolioUrls}
                    onChange={updatePortfolioUrls}
                    placeholder={'Adresy www Twoich portfolio...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'bonusProjectUrls'}
                    label={'Projekt etapu bonusowego'}
                    fullWidth
                    value={bonusProjectUrls}
                    onChange={updateBonusProjectUrls}
                    placeholder={'Adres www projektu kończącego MegaK...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'bio'}
                    label={'Bio'}
                    fullWidth
                    value={bio}
                    onChange={updateBio}
                    placeholder={'Twoje bio...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'expectedContractType'}
                    label={'Typ zatrudnienia'}
                    fullWidth
                    value={expectedContractType}
                    onChange={updateExpectedContractType}
                    placeholder={'Oczekiwany typ zatrudnienia...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'expectedSalary'}
                    label={'Wynagrodzenie'}
                    fullWidth
                    value={expectedSalary}
                    onChange={updateExpectedSalary}
                    placeholder={'Oczekiwane wynagrodzenie miesięczne netto...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'expectedTypeWork'}
                    label={'Rodzaj pracy'}
                    fullWidth
                    value={expectedTypeWork}
                    onChange={updateExpectedTypeWork}
                    placeholder={'Preferowane miejsce wykonywania pracy...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'targetWorkCity'}
                    label={'Miejscowość'}
                    fullWidth
                    value={targetWorkCity}
                    onChange={updateTargetWorkCity}
                    placeholder={'Docelowe miasto, w którym chcesz pracować...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'canTakeApprenticeship'}
                    label={'Praktyka'}
                    fullWidth
                    value={canTakeApprenticeship}
                    onChange={updateCanTakeApprenticeship}
                    placeholder={'Czy zgadzasz się na odbycie bezpłatnych praktyk? TAK/NIE'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'education'}
                    label={'Wykształcenie'}
                    fullWidth
                    value={education}
                    onChange={updateEducation}
                    placeholder={'Twoje wykształcenie...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'monthsOfCommercialExp'}
                    label={'Doświadczenie w programowaniu'}
                    fullWidth
                    value={monthsOfCommercialExp}
                    onChange={updateMonthsOfCommercialExp}
                    placeholder={'Twoje doświadczenie komercyjne (w miesiącach)...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'workExperience'}
                    label={'Doświadczenie zawodowe'}
                    fullWidth
                    value={workExperience}
                    onChange={updateWorkExperience}
                    placeholder={'Opisz swoje doświadczenia zawodowe...'}
                    style={{'fontStyle': 'italic'}}
                />
                <TextField
                    name={'courses'}
                    label={'Kursy, szkolenia'}
                    fullWidth
                    value={courses}
                    onChange={updateCourses}
                    placeholder={'Pochwal się odbytymi szkoleniami...'}
                    style={{'fontStyle': 'italic'}}
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

