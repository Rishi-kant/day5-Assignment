
import { useState } from "react"


export default function ChangeName(){

    const[name,setName]=useState("Amit")
    function onclickHandle(){
       if(name === 'Amit'){
        setName('Rajan')
       }
       else{
        setName('Amit')
       }
    }
    return (
        <>
        <h1>UI (3)</h1>
        <p>My name is {name}</p>
        <button onClick={onclickHandle}>Change Name</button>
        </>
    )
}