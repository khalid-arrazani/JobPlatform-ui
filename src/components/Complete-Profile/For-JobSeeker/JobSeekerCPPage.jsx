import "./style.css";
import { Card,  Box } from "@mui/material";

import Header from "./header";
import OfficePart from "./Officeimg";
import WhyCompleteProfileCard from "./WhyComplete";
import CompleteProfileDs from "./CompleteProfileDs";

export default function JobSeekerCPPage() {
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

              <OfficePart />
    
              <CompleteProfileDs />


              
                <WhyCompleteProfileCard />
                
              

            </div>

            <div className="rightSide"></div>
          </div>
        </Card>
      </div>
    </>
  );
}
