import "./JobSeekerCPPage.css";
import { Card } from "@mui/material";

import Header from "./header";


export default function JobSeekerASPage() {
  return (
    <>
      <div className="par">
        <Card
          className="container"
          sx={{ borderRadius: "0.6rem", boxShadow: "none" }}
        >
          <Header />

          <div className="container1">
            <div className="leftSide">

            </div>
            
            <div className="rightSide">

            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
