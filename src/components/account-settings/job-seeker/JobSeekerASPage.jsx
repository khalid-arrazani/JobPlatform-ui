import "./JobSeekerASStyle.css";
import { Card } from "@mui/material";

import SettingesHeader from "./SettingesHeader";
import JobSeekerSettingsSidebar from "./JobSeekerSettingsSidebar";

import ProfileInformation from "./SettingsPages/ProfileInformation";
import SecuritySettings from "./SettingsPages/SecuritySettings";
import SocialLinksSettings from "./SettingsPages/SocialLinksSettings";
import CVSettings from "./SettingsPages/CVSettings";
import { useState } from "react";

export default function JobSeekerASPage() {
  const [tap, setTap] = useState()
  console.log(tap);
  return (
    <>
      <div className="JobSeekerASpar">
        <Card
          className="JobSeekerAScontainer"
          sx={{ borderRadius: "0.6rem", boxShadow: "none" }}
        >
          <SettingesHeader />

          <div className="container1">

            <div className="leftSide">
              <JobSeekerSettingsSidebar setTap={setTap} />
            </div>

            <div className="JobSeekerrightSide">
              <CVSettings/>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
