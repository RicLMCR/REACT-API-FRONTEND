import {useState, useEffect} from "react";
import './App.css';
import {PictureContainer} from "./components/pictureContainer";
import { fetchPhotos } from "./utils";
import { SignOut, LogOrSign, Update, Delete } from "./components/logOrSign";

const App =()=> {

  const [user, setUser]=useState();
  const [pictures, setPictures]=useState([]);

  useEffect(()=>{
    fetchPhotos(setPictures);

  },[]);

  return (
    <div className="App">
      <p className="landingP">{user ? "": "Log in to Continue"}</p>
      
      {user ? 
      <div><div className="headerWrap"><SignOut user={user} setUser={setUser}/><Delete user={user} setUser={setUser}/><Update user={user}/></div>
      {pictures.map((item, index)=> {
        return(
            <PictureContainer key={index} author={item.author} url={item.download_url} />
        )})}</div>
      : 
      <div><LogOrSign user={user} setUser={setUser} /></div>}
    </div>
  );
}

export default App;
