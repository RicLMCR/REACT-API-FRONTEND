import './index.css';

export const PictureContainer=({author, url})=>{

return (
    <div className="instaObj">
          <h2>{author}</h2>
          <img className="mainImage" src={url} alt="alt text"/>
          <div className="functWrap"><p>Functions Here</p></div>
          <p>Comments</p>
        </div>
    )   
}


