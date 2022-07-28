import React, {Component, useEffect, useState} from 'react';
import styled from "styled-components";
import {UserDescription} from "../Molecules/UserDescription/UserDescription";
import {Container, AppBar, Typography, Grid, Grow} from "@mui/material";
import {LogoMegaK} from "../Atoms/LogoMegaK";
import {UserForm} from "../Molecules/UserDescription/UserForm";

const StyledDiv = styled.div`
  color: aliceblue;
  margin: 50px;
  border: 3px solid orange;
  text-align: center;
`

function formatText(text: string) {
    return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}





//---------------------KOMPONENT DLA USER PAGE--Z KOMPONENETEM FORM--------------DZIALAJACY--------
export class UserPageOrganism extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            user:
                {
                    firstName: "Celina",
                    lastName: "Malinowska",
                    age: "35"
                },

        }
    }

    render() {
        return (
            <Container maxWidth={'lg'}>
                <AppBar position={'static'} color={'inherit'}>
                    {/*<Typography variant={'h2'} align={'center'}>TRAVERSE</Typography>*/}
                    {/*<LogoMegaK />*/}
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid item xs={12} sm={7}>
                            <UserDescription firstName={this.state.user.firstName} lastName={this.state.user.lastName} age={this.state.user.age}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <UserForm/>
                        </Grid>
                    </Container>
                </Grow>
            </Container>

        )
    }
}


//---------------------KOMPONENT DLA USER PAGE----------------DZIALAJACY--------------------------------
// export class UserPageOrganism extends Component<any, any> {
//     constructor(props: any) {
//         super(props);
//
//         this.state = {
//             user: [
//                 {
//                     firstName: "Celina",
//                     lastName: "Malinowska",
//                     age: "35"
//                 },
//             ]
//         }
//     }
//
//     render() {
//         return (
//             <div >
//                 {
//                     this.state.user.map((user: any, i: any) => <UserDescription key = {i} firstName={user.firstName} lastName={user.lastName} age={user.age} />)
//                 }
//             </div>
//         )
//     }
// }
//---------------------KOMPONENT DLA USER PAGE---END--------------------------------



//---------------------KOMPONENT DLA USER PAGE----SETSTATE--------------------------------
// export class UserPageOrganism extends Component<any, any> {
//     constructor(props: any) {
//         super(props);
//
//         this.state = {
//             user: [
//                 {
//                     firstName: "Celina",
//                     lastName: "Malinowska",
//                     age: "35"
//                 },
//             ]
//         }
//     }
//
//     updateUser = () => {
//         this.setState({
//             user: [
//                 {
//                     firstName: "Celina",
//                     lastName: "Petelska",
//                     age: "35"
//                 }
//             ]
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.updateUser}>
//                     Zmien nazwisko
//                 </button>
//                 {
//                     this.state.user.map((user: any, i: any) => <UserDescription key = {i} firstName={user.firstName} lastName={user.lastName} age={user.age} />)
//                 }
//                 {/*{this.state.user.map((user: any, i: any) => (<UserDescription key={i} user={user} />))}*/}
//             </div>
//         );
//     }
// }





//----------------------------BOOK----------------------------------------------
// export class UserPageOrganism extends Component<any, any> {
//     constructor(props: any) {
//         super(props);
//
//         this.state = {
//             books: [
//                 {
//                     title: "Hobbit",
//                     author: "J. R. Tolkien",
//                     pages: "455"
//                 },
//                 {
//                     title: "Rok 1984",
//                     author: "G. Orwell",
//                     pages: "455"
//                 },
//                 {
//                     title: "Władca Pierścieni",
//                     author: "J. R. Tolkien",
//                     pages: "669"
//                 },
//                 {
//                     title: "Stary człowiek i morze",
//                     author: "E. Hemingway",
//                     pages: "226"
//                 }
//             ]
//         }
//     }
//
//     render() {
//         return (
//             <div >
//                 {
//                     this.state.books.map((book: any, i: any) => <UserDescription key = {i} title={book.title} author={book.author} pages={book.pages} />)
//                 }
//             </div>
//         )
//     }
// }


//-------------------------------------------------------------------------------------

