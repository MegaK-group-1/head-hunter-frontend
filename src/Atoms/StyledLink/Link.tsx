import styled from "styled-components";
import {Link} from "react-router-dom";


interface Props {
    children: string;
    to: string;
    align:string;
    underline?: string
}

export const StylesLink = styled(Link)<Props>`

  color: white;
  align-self:${(props)=> props.align} ;
  text-decoration: ${(props)=> props.underline? props.underline : "none"};
  
`

export const StyledLink = (props:Props)=>{

    return(
        <StylesLink
            underline={props.underline}
            align={props.align}
            to={props.to}
        >{props.children}
        </StylesLink>
    )
}