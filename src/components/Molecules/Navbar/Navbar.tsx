import React, { useState } from "react";
import { NavbarContainer } from "../../Atoms/NavbarContainer";
import { LogoMegaK } from "../../Atoms/LogoMegaK";
import { NavbarAvatarSection } from "./NavbarAvatarSection";
import { NavModal } from "./NavModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return isOpen ? (
    <>
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
      <NavModal />
    </>
  ) : (
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
