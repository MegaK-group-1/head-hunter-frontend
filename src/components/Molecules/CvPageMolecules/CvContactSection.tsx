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
import { CvDetailsInterface } from "../../../utils/types/CvDetailsInterface";
import avatar from "../../../assets/images/testAvatar.png";
// TODO: move to API/Services
const GITHUB_API = "https://github.com/";

interface Props {
  userDetails: CvDetailsInterface;
}

export function CvContactSection(props: Props) {
  const { userDetails } = props;
  const { firstName, lastName, githubUsername, phone, mail, bio, githubLink } =
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
      <HeadTitle>
        {firstName} {lastName}
      </HeadTitle>
      <GithubHyperlink href={githubLink}>{githubUsername}</GithubHyperlink>

      <CvPositioner height="15%">
        <TelHyperlink href={phone}>{phone}</TelHyperlink>
        <MailHyperlink href={mail}>{mail}</MailHyperlink>
      </CvPositioner>

      <CvPositioner
        scroll
        height="70%"
      >
        <UnderTitle color="#4D4D4D">O mnie</UnderTitle>
        <CvDescription>{bio}</CvDescription>
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
