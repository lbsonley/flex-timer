import React from "react";
import Brand from "./partials/brand/brand";
import MainNavigation from "./partials/main-navigation/main-navigation";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Brand />
      <MainNavigation />
    </div>
  );
};

export default Header;
