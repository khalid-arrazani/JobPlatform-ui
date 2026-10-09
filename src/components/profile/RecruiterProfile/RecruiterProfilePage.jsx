import { useEffect } from "react";
import { useProfile } from "../../../logic/context/profileContext";


import useMediaQuery from "@mui/material/useMediaQuery";
import { getMeR } from "../../../logic/api/profile/GetMe";
import RecruiterProfileDesktop from "./Desktop/RecruiterProfiledesktop";
export default function MyProfileR() {

  const { dispatch } = useProfile();
  
    useEffect(() => {
      
      const fetchUser = async () => {
        dispatch({
          type: "SET_LOADING",
          payload: true,
        });
  
        try {
          const data = await getMeR();
          dispatch({
            type: "PROFILE",
            payload: data,
          });
  
        } catch (error) {
          console.log(error.response?.data);
        } finally {
          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }
      };
  
      fetchUser();
    }, []);

    const isMobile = useMediaQuery("(max-width:600px)");
   const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

  return (
    <>
     {/* {isMobile &&  <JobSeekerProfileMobile/>} */}
         
         {!isMobile &&  <RecruiterProfileDesktop/>}
    
    </>
  );
}
