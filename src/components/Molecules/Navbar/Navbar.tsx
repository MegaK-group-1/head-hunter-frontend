import React, { useState } from "react";
import { NavbarContainer } from "../../Atoms/NavbarContainer";
import { LogoMegaK } from "../../Atoms/LogoMegaK";
import { NavbarAvatarSection } from "./NavbarAvatarSection";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavbarContainer>
      <LogoMegaK
        height="55px"
        width="89px"
      />
      <NavbarAvatarSection
        isOpen={isOpen}
        onClick={handleModal}
      />
    </NavbarContainer>
  );
}
