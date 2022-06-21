import './index.css';

export const PictureContainer=({author, url})=>{

return (
    <div className="postWrap">
          <h2>{author}</h2>
          <img className="photoContainer" src={url} alt="alt text"/>
        </div>
    )   
}


