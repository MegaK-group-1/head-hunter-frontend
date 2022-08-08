import React, { MouseEventHandler } from "react";
import avatar from "../../../assets/images/testAvatar.png";
import { Avatar } from "../../Atoms/Avatar";
import { NavbarMenuContainer } from "../../Atoms/NavbarMenuContainer";
import { NavArrowButton } from "../../Atoms/NavArrowButton";
import { UnderTitle } from "../../Atoms/UnderTitle";
import { cvDetails } from "../../../utils/TestUser";

// TODO: move to API/Services
const GITHUB_API = "https://github.com/";
interface Props {
  onClick: MouseEventHandler;
  isOpen: boolean;
}
export function NavbarAvatarSection(props: Props) {
  const { onClick, isOpen } = props;

  const userAvatar = cvDetails.base.githubUsername
    ? `${GITHUB_API}${cvDetails.base.githubUsername}.png`
    : avatar;

  return (
    <NavbarMenuContainer>
      <Avatar src={userAvatar} />
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
