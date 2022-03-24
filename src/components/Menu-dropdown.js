import React, { useRef, useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';

const Invmenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
          <MenuIcon className="sidebar-icon" onClick={onClick} />
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Invmenu;