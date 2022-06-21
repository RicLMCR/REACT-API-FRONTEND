import { useState } from "react"

export const InputForm=()=>{
    //1: take value stored in input box
    const [userInput, setUserInput]=useState();

    // change name to the value stored in userInput
    const [name, setName]=useState();

    

    // prevent rerender of entire page. anon handler
    return(
        <form onSubmit={(e)=> {e.preventDefault(); setName(userInput)}}>
            <h1>{name}</h1>
            <input onChange={(e)=>setUserInput(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}