import React, { Component } from "react";
import styled from "styled-components";



//------------------USER--------------------------------------------
export class UserDescription extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div >
                <hr/>
                <h3> Imię: {this.props.firstName}</h3>
                <h3> Nazwisko: {this.props.lastName}</h3>
                <h4> Wiek: {this.props.age}</h4>
                <hr/>
            </div>
        );
    }
}





//----------------------------BOOK----------------------------------
// export class UserDescription extends Component<any, any> {
//     constructor(props: any) {
//         super(props);
//     }
//     render() {
//         return (
//             <div >
//                 <hr/>
//                 <h3> Tytuł: {this.props.title}</h3>
//                 <h3> Autor: {this.props.author}</h3>
//                 <h4> Liczba stron: {this.props.pages}</h4>
//                 <hr/>
//             </div>
//         );
//     }
// }