import { useMediaQuery } from "@mui/material";
import MyJobsPageDesktop from "./Desktop/MyJobsPageDesktop";
import MyJobsPageMobile from "./Mobile/MyJobsPageMobile";
 



export default function MyJobsPage() {
  
  const isMobile = useMediaQuery("(max-width:600px)");



  return (
    <>
     { isMobile?  <MyJobsPageMobile  />
          : <MyJobsPageDesktop/>}
    </>
  );
}
