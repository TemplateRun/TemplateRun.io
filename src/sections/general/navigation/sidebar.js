import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HeaderWrapper } from "./navigation.style";


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <HeaderWrapper>
    <div>
        <div className={`${isSidebarOpen ? 'sidebar-opened' : 'sidebar-closed'}`}>
          <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      </div>
        
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='sidebar-links'>
      <li className="link" ><a href="#">MENU</a></li>
                <li className="link" ><a href="#">ABOUT US</a></li>
                <li className="link" ><a href="#">SUPPORT</a></li>
                <li className="link" ><a href="#">CONNECT</a></li>
      </ul>
    </aside>
    </div>
    </HeaderWrapper>
    
    );
       
}

export default Sidebar;       
