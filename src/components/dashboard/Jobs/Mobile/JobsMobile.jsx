
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


 


import { Box } from "@mui/material";


import SearchInput from "./searchInput.jsx";
import LoadingList from "./LoadingList.jsx";

import { useJob } from "../../../../logic/context/JobContext.jsx";


import JobList from "./ListJobs.jsx";





export default function JobsMobile({ search, setSearch, handleChange }) {


  const { ...state } = useJob();


  return (
    <>

      <Box sx={{height:"100%",width:"100%"}}>

        <Box sx={{height:"90%",width:"100%", display:"flex",overflow:"hidden"}} >

          

          <Box sx={{height:"100%",width:"100%",pt:"0.5rem"}} >

             <SearchInput  search={search} setSearch={setSearch} />
        
             {state.isLoading ? <LoadingList /> : <JobList/>} 
             
          </Box>

        </Box>




        <Box sx={{height:"10%",width:"100%",display:"flex" , justifyContent:"center",alignItems:"center"}}>
           <Stack spacing={2}>
            <Pagination
              onChange={handleChange}
              count={state.JobInfo?.totalPages}
            />
          </Stack>
        </Box>

      </Box>



    </>
  );
}
