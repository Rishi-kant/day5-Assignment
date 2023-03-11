
import { useState } from "react"

export default function Count(){
    const[count,setCount]=useState(0)
   

    function onclickHandle(){
        setCount(count+1)
    }
    function onclickHandle2(){
       setCount(count-1)
    }
    return (
        <>
        <h1>UI (2)</h1>
        <p>{count}</p>
   
        <button onClick={onclickHandle}>Increase Count</button>
        <button onClick={onclickHandle2}>Decrease Count</button>
        </>
    )
}