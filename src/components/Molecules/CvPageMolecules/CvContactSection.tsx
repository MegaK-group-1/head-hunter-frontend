import React from 'react'
import {Avatar} from '../../Atoms/Avatar'
import {HeadTitle} from '../../Atoms/HeadTitle'
import {GithubHyperlink} from '../../Atoms/GithubHyperlink'
import {TelHyperlink} from '../../Atoms/TelHyperlink'
import {MailHyperlink} from '../../Atoms/MailHyperlink'
import {Button, ButtonSize} from '../../Atoms/Button'
import {CvPositioner} from "../../Atoms/CvPositioner";
import {UnderTitle} from "../../Atoms/UnderTitle";
import {CvContactContainer} from "../../Atoms/CvContactContainer";
import {CvDescription} from "../../Atoms/CvDescription";
import {cvBase} from "../../../utils/TestUser";

interface Props {
    userDetails: cvBase
}

export const CvContactSection = (props: Props) => {
    const {
        avatar,
        name,
        githubLink,
        tel,
        email,
        description
    }
        = props.userDetails

    return (
        <CvContactContainer>
            <Avatar big src={avatar}/>
            <HeadTitle>{name}</HeadTitle>
            <GithubHyperlink href={githubLink}>{name}</GithubHyperlink>

            <CvPositioner height='15%'>
                <TelHyperlink href={tel}>{tel}</TelHyperlink>
                <MailHyperlink href={email}>{email}</MailHyperlink>
            </CvPositioner>

            <CvPositioner scroll height='55%'>
                <UnderTitle>O mnie</UnderTitle>
                <CvDescription>{description}</CvDescription>
            </CvPositioner>

            <CvPositioner height='30%'>
                <Button
                    width='80%
                    ' size={ButtonSize.big}
                    onClick={() => console.log('ok')}>
                    Brak zainteresowania
                </Button>

                <Button
                    width='80%'
                    size={ButtonSize.big}
                    onClick={() => console.log('ok')}>
                    Zatrudniony
                </Button>

            </CvPositioner>
        </CvContactContainer>
    )
}