// export class UserPageOrganism extends Component<any, any> {
//     constructor(props: any) {
//         super(props);
//
//         this.state = {
//             user: {
//                 firstName: "Diana",
//                 lastName: 'Kalinowska',
//                 age: 38,
//             }
//         }
//     }
//
//     render() {
//         return (
//             <StyledDiv>
//                 <br/>
//                 <h3> { this.state.user.firstName } { this.state.user.lastName }</h3>
//                 <h4> Wiek: { this.state.user.age } </h4>
//                 <br/>
//             </StyledDiv>
//         )
//     }
// }

//---------------------------------------------------------------------------------------------------
// export const UserPageOrganism = () => {
//     const [state, setState] = useState([])
//     const [hasError, setHasError] = useState(false)
//     useEffect(() => {
//         fetch("/api/data").then(
//             res => setState(res.data)
//         ).catch(err => setHasError(true))
//     }, [])
//     return (
//         <>
//             {hasError? <div>Error occured.</div> : (state.map( d => <div>{d}</div>))}
//         </>
//     )
// }




//---------------------------------------------------------------------------------------------

// export class UserPageOrganism extends Component<any, any> {
//     constructor(props: any) {
//         super(props);
//
//         this.state = {
//             data: [1, 2, 3],
//             hasError: false,
//             loading: false
//         }
//     }
//
//
//     componentDidMount() {
//         this.setState({loading: true})
//         fetch("/api/data")
//             .then(res => {
//                 this.setState({...this.state, data: this.state.data})
//             })
//             .catch(err => {this.setState({hasError: true})})
//     }
//
//     render() {
//         return (
//             <>
//                 <StyledDiv>
//                     <br/>
//                     {this.state.hasError ? <div>Error occured fetching data</div> : (this.state.data)}
//                 </StyledDiv>
//
//             </>
//
//         )
//     }
//
//
// }

//---------------------------------------------------------------------------------------------------

// function isAdult(age: number) {
//     return age >=18 ? 'TAK' : "NIE";
// }
// function formatText(text: string) {
//     return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
// }
//
// const user = {
//     firstName: "Diana",
//     lastName: 'Kalinowska',
//     age: 38,
// }
//
//
// export const UserPageOrganism = () => {
//     return (
//         <StyledDiv>
//             <h1> { user.firstName } </h1>
//             <h2> { user.lastName } </h2>
//             <h4> Wiek: { user.age } </h4>
//             <h4> Pełnoletni? { isAdult(user.age) } </h4>
//         </StyledDiv>
//     )
// }



//----------------------------------------------------------------------------------------

// function isAdult(age: number) {
//     return age >=18 ? 'TAK' : "NIE";
// }
// function formatText(text: string) {
//     return text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
// }
//
// const user = [
//     {"firstName": "Ada", "lastName": "Malinowska", "age": 20},
//     {"firstName": "MiREk", "lastName": "Kowalski", "age": 15},
//     {"firstName": "Sebastian", "lastName": "KaliNOWski", "age": 39},
// ]
//
//
// export const UserPageOrganism = () => {
//     return (
//         <StyledDiv className='UserPageOrganism'>
//             <table>
//                 <tr>
//                     <StyledTh>Imię</StyledTh>
//                     <StyledTh>Nazwisko</StyledTh>
//                     <StyledTh>Wiek</StyledTh>
//                     <StyledTh> Pełnoletni? </StyledTh>
//                 </tr>
//                 <tr>
//                     <td> { formatText(user[0].firstName) } </td>
//                     <td> { formatText(user[0].lastName) } </td>
//                     <td> { user[0].age } </td>
//                     <td> { isAdult(user[0].age) } </td>
//                 </tr>
//                 <tr>
//                     <td> { formatText(user[1].firstName) } </td>
//                     <td> { formatText(user[1].lastName) } </td>
//                     <td> { user[1].age } </td>
//                     <td> { isAdult(user[1].age) } </td>
//                 </tr>
//                 <tr>
//                     <td> { formatText(user[2].firstName) } </td>
//                     <td> { formatText(user[2].lastName) } </td>
//                     <td> { user[2].age } </td>
//                     <td> { isAdult(user[2].age) } </td>
//                 </tr>
//             </table>
//         </StyledDiv>
//     )
// }
