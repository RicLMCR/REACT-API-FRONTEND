import {useState, useEffect} from "react";
import './App.css';
import {PictureContainer} from "./components/pictureContainer";
import { fetchPhotos } from "./utils";
import { SignOut, LogOrSign } from "./components/logOrSign";


const App =()=> {

  const [user, setUser]=useState();
  const [pictures, setPictures]=useState([]);

  useEffect(()=>{
    fetchPhotos(setPictures);

  },[]);

  return (
    <div className="App">
      <h1>{user ? user: "Landing Page"}</h1>
      
      {user ? <div><SignOut user={user} setUser={setUser}/> {pictures.map((item, index)=> {
        return(
          <PictureContainer key={index} author={item.author} url={item.download_url} />
        )
      })}</div>: <div><LogOrSign user={user} setUser={setUser} /></div>}
      

    </div>
  );
}

export default App;
