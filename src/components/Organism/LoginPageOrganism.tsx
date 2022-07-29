import React from "react";
import { Wrapper } from "../Atoms/Wrapper";
import { LogoMegaK } from "../Atoms/LogoMegaK";
import { LoginForm } from "../Molecules/LoginForm/LoginForm";

export function LoginPageOrganism() {
  return (
    <Wrapper>
      <LogoMegaK />
      <LoginForm />
    </Wrapper>
  );
}
