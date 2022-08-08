// prettier-ignore
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0 20px 0;
  text-decoration: none;
  text-align: left;
  line-height: 1.8em;
`
const StyledUl = styled.ul`
  list-style-type: none;
`
const StyledSpan = styled.span`
  color: darkgray;
`

function formatText(text: string) {
    return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// @ts-ignore
export const UserDescription = (props) => {

    return (
        <>
            <hr/>
            <StyledDiv>
                <StyledUl>
                    <li>
                        <StyledSpan>Imię:</StyledSpan> {props.user.firstName ? formatText(props.user.firstName) : 'BRAK DANYCH.'}
                    </li>
                    <li>
                        <StyledSpan>Nazwisko:</StyledSpan> {props.user.lastName ? formatText(props.user.lastName) : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Email:</StyledSpan> {props.user.email ? props.user.email : 'BRAK DANYCH.'}</li>
                    <li><StyledSpan>Telefon
                        kontaktowy:</StyledSpan> {props.user.phone ? props.user.phone : 'BRAK DANYCH.'}</li>
                    <li><StyledSpan>Nazwa konta na
                        Github:</StyledSpan> {props.user.githubUsername ? props.user.githubUsername : 'BRAK DANYCH.'}
                    </li>
                    <li>
                        <StyledSpan>Portfolio:</StyledSpan> {props.user.portfolioUrls ? props.user.portfolioUrls : 'BRAK DANYCH.'}
                    </li>
                    <li>
                        <StyledSpan>Projekt:</StyledSpan> {props.user.bonusProjectUrls ? props.user.bonusProjectUrls : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Bio:</StyledSpan> {props.user.bio ? props.user.bio : 'BRAK DANYCH.'}</li>
                    <li><StyledSpan>Oczekiwany rodzaj
                        zatrudnienia:</StyledSpan> {props.user.expectedContractType ? props.user.expectedContractType : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Oczekiwane miesięczne wynagrodzenie
                        netto:</StyledSpan> {props.user.expectedSalary ? props.user.expectedSalary : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Preferowane miejsce wykonywania
                        pracy:</StyledSpan> {props.user.expectedTypeWork ? props.user.expectedTypeWork : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Docelowa miejscowość
                        zatrudnienia:</StyledSpan> {props.user.targetWorkCity ? props.user.targetWorkCity : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Czy zgadzasz się odbyć bezpłatne praktyki jako początek swojej
                        pracy?</StyledSpan> {props.user.canTakeApprenticeship ? props.user.canTakeApprenticeship : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Twoje
                        wykształcenie:</StyledSpan> {props.user.education ? props.user.education : 'BRAK DANYCH.'}</li>
                    <li><StyledSpan>Komercyjne doświadczenie w programowaniu (w
                        miesiącach):</StyledSpan> {props.user.monthsOfCommercialExp ? props.user.monthsOfCommercialExp : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Doświadczenie
                        zawodowe:</StyledSpan> {props.user.workExperience ? props.user.workExperience : 'BRAK DANYCH.'}
                    </li>
                    <li><StyledSpan>Odbyte
                        kursy:</StyledSpan> {props.user.courses ? props.user.courses : 'BRAK DANYCH.'}</li>
                </StyledUl>
            </StyledDiv>
            <hr/>
        </>
    )
}
