import React from 'react'
import {Avatar} from '../../Atoms/Avatar'
import {HeadTitle} from '../../Atoms/HeadTitle'
import {GithubHyperlink} from '../../Atoms/GithubHyperlink'
import {TelHyperlink} from '../../Atoms/TelHyperlink'
import {MailHyperlink} from '../../Atoms/MailHyperlink'
import {Button} from '../../Atoms/Button'
import {Container} from './CvSectionAtoms/Container'
import {Positioner} from './CvSectionAtoms/Positioner'
import {UnderTitle} from '../../Atoms/UnderTitle'
import {Description} from './CvSectionAtoms/Description'
import {TestUser} from '../../../utils/TestUser'

export const CvContactSection = () => {
    const {avatar, name, githubLink, tel, email, description} = TestUser


    return (
        <Container>
            <Avatar big src={avatar}/>

            <HeadTitle>{name}</HeadTitle>

            <GithubHyperlink href={githubLink}>{name}</GithubHyperlink>

            <Positioner height='80px'>
                <TelHyperlink href={tel}>{tel}</TelHyperlink>

                <MailHyperlink href={email}>{email}</MailHyperlink>
            </Positioner>

            <Positioner>
                <UnderTitle>O mnie</UnderTitle>
                <Description>{description}</Description>
            </Positioner>

            <Positioner>
                <Button onClick={() => console.log('ok')} long>Brak Zainteresowania</Button>
                <Button onClick={() => console.log('ok')} long>Zatrudniony</Button>
            </Positioner>
        </Container>
    )
}
