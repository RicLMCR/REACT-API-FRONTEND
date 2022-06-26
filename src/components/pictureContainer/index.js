import './index.css';

export const PictureContainer=({author, url})=>{

return (
    <div className="instaObj">
          <h2>{author}</h2>
          <img className="mainImage" src={url} alt="alt text"/>
          <div className="functionWrap"><img src="././utils/instaFunctions.png"/></div>
          <div className="commentWrap">
            <input className="commentBox" placeholder=' Add a comment'/>
          </div>
        </div>
    )   
}


