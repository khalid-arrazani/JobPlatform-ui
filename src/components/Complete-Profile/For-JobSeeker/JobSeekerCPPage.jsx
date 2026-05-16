import "./style.css";
import { Card, Typography, Box } from "@mui/material";

import Header from "./header";
import OfficePart from "./Officeimg";

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

              <div className="discr">
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    fontWeight: "600",
                    color: "#0e0d0dcb",
                    fontSize: "1.7rem",
                  }}
                >
                  Complete Your Profile
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "90%",
                    fontWeight: "500",
                    color: "#0e0d0dcb",
                    pt: "0.8rem",
                  }}
                >
                  Let's create your professional identity.Complete your profile
                  to unlock the best job opportunities and get noticed by
                  recruiters.
                </Typography>
                <Box sx={{ width: "95%" }}>
                  <Typography
                    sx={{
                      display: "flex",

                      width: "100%",
                      fontWeight: "700",
                      color: "#0e0d0dc9",
                      fontSize: "0.8rem",
                      pt: "1rem",
                    }}
                  >
                    Why complete your profile?
                  </Typography>
                </Box>
              </div>

              <div></div>
            </div>

            <div className="rightSide"></div>
          </div>
        </Card>
      </div>
    </>
  );
}
