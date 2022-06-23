import {useState, useEffect} from "react";
import './App.css';
import {PictureContainer} from "./components/pictureContainer";
import { fetchPhotos } from "./utils";
import { SignUp,  SignOut, LogIn } from "./components/logOrSign";


const App =()=> {

  const [user, setUser]=useState();
  const [pictures, setPictures]=useState([]);

  //set state to check if user is logged in or out. This will be used by the ternary operator to determine what jsx is displayed (login/sign fields or logout button)
  const [jwt,setJwt] = useState(false);


  useEffect(()=>{
    fetchPhotos(setPictures);
  },[]);

  return (
    <div className="App">
      <h1>{user ? user: "Landing Page"}</h1>
      
      {/*check if user logged in or out and display appropriate options <LogIn /> */}
              {/* logged in                                                         logged out */}
      {jwt ? <SignOut user={user} setUser={setUser} setJwt={setJwt}/> : <div><SignUp user={user} setUser={setUser} setJwt={setJwt} /><LogIn user={user} setUser={setUser} setJwt={setJwt} /></div>}
      {pictures.map((item, index)=> {
        return(
        <PictureContainer key={index} author={item.author} url={item.download_url} />
        )
      })}

    </div>
  );
}

export default App;
