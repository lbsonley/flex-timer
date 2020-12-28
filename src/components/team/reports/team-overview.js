import React from "react";
import Card from "../../core/card/card";

const TeamOverviewReport = () => {
  return (
    <div className="team-overview-report">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <h3>Summary</h3>
          <p>All team members are awesome!</p>
          <p>Everyone is happy because they can work whenever they want.</p>
        </Card>
        <Card>
          <h3>Other</h3>
          <p>Important information for the Team.</p>
          <p>We collaborate efficiently.</p>
        </Card>
      </div>
    </div>
  );
};

export default TeamOverviewReport;
