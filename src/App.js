import {useState, useEffect} from "react";
import './App.css';
import {PictureContainer} from "./components/pictureContainer";

const App =()=> {

  const [user, setUser]=useState();
  const [pictures, setPictures]=useState([]);

  useEffect(()=>{
    fetchPhotos();
  },[]);

  const fetchPhotos=async()=>{
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
    const data = await res.json();
    setPictures(data);
  }

  return (
    <div className="App">

      {user ? <h1>{user}</h1> : <h1>Type a name</h1>}
      <input onChange={(e)=> setUser(e.target.value)}/>
      
      {pictures.map((item, index)=> {
        return(
        <PictureContainer author={item.author} url={item.download_url} />
        )
      })}

    </div>
  );
}

export default App;
