import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import "./styles.css";
import icon from "./../../../assets/images/TR LOGO new.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={icon} className='logo' alt='logo' />
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
                <li className="link" ><a href="#">MENU</a></li>
                <li className="link" ><a href="#">ABOUT US</a></li>
                <li className="link" ><a href="#">SUPPORT</a></li>
                <li className="link" ><a href="#">CONNECT</a></li>
          </ul>
        </div>
      </div>
     
    </nav>
    );

}

export default Navbar; 