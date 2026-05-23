import "./JobSeekerASStyle.css";
import { Card } from "@mui/material";

import SettingesHeader from "./SettingesHeader";
import JobSeekerSettingsSidebar from "./JobSeekerSettingsSidebar";
import ProfileInformation from "./SettingsPages/ProfileInformation";
import SecuritySettings from "./SettingsPages/SecuritySettings";

export default function JobSeekerASPage() {
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
              <JobSeekerSettingsSidebar />
            </div>

            <div className="JobSeekerrightSide">
              <SecuritySettings />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
