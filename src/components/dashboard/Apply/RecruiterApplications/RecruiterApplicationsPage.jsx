import { useMediaQuery } from "@mui/material";
import ApplicationsDesktopRc from "./Desktop/ApplicationsDesktopPage";


export default function RecruiterApplicationsPage() {
 
  
  const isMobile = useMediaQuery("(max-width:600px)");

  


  return (
    <>
      <ApplicationsDesktopRc />
    </>
  );
}
