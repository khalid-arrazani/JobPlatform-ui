import "./JobSeekerCPPage.css";
import { Card,Box } from "@mui/material";

import Header from "./header";
import OfficePart from "./Officeimg";
import WhyCompleteProfileCard from "./WhyComplete";
import CompleteProfileDs from "./CompleteProfileDs";
import BasicInformationSection from "./BasicInformationSection";

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
            <div className="leftSidecp">
              <OfficePart />
              <CompleteProfileDs />
              <WhyCompleteProfileCard/>
            </div>
            
            <div className="rightSide">
              <Box sx={{width:"90%",height:"95%"}}>
               <BasicInformationSection/>

              </Box>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
