import {useState, useEffect} from "react";
import './App.css';

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
        <div>
          <h2>{item.author}</h2>
          <img className="photoContainer" src={item.download_url} alt="alt text"/>
        </div>
        )
      })}
      
    </div>
  );
}

export default App;
