import "./list.scss";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x-50;
    if (direction == "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${300 + distance}px)`;
    }

    if ((direction = "right" && slideNumber < 5)) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-300 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch </span>
      <div className="wrapper">
        <span className="sliderLeftArrow">
          <MdArrowBackIos
            className="left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
        </span>

        <div className="container" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>

        <span className="sliderRightArrow">
          <MdArrowForwardIos
            className="right"
            onClick={() => handleClick("right")}
          />
        </span>
      </div>
    </div>
  );
};

export default List;
