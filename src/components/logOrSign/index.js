import { useState } from "react"
import { createUser, logInUser} from "../../utils";

//register/create user function
export const SignUp = ({setUser, setJwt})=>{
    const [username, setUsername]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();

    // passes createUser function and values to back end - including setUser to show user now logged in
    const submitHandler=(e)=>{
        e.preventDefault();
        createUser(username, email, password, setUser, setJwt);
    }

    return(
        <form onSubmit={submitHandler}>
            <input placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">Sign Up</button>
        </form>
    )

};

export const LogIn = ({setUser, setJwt})=>{
    const [username, setUsername]=useState();//consider placing this in app.js in future and passed down to multiple components
    const [password, setPassword]=useState();

    const submitHandler = (e)=>{
        e.preventDefault();
        logInUser(username, password, setUser, setJwt);
    };

    return (
        <form onSubmit={submitHandler}>
            <input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
            <input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Log In</button>
        </form>
    )

}

//logout function
export const SignOut = ({user, setUser, setJwt})=>{
    const submitHandler = (e)=>{
        e.preventDefault();
        setUser();
        setJwt(false);

    }
    return(
        <button onClick={(e)=>submitHandler(e)}>Log Out</button>
    )
};


