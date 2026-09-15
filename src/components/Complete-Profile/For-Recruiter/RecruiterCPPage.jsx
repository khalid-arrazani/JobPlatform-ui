


import useMediaQuery from "@mui/material/useMediaQuery";
import RecruiterCPPc from "./ForPc/RecruiterCPPc";
import RecruiterCPMobile from "./ForMobile/RecruiterCPMobile";

export default function RecruiterCPPage() {
    const isMobile = useMediaQuery("(max-width:600px)");
   const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");
  return (
    <>
 
     {isMobile && <RecruiterCPMobile />}
     
     {!isMobile && <RecruiterCPPc />}
    </>
  );
}
