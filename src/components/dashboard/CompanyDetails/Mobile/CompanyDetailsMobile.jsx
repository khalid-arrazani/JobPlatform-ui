import { Box } from "@mui/material";



 

import spinner from "../../../../assets/spinner.json";
import { Player } from "@lottiefiles/react-lottie-player";


import { useCompany } from "../../../../logic/context/CompanyContext";
import CompanyHeader from "./CompanyHeader";

export default function CompanyDetailsMobile() {
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
            bgcolor: "#f8eefa",
            boxSizing: "border-box",
            overflow: "auto",
            minHeight:"100dvh"
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
              {/* <AboutCompany CompanyInfo={state.CompanyDetails?.company} /> */}
              {/* Company Statistics  */}
              {/* <CompanyStatistics CompanyInfo={state?.CompanyDetails} /> */}

              {/* Open Positions Card  */}
              {/* <OpenPositionsCard
                CompanyInfo={state?.CompanyDetails}
                CompanyactiveJobs={state?.CompanyDetails?.activeJobs}
              /> */}
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
              {/* <SocialContact CompanyInfo={state.CompanyDetails?.company} /> */}

              {/* Company Benefits Card  */}
              {/* <CompanyBenefits CompanyInfo={state.CompanyDetails?.company} /> */}

              {/* Company Info Card  */}
              {/* <CompanyInfo CompanyInfo={state.CompanyDetails?.company} /> */}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
