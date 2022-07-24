import React, {useState} from "react";
import {usePapaParse} from "react-papaparse";
import {parse} from 'papaparse'

export const ReadString = () => {
const [contacts,setContacts] = useState([{email:'fakeMail@.com',name:'Bubi'}]);
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Importuj uczestników</h1>
            <div style={{textAlign:'center',
                width:'800px',
                height:'150px',
                border:'solid white 1px'
            }}
            onDragOver={(e)=>{
                e.preventDefault();
            }}
                 onDrop={(e)=>{
                     e.preventDefault();
                     // console.log(e.dataTransfer.files)
                     Array.from(e.dataTransfer.files).filter(file => file.type === "text/csv")
                         .forEach(async(file) => {
                             const text = await file.text();
                             const result = parse(text,{header:true});
                             setContacts(result.data)
                             console.log(result.data)})
                     ;
                 }}
            >PRZECIĄGNIJ TUTAJ</div>
            <ul>{contacts.map(contact =>  { return <h4 key={contact.email}>{contact.name}</h4>})}</ul>
        </div>
    )
}
