import "./featured.scss";
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.ottplay.com/images/oppenheimer-new-trailer-youtube-thumbnail-1683534906930-89.jpg"
        alt=""
      />

      <div className="info">
        <img src="" alt="O P P E N H E I M E R" />

        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quidem
          modi, inventore nihil reprehenderit suscipit molestias eum, asperiores
          quod quo autem voluptatum ea, accusantium soluta? Architecto natus et
          sequi sit?
        </span>
        <div className="buttons">
          <button className="play">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <MdOutlineInfo className="moreIcon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
