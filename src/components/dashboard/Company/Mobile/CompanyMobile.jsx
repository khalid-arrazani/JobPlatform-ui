import { Box } from "@mui/material";

import spinner from "../../../../assets/spinner.json";
import { Player } from "@lottiefiles/react-lottie-player";

import { useCompany } from "../../../../logic/context/CompanyContext";
import CompanyHeader from "./CompanyHeader";
import AboutCompany from "./AboutCompany";
import CompanyInfo from "./CompanyInfo";
import SocialContact from "./SocialContact";
import CompanyBenefits from "./CompanyBenefits ";
import CompanyStatistics from "./CompanyStatistics";
import OpenPositionsCard from "./OpenPositionsCard ";
import Owner from "./Owner";
import { useEffect, useState } from "react";
import { getmyCompany } from "../../../../logic/api/company/Company";

export default function CompanyMobile() {
  const { dispatch, ...state } = useCompany();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    setLoading(true);

    try {
      const data = await getmyCompany();
      dispatch({
        type: "SETCOMPANY",
        payload: data,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });

      setLoading(false);
    }
  };
  console.log(state , "222");

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
            bgcolor: "#dfd0e296",
            boxSizing: "border-box",
            overflow: "auto",
            minHeight: "100dvh",
            px: "6px",
          }}
        >
          {/* top side or Company Card or  Header   */}
          <CompanyHeader CompanyInfo={state.Company.company} />

          {/* Content about Company or bottom side  */}
          <Box
            sx={{
              width: "100%",
              height: "fit-Content",
              my: 1,
              borderRadius: "15px",
              display: "flex",
              boxSizing: "border-box",
              pb: "10rem",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* About Company Card  */}
            <AboutCompany CompanyInfo={state.Company?.company} />

            {/* Company SocialContact Card  */}
            <SocialContact CompanyInfo={state.Company?.company} />

            {/* Company Benefits Card  */}
            <CompanyBenefits CompanyInfo={state.Company?.company} />

            {/* Company Statistics  */}
            <CompanyStatistics CompanyInfo={state?.Company} />

            {/* Company Info Card  */}
            <CompanyInfo CompanyInfo={state.Company?.company} />

            {/* Open Positions Card  */}
            <OpenPositionsCard
              CompanyInfo={state?.Company}
              CompanyactiveJobs={state?.Company?.activeJobs}
            />
            {/* company owner */}
            <Owner CompanyInfo={state.Company?.company} />
          </Box>
        </Box>
      )}
    </>
  );
}
