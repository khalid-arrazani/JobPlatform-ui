import { Box } from "@mui/material";

import CompanyHeader from "./CompanyHeader";
import AboutCompany from "./AboutCompany";
import OpenPositionsCard from "./OpenPositionsCard ";

export default function CompanyPage() {
  return (
    <>
      <Box
        sx={{
          height: "92.3vh ",
          width: "100vw",
          bgcolor: "#bebfcd",
          boxSizing: "border-box",
          px: 6,
          pt: 3,
          overflow: "auto",
        }}
      >
        {/* top side or Company Card or  Header   */}
        <CompanyHeader />

        {/* Content about Company or bottom side  */}
        <Box
          sx={{
            width: "100%",
            height: "100vh",

            my: 2,
            borderRadius: "15px",
            display: "flex",
            gap: 1.5,
          }}
        >
          {/* left side  */}
          <Box
            sx={{
              width: "50%",
              height: "100vh",

              borderRadius: "15px",
            }}
          >
            {/* About Company Card  */}
            <AboutCompany />

            {/* Open Positions Card  */}
            <OpenPositionsCard />
            
          </Box>

          {/* right side  */}

          <Box
            sx={{
              width: "50%",
              height: "100vh",

              borderRadius: "15px",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
