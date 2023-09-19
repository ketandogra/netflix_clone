import Netflix_logo from "../../assests/Netflix_logo.png";
import "./navbar.scss";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
// import {useLocation} from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  // const location = useLocation();

  //   useEffect(() => {
  //     // to start new page from top
  //     window.scrollTo(0, 0);
  //   }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
 
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div className={`navbar ${show}`}>
      <div className="container">
        <div className="left">
          <img src={Netflix_logo} alt="" />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <BiSearch className="icon" />
          <span>Children</span>
          <MdOutlineNotifications className="icon" />

          <div className="profile">
            <div className="profileIcon">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU"
                alt=""
              />
              <BiSolidDownArrow className="iconDown" />
            </div>
            <div className="navigator">
              <BiSolidUpArrow />
            </div>
            
              <div className="options">
                <span>Manage Profile</span>
                <hr />
                <span>Sign out of Netflix</span>
              </div>
            </div>
    
        </div>
      </div>
    </div>
  );
};

export default Navbar;
