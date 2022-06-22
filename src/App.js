import {useState, useEffect} from "react";
import './App.css';
import {PictureContainer} from "./components/pictureContainer";
import { fetchPhotos } from "./utils";
import { LogOrSign, LogOrSignOut } from "./components/logOrSign";


const App =()=> {

  const [user, setUser]=useState();
  const [pictures, setPictures]=useState([]);

  useEffect(()=>{
    fetchPhotos(setPictures);
  },[]);

  return (
    <div className="App">
      <h1>{user ? user: "Landing Page"}</h1>
      
      {/*check if user logged in or out and display appropriate options */}
      {user ? <LogOrSignOut user={user} setUser={setUser}/>: <LogOrSign setter={setUser}/>}
      {pictures.map((item, index)=> {
        return(
        <PictureContainer key={index} author={item.author} url={item.download_url} />
        )
      })}

    </div>
  );
}

export default App;
