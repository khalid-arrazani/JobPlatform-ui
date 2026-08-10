import { Box } from "@mui/material";

import CompanyHeader from "./CompanyHeader";
import AboutCompany from "./AboutCompany";
import OpenPositionsCard from "./OpenPositionsCard ";

import CompanyStatistics from "./CompanyStatistics";
import CompanyBenefits from "./CompanyBenefits ";
import SocialContact from "./SocialContact";
import CompanyInfo from "./CompanyInfo";
import { useEffect } from "react";
import {
  GetCompanyById,
} from "../../../logic/api/company/Company";

import { useCompany } from "../../../logic/context/CompanyContext";
import { useParams } from "react-router-dom";

export default function CompanyDetailsPage() {

  const { dispatch, ...state } = useCompany();

    const { JobId } = useParams();
    console.log(JobId);

  const fetchCompany = async () => {

    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    try {
      const data = await GetCompanyById();

      dispatch({
        type: "SETCOMPANYDETAILS",
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
    }
  };

 useEffect(() => {
    fetchCompany();
  }, []);


 

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
    </>
  );
}
