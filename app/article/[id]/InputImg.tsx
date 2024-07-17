'use client'

import { subscribe } from "diagnostics_channel";
import  React, { useState} from "react"
import { json } from "stream/consumers";

export default function InputImg(){

const [img, setImg]=useState<File | null>(null);
function submit(){
    
}

const handleChangeF=(e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files[0]){
        setImg(e.target.files[0])
    }

}
    const sendFile= async ()=>{
 
const obj={nom:'coco'}
      const resp= await fetch('http://localhost:3000/api/bonjour',{ method:'POST',
         headers:{"Content-Type":"application/json"},
          body:JSON.stringify(obj),
          
      })
const Newresp= await resp.json();
      alert(Newresp.description)
    }



    
    return(
        <>
    
        <input type="file" onChange={handleChangeF}  ></input>
        <button onClick={sendFile} > envoyer</button>
        <input type="submit"></input>
        </>
   
    )
}