import { useMediaQuery } from "@mui/material";
import MyJobsPageDesktop from "./Desktop/MyJobsPageDesktop";
 



export default function MyJobsPage() {
  
  const isMobile = useMediaQuery("(max-width:600px)");



  return (
    <>
     { isMobile? null
          // ? <JobsMobile  search={search} setSearch={setSearch} handleChange={handleChange} />
          : <MyJobsPageDesktop/>}
    </>
  );
}
