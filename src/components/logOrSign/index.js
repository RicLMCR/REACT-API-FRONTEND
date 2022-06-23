import { useState } from "react"
import { createUser, logInUser} from "../../utils";


//register or login dual functional component
export const LogOrSign = ({setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    try {
        // pass user registration info to rest API. setUser and setJwt to show user is logged in and display name on regsitering
        const submitHandlerCreate=(e)=>{
        e.preventDefault();
        createUser(username, email, password, setUser);
    }
    // passes login details to rest API. setUser and setJwt to show user is logged in and display name on regsitering
        const submitHandlerLogin = (e)=>{
        e.preventDefault();
        logInUser(username, password, setUser);
    };

    return (
        <div>
            <form onSubmit={submitHandlerCreate}>
            <input placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input>
            <input placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">Sign Up</button>
        </form>
        <form onSubmit={submitHandlerLogin}>
            <input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
            <input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Log In</button>
        </form>
        </div>
    )
    } catch (error) {
        console.log(error);
    }
}

//logout function
export const SignOut = ({user, setUser})=>{

    // set's user value to "" and jwt token back to false to remove all user data
    const submitHandler = (e)=>{
        e.preventDefault();
        setUser();
    }
    return(
        <button onClick={(e)=>submitHandler(e)}>Log Out</button>
    )
};


