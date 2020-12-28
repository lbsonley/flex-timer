import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/core/header/header";

const SidebarLayout = ({ sidebarMenu, sidebarContent }) => {
  return (
    <>
      <Header />
      <div className="sidebar-wrapper">
        <section className="sidebar-menu">{sidebarMenu}</section>
        <section className="sidebar-content">{sidebarContent}</section>
      </div>
    </>
  );
};

SidebarLayout.propTypes = {
  sidebarMenu: PropTypes.node.isRequired,
  sidebarContent: PropTypes.node.isRequired
};

export default SidebarLayout;
