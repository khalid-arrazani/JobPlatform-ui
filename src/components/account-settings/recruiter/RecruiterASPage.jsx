import "./RecruiterASStyle.css";
import { Card } from "@mui/material";

import SettingesHeader from "./SettingesHeader";
// import JobSeekerSettingsSidebar from "./JobSeekerSettingsSidebar";

// import ProfileInformation from "./SettingsPages/ProfileInformation";
// import SecuritySettings from "./SettingsPages/SecuritySettings";
// import SocialLinksSettings from "./SettingsPages/SocialLinksSettings";
// import CVSettings from "./SettingsPages/CVSettings";

// import { useState } from "react";

export default function RecruiterASPage() {
  // const [tap, setTap] = useState()

  // const renderTab = () => {
  //   switch (tap) {
  //     case "profile":
  //       return <ProfileInformation />;

  //     case "security":
  //       return <SecuritySettings />;

  //     case "social":
  //       return <SocialLinksSettings />;

  //     case "cv":
  //       return <CVSettings />;

  //     default:
  //       return <ProfileInformation />;
  //   }
  // };

  return (
    <>
      <div className="RecruiterASpar">
        <Card
          className="RecruiterAScontainer"
          sx={{ borderRadius: "0.6rem", boxShadow: "none" }}
        >
          <SettingesHeader />

          <div className="container1">
            <div className="leftSide"></div>

            <div className="RecruiterrightSide"></div>
          </div>
        </Card>
      </div>
    </>
  );
}
