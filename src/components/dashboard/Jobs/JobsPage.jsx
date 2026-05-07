import "./JobPage.css"
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import JobList from "./ListJobs.jsx";
import CardAds from "./cardAds.jsx";
import CardProfile from "./CardProfile.jsx";

export default function JobsPage(){

    return <>
          <div class="Jobsparent">
    
            <div class="Jobsdiv1">
              <CardProfile></CardProfile>
            </div>
    
    
    
            <div class="Jobsdiv2">
              <JobList />
            </div>
    
    
    
            <div class="Jobsdiv3">
              <CardAds/>
            </div>
    
    
            <div class="Jobsdiv4">
              <Stack spacing={2}>
                <Pagination count={50} />
              </Stack>
            </div>
          </div>
    </>
}