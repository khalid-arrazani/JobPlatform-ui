import { Box } from "@mui/material";

import Lottie from "lottie-react";
import spinner from "../../../assets/spinner.json";
console.log("Lottie:", Lottie);
console.log("typeof Lottie:", typeof Lottie);
console.log("spinner:", spinner);
console.log("typeof spinner:", typeof spinner);

import CompanyHeader from "./CompanyHeader";
import AboutCompany from "./AboutCompany";
import OpenPositionsCard from "./OpenPositionsCard ";

import CompanyStatistics from "./CompanyStatistics";
import CompanyBenefits from "./CompanyBenefits ";
import SocialContact from "./SocialContact";
import CompanyInfo from "./CompanyInfo";
import { useEffect, useState } from "react";
import { getmyCompany } from "../../../logic/api/company/Company";

import { useCompany } from "../../../logic/context/CompanyContext";

export default function CompanyPage() {
  const { dispatch, ...state } = useCompany();
  const [loading, setLoading] = useState(true);

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

  return (
    <>
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
        <CompanyHeader
          CompanyInfo={state.Company?.company}
          fetchCompany={fetchCompany}
        />

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
            <AboutCompany CompanyInfo={state.Company?.company} />
            {/* Company Statistics  */}
            <CompanyStatistics CompanyInfo={state?.Company} />

            {/* Open Positions Card  */}
            <OpenPositionsCard
              CompanyInfo={state?.Company}
              CompanyactiveJobs={state?.Company?.activeJobs}
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
            <SocialContact CompanyInfo={state.Company?.company} />

            {/* Company Benefits Card  */}
            <CompanyBenefits CompanyInfo={state.Company?.company} />

            {/* Company Info Card  */}
            <CompanyInfo CompanyInfo={state.Company?.company} />
          </Box>
        </Box>
      </Box>

  
        <Lottie
          animationData={spinner}
          loop
          style={{
            width: "150px",
            height: "150px",
          }}
        />
    
    </>
  );
}
