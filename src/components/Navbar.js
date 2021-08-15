import './style/navbar.css';

import React, { useState } from 'react';

import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className="navbar-component">
          <Link to="#" className="menu-bar-components left-icon">
            <BiIcons.BiArrowFromBottom
              className="menu-bars-icon m-2 display-6"
              onClick={showSidebar}
            />
          </Link>
        </div>
        <div className="navbar-component">
          <Link to="#" className="menu-bar-components right-icon">
            <BiIcons.BiArrowFromBottom
              className="menu-bars-icon m-2 display-6"
              onClick={showSidebar}
            />
          </Link>
        </div>
        <nav
          className={
            sidebar ? 'nav-menu-component active' : 'nav-menu-component'
          }
        >
          <ul className="nav-menu-items-component">
            <li className="navbar-toggle-component">
              <Link to="#" className="menu-bars p-4" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
