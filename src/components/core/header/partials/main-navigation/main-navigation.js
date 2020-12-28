import React from "react";

const MainNavigation = () => {
  return (
    <nav className="main-navigation-wrapper">
      <ul className="main-navigation-list">
        <li className="main-navigation-item">
          <a className="main-navigation-link" href="#">
            Team
          </a>
        </li>
        <li className="main-navigation-item">
          <a className="main-navigation-link" href="#">
            Meetings
          </a>
        </li>
        <li className="main-navigation-item">
          <a className="main-navigation-link" href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
