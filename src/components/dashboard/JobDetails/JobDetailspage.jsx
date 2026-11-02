import { useMediaQuery } from "@mui/material";
import JobDetailsDesktop from "./Desktop/JobDetailsDesktop";
import JobDetailsMobile from "./Mobile/JobDetailsMobile";




export default function JobDetailsPage (){

   const isMobile = useMediaQuery("(max-width:600px)");
   


  return <>
   { isMobile
            ? <JobDetailsMobile   />
            : <JobDetailsDesktop   />}
  </>
}