import "./listItem.scss";
import { FaPlay } from "react-icons/fa";
import { BiPlusCircle } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { useState } from "react";

const ListItem = ({index}) => {
  const [isHovered,setIsHoverd] = useState(false)
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listItem" 
    style={{left:isHovered && index*250-5+ index*2.5}}
    onMouseEnter={()=>setIsHoverd(true)} onMouseLeave={()=>setIsHoverd(false)}>
      <img
        src="https://www.koimoi.com/wp-content/new-galleries/2023/01/pathaan-quick-review-001.jpg"
        alt=""
      />
      {isHovered && (<><video src={trailer} autoPlay={true} loop></video>
      <div className="itemInfo">
        <div className="icons">
          <div className="playButton"> <FaPlay className="playIcon" /></div>
          <div> <BiPlusCircle /></div>
          <div className="likeButton"> <SlLike className="likeIcon"/></div>
         
        
         
        </div>
        <div className="itemInfoTop">
        <span className="limit">U/A 16+</span>
        <span>1h 14m</span>
    
          <span>1999</span>
        </div>

        <div className="genre">Action</div>
        {/* <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore
          itaque totam enim cum nesciunt alias laboriosam ipsum.
        </div> */}
     
      </div></>)}
      
    </div>
  );
};

export default ListItem;
