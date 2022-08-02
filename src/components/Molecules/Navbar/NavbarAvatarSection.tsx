import React, { MouseEventHandler } from "react";
import { Avatar } from "../../Atoms/Avatar";
import avatar from "../../../assets/images/testAvatar.png";
import { NavbarMenuContainer } from "../../Atoms/NavbarMenuContainer";
import { NavArrowButton } from "../../Atoms/NavArrowButton";
import { UnderTitle } from "../../Atoms/UnderTitle";

interface Props {
  onClick: MouseEventHandler;
  isOpen: boolean;
}
export function NavbarAvatarSection(props: Props) {
  const { onClick, isOpen } = props;
  return (
    <NavbarMenuContainer>
      <Avatar src={avatar} />
      <UnderTitle
        fontWeight="normal"
        fontSize=".9em"
        color="white"
        align="center"
      >
        Mateusz Kowalski
      </UnderTitle>
      <NavArrowButton
        isOpen={isOpen}
        onClick={onClick}
      />
    </NavbarMenuContainer>
  );
}
