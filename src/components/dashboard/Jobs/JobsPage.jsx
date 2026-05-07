import "./JobPage.css"
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import JobList from "./ListJobs.jsx";
import CardAds from "./cardAds.jsx";
import CardProfile from "./CardProfile.jsx";

export default function JobsPage(){

    return <>
          <div class="parent">
    
            <div class="div1">
              <CardProfile></CardProfile>
            </div>
    
    
    
            <div class="div2">
              <JobList />
            </div>
    
    
    
            <div class="div3">
              <CardAds/>
            </div>
    
    
            <div class="div4">
              <Stack spacing={2}>
                <Pagination count={50} />
              </Stack>
            </div>
          </div>
    </>
}