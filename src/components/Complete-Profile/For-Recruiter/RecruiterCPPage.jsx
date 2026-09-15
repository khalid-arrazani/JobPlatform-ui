


import useMediaQuery from "@mui/material/useMediaQuery";

export default function JobSeekerCPPage() {
    const isMobile = useMediaQuery("(max-width:600px)");
   const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");
  return (
    <>
 
     {/* {isMobile && <JobSeekerCPMobile />}
     
     {!isMobile && <JobSeekerCPPc />} */}
    </>
  );
}
