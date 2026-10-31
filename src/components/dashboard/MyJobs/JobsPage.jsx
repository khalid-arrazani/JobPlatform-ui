import { useMediaQuery } from "@mui/material";
 



export default function JobsPage() {
  
  const isMobile = useMediaQuery("(max-width:600px)");



  return (
    <>
     {/* { isMobile
          ? <JobsMobile  search={search} setSearch={setSearch} handleChange={handleChange} />
          : <JobsDesktop  search={search} setSearch={setSearch} handleChange={handleChange} />} */}
    </>
  );
}
