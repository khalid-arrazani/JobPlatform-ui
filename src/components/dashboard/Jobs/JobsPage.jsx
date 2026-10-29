import { useMediaQuery } from "@mui/material";
import JobsDesktop from "./Desktop/JobsPage";


export default function JobsPage() {
  
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

 

  return (
    <>

     { isMobile
          ? null
          : <JobsDesktop />}
    </>
  );
}
