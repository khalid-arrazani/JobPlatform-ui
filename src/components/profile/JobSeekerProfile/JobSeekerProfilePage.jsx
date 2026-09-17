import JobSeekerProfileDesktop from "./Desktop/JobSeekerProfiledesktop";
import JobSeekerProfileMobile from "./Mobile/JobSeekerProfileMobile";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function MyProfileJS() {

    const isMobile = useMediaQuery("(max-width:600px)");
   const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

  return (
    <>
     {isMobile &&  <JobSeekerProfileMobile/>}
         
         {!isMobile &&  <JobSeekerProfileDesktop/>}
    
    </>
  );
}
