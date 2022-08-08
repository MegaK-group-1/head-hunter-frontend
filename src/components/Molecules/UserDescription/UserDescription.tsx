import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0 20px 0;
  text-decoration: none;
  text-align: left;
`
const StyledUl = styled.ul`
  list-style-type: none;
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
                    <li>imię: {props.user.firstName ? formatText(props.user.firstName) : 'BRAK DANYCH.'}</li>
                    <li>nazwisko: {props.user.lastName ? formatText(props.user.lastName) : 'BRAK DANYCH.'}</li>
                </StyledUl>
            </StyledDiv>
            <hr/>
        </>
    )
}
