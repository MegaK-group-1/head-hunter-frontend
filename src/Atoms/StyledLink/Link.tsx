import styled from "styled-components";


interface Props {
    children: string;
    href: string;
    align:string;
    decoration?:boolean
}

export const StyledA = styled.a<Props>`

  color: white;
  align-self:${(props)=> props.align} ;
  text-decoration: ${(props)=> props.decoration? "underline" : "none"};
  
`


export const StyledLink = (props:Props)=>{

    return(
        <StyledA decoration={props.decoration} align={props.align} href={props.href} >{props.children}</StyledA>
    )
}