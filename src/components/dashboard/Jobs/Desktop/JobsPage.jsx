import "./JobPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import JobList from "./ListJobs.jsx";
import CardAds from "./cardAds.jsx";
import CardProfile from "./CardProfile.jsx";

import { useEffect, useState } from "react";


import { Box } from "@mui/material";


import SearchInput from "./searchInput.jsx";
import LoadingList from "./LoadingList.jsx";
import { useProfile } from "../../../../logic/context/profileContext.jsx";
import { useJob } from "../../../../logic/context/JobContext.jsx";
import { useAuth } from "../../../../logic/context/AuthContext.jsx";
import { getJobList } from "../../../../logic/api/job/Job.jsx";




export default function JobsDesktop({state, search, setSearch, handleChange }) {


  const { dispatch, ...state } = useJob();



  const [filter , setFilter ] = useState({
    search :"", 
    page: 1
  });
  const [search , setSearch] = useState("")

  useEffect(() => {
  const timeout = setTimeout(() => {

    setFilter(prev => {
      if (prev.search === search) return prev;

      return {
        ...prev,
        search : search.trim(),
        page: 1
      };
    });
  },500);

  return () => clearTimeout(timeout);

 }, [search]);



  return (
    <>

      <Box sx={{height:"100%",width:"100%"}}>

        <Box sx={{height:"90%",width:"100%", display:"flex",overflow:"hidden"}} >

          <Box sx={{height:"100%",width:"23%" ,display:"flex" , justifyContent:"center"}} >
            <CardProfile/>   
          </Box>

          <Box sx={{height:"100%",width:"51%",pt:"0.5rem"}} >

             <SearchInput  search={search} setSearch={setSearch} />
        
             {state.isLoading ? <LoadingList /> : <JobList />}

          </Box>


          <Box sx={{height:"100%",width:"26%",display:"flex" , justifyContent:"center"}} >
            <CardAds />
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
