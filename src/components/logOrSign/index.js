import { useState } from "react"
import { createUser } from "../../utils";

//register/create user function
export const LogOrSign = ({setter})=>{
    const [username, setUsername]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();

    // passes createUser function and values to back end - including setter to show user now logged in
    const submitHandler=(e)=>{
        e.preventDefault();
        createUser(username, email, password, setter);
    }

    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e)=>setUsername(e.target.value)}></input>
            <input onChange={(e)=>setEmail(e.target.value)}></input>
            <input onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    )

};

//logout function
export const LogOrSignOut = ({user, setUser})=>{
    const logOut = (e)=>{
        e.preventDefault();
        setUser();
    }
    return(
        <button onClick={(e)=>logOut(e)}>Log Out</button>
    )
};