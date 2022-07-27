import React from 'react'
import styled from 'styled-components'
import { FaPhoneAlt } from 'react-icons/fa'
import { Hyperlink } from './Hyperlink'

interface Props {
  href: string
  children: string
}

const StyledHyperLink = styled(Hyperlink)`
  color: #f7f7f7;
  justify-content: flex-start;
  max-width: 100%;
  padding-left: 10px;
  transition: .2s linear;
  :hover{
    color: yellowgreen;
  }
`

const PhoneIcon = styled(FaPhoneAlt)`
  color: #4d4d4d;
`

export const TelHyperlink = (props: Props) => {
  const { children, href } = props

  return (
    <StyledHyperLink  href={`tel:${href}`}>
      <PhoneIcon />
      {children}
    </StyledHyperLink>
  )
}
