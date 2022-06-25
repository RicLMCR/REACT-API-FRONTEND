import { useState } from "react"
import './index.css';
import { createUser, logInUser, deleteUser, updUser} from "../../utils";

//register or login dual functional component
export const LogOrSign = ({setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    try {
        // pass user registration info to rest API. setUser to show user is logged in and display name on regsitering
        const submitHandlerCreate=(e)=>{
        e.preventDefault();
        createUser(username, email, password, setUser);
    };
        // passes login details to rest API. setUser to show user is logged in and display name on regsitering
        const submitHandlerLogin = (e)=>{
        e.preventDefault();
        logInUser(username, password, setUser);
    };
        // truthy falsey test to display login or sign up panel
        const [logSwitch, setLogSwitch] = useState(true);

        return (<div className="logOrSign">
        { logSwitch ? 
        <div>
            <img src="../../../utils/logo.png" alt="Instagram"/>
            <form className="logOrSignForm" onSubmit={submitHandlerLogin}>
                <input className="logOrSignInput" placeholder=" username" onChange={(e)=>setUsername(e.target.value)}/>
                <input className="logOrSignInput" placeholder=" password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="loginButton" type="submit">Log In</button>
                <div className="dividerWrap"><div className="divider"></div><h2>OR</h2><div className="divider"></div></div>
                <div className="switchLogSign">
                    <p>Don't have an account?</p>
                    <button className="switchLogSignButton" onClick={(e)=>setLogSwitch()}>Sign Up</button>
                </div>
            </form>
            </div>
            : 
            <div>
                <form className="logOrSignForm" onSubmit={submitHandlerCreate}>
                    <input className="logOrSignInput" placeholder=" username" onChange={(e)=>setUsername(e.target.value)}></input>
                    <input className="logOrSignInput" type="email" placeholder=" email" onChange={(e)=>setEmail(e.target.value)}></input>
                    <input className="logOrSignInput" placeholder=" password" onChange={(e)=>setPassword(e.target.value)}></input>
                    <button className="loginButton" type="submit">Sign Up</button>
                    <div className="dividerWrap"><div className="divider"></div><h2>OR</h2><div className="divider"></div></div>
                    <div className="switchLogSign">
                        <p>Already have an account?</p>
                        <button className="switchLogSignButton" onClick={(e)=>setLogSwitch(true)}>Login</button>
                    </div>
                </form>
            </div>}
        </div>
    )
    } catch (error) {
        console.log(error);
    }
}

//logout function
export const SignOut = ({user, setUser})=>{
    // set's user value to Null to remove all user data
    const submitHandler = (e)=>{
        e.preventDefault();
        setUser();
    }
    return(
        <button onClick={(e)=>submitHandler(e)}>Log Out</button>
    )
};

//delete user function
export const Delete = ({user, setUser})=>{
    // if user = true then display button, else display delete confirm emssage
    // get user and pass to API 
    // on return confirm deletion
    // and log user out
    // jwt can be used to ensure mesage stays
    const submitHandler = (e)=>{
        e.preventDefault();
        deleteUser(user);
        setUser();
    }
    return (
        <button onClick={(e)=>submitHandler(e)}>Delete Your Account</button>
    )
}

export const Update = ({user})=>{

    const [newUserName, setNewUserName] = useState();

    const submitHandler = (e)=>{
        console.log("update username hit", user)
        e.preventDefault();
        console.log("original name:", user, "new name:", newUserName);
        updUser(user, newUserName);
        
        // setUser(newUserName);
    }

    return (
        <form onSubmit={submitHandler}>
            <input placeholder="update username" onChange={(e)=>setNewUserName(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}


