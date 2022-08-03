import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillChatFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { NavModalContainer } from "../../Atoms/NavModalContainer";
import { NavigationLink } from "../../Atoms/NavigationLink";

export function NavModal() {
  return (
    <NavModalContainer>
      <NavigationLink
        icon={<FiSettings />}
        to="/settings"
      >
        Ustawienia
      </NavigationLink>
      <NavigationLink
        icon={<BsFillChatFill />}
        to="/reserved"
      >
        Moje Rozmowy
      </NavigationLink>
      <NavigationLink
        icon={<FaListUl />}
        to="/available-students"
      >
        Wszyscy Kursanci
      </NavigationLink>
    </NavModalContainer>
  );
}
