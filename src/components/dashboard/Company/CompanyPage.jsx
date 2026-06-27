import { Box } from "@mui/material";

import CompanyHeader from "./CompanyHeader";
import AboutCompany from "./AboutCompany";
import OpenPositionsCard from "./OpenPositionsCard ";

import CompanyStatistics from "./CompanyStatistics";
import CompanyBenefits from "./CompanyBenefits ";
import SocialContact from "./SocialContact";
import CompanyInfo from "./CompanyInfo";



export default function CompanyPage() {


  // useEffect(() => {
  //     const fetchUser = async () => {
  //       dispatch({
  //         type: "SET_LOADING",
  //         payload: true,
  //       });
  //       try {
  //         let data;
  //         const user = await getMeUser();
  //         if (user.role == "jobSeeker") {
  //           data = await getMeJS();
  //         } else if (user.role == "recruiter") {
  //           data = await getMeR();
  //         }
  //         console.log(data);
  //         dispatch({
  //           type: "PROFILE",
  //           payload: data,
  //         });
   
  //       } catch (error) {
  //         console.log(error.response?.data);
  //       } finally {
  //         dispatch({
  //           type: "SET_LOADING",
  //           payload: false,
  //         });
  //       }
  //     };
  //     fetchUser();
  //   }, []);





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
          overflow: "auto"
        }}
      >
        {/* top side or Company Card or  Header   */}
        <CompanyHeader />

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
            <AboutCompany />
          {/* Company Statistics  */}
          <CompanyStatistics />

            {/* Open Positions Card  */}
            <OpenPositionsCard />




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
            <SocialContact />

            {/* Company Benefits Card  */}
            <CompanyBenefits />


            {/* Company Info Card  */}
            <CompanyInfo />


          </Box>
        </Box>


      </Box>
    </>
  );
}
