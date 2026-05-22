import "./JobSeekerASStyle.css";
import { Card } from "@mui/material";

import Header from "./SettingesHeader";
import JobSeekerSettingsSidebar from "./JobSeekerSettingsSidebar";

export default function JobSeekerASPage() {
  return (
    <>
      <div className="par">
        <Card
          className="container"
          sx={{ borderRadius: "0.6rem", boxShadow: "none", }}
        >
          <Header />

          <div className="container1">


            <div className="leftSide">
          <JobSeekerSettingsSidebar />
              
            </div>
            

            <div className="rightSide">
              
            </div>


          </div>
        </Card>
      </div>
    </>
  );
}
