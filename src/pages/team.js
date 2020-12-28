import React from "react";

import SidebarLayout from "../layouts/sidebar/sidebar";
import TeamOverviewReport from "../components/team/reports/team-overview";
import TeamSidebarMenu from "../components/team/sidebar-menu/team-sidebar-menu";
import teamMembers from "../assets/js/mocks/team";

const Team = () => {
  return (
    <SidebarLayout
      sidebarMenu={<TeamSidebarMenu teamMembers={teamMembers} />}
      sidebarContent={<TeamOverviewReport />}
    />
  );
};

export default Team;
