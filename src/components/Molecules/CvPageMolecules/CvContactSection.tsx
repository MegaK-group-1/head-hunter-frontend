import React from "react";
import { Avatar } from "../../Atoms/Avatar";
import { HeadTitle } from "../../Atoms/HeadTitle";
import { GithubHyperlink } from "../../Atoms/GithubHyperlink";
import { TelHyperlink } from "../../Atoms/TelHyperlink";
import { MailHyperlink } from "../../Atoms/MailHyperlink";
import { Button, ButtonSize } from "../../Atoms/Button";
import { CvPositioner } from "../../Atoms/CvPositioner";
import { UnderTitle } from "../../Atoms/UnderTitle";
import { CvContactContainer } from "../../Atoms/CvContactContainer";
import { CvDescription } from "../../Atoms/CvDescription";
import { CvBase } from "../../../utils/TestUser";

// TODO: move to API/Services
const GITHUB_API = "https://github.com/";
interface Props {
  userDetails: CvBase;
}

export function CvContactSection(props: Props) {
  const { userDetails } = props;
  const { avatar, name, githubLink, tel, email, description, githubUsername } =
    userDetails;

  const userAvatar = githubUsername
    ? `${GITHUB_API}${githubUsername}.png`
    : avatar;

  return (
    <CvContactContainer>
      <Avatar
        big
        src={userAvatar}
      />
      <HeadTitle>{name}</HeadTitle>
      <GithubHyperlink href={githubLink}>{name}</GithubHyperlink>

      <CvPositioner height="15%">
        <TelHyperlink href={tel}>{tel}</TelHyperlink>
        <MailHyperlink href={email}>{email}</MailHyperlink>
      </CvPositioner>

      <CvPositioner
        scroll
        height="70%"
      >
        <UnderTitle color="#4D4D4D">O mnie</UnderTitle>
        <CvDescription>{description}</CvDescription>
      </CvPositioner>

      <CvPositioner height="30%">
        <Button
          width="80%"
          size={ButtonSize.big}
          onClick={() => true}
        >
          Brak zainteresowania
        </Button>

        <Button
          width="80%"
          size={ButtonSize.big}
          onClick={() => true}
        >
          Zatrudniony
        </Button>
      </CvPositioner>
    </CvContactContainer>
  );
}
