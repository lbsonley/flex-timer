import React from "react";
import PropTypes from "prop-types";

const TeamSidebarMenu = ({ teamMembers }) => (
  <>
    <h2>Reports</h2>
    <ul>
      <li className="sidebar-item">Overview</li>
      {teamMembers.map((item) => (
        <li key={item.id} className="sidebar-item">
          {item.firstName}
        </li>
      ))}
    </ul>
  </>
);

TeamSidebarMenu.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TeamSidebarMenu;
