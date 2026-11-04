import { Box } from "@mui/material";

import CompanyHeader from "./CompanyHeader";
import AboutCompany from "./AboutCompany";
import OpenPositionsCard from "./OpenPositionsCard ";

import CompanyStatistics from "./CompanyStatistics";
import CompanyBenefits from "./CompanyBenefits ";
import SocialContact from "./SocialContact";
import CompanyInfo from "./CompanyInfo";
import { useEffect } from "react";
 

import spinner from "../../../../assets/spinner.json";
import { Player } from "@lottiefiles/react-lottie-player";


import { useCompany } from "../../../../logic/context/CompanyContext";

export default function CompanyDetailsPage() {
  const {  ...state } = useCompany();
 

 




  return (
    <>
      {state.isLoading ? (
        <Box
          sx={{
            height: "93%",
            width: "100vw",
            bgcolor: "#f2f2f5",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Player
            autoplay
            loop
            src={spinner}
            style={{
              width: "140px",
              height: "140px",
            }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            height: "auto",
            width: "100vw",
            bgcolor: "#f2f2f5",
            boxSizing: "border-box",
            px: 6,
            pt: 3,
            overflow: "auto",
          }}
        >
          {/* top side or Company Card or  Header   */}
          <CompanyHeader CompanyInfo={state.CompanyDetails?.company} />

          {/* Content about Company or bottom side  */}
          <Box
            sx={{
              width: "100%",
              height: "fit-Content",
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
                borderRadius: "15px",
              }}
            >
              {/* About Company Card  */}
              <AboutCompany CompanyInfo={state.CompanyDetails?.company} />
              {/* Company Statistics  */}
              <CompanyStatistics CompanyInfo={state?.CompanyDetails} />

              {/* Open Positions Card  */}
              <OpenPositionsCard
                CompanyInfo={state?.CompanyDetails}
                CompanyactiveJobs={state?.CompanyDetails?.activeJobs}
              />
            </Box>

            {/* right side  */}
            <Box
              sx={{
                width: "50%",
                height: "fit-Content",
                borderRadius: "15px",
              }}
            >
              {/* Company Benefits Card  */}
              <SocialContact CompanyInfo={state.CompanyDetails?.company} />

              {/* Company Benefits Card  */}
              <CompanyBenefits CompanyInfo={state.CompanyDetails?.company} />

              {/* Company Info Card  */}
              <CompanyInfo CompanyInfo={state.CompanyDetails?.company} />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
