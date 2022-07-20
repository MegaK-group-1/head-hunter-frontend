import React from "react";
import {Wrapper} from "../Atoms/Wrapper";
import {LoginForm} from "../Molecules/LoginForm/LoginForm";
import {LogoMegaK} from "../Atoms/LogoMegaK";

export const HomePageOrganism = () => {

    return (
        <Wrapper>
            <LogoMegaK/>
            <LoginForm/>
        </Wrapper>
    )
}