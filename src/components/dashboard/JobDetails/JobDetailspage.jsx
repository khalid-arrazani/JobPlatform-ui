import { useMediaQuery } from "@mui/material";
import JobDetailsDesktop from "./Desktop/JobDetailsDesktop";



export default function JobDetailsPage (){
   const isMobile = useMediaQuery("(max-width:600px)");

  return <>
  { isMobile? null
            // ? <JobsMobile  search={search} setSearch={setSearch} handleChange={handleChange} />
            : <JobDetailsDesktop/>}
  </>
}