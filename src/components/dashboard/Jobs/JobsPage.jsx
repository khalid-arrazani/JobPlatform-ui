import "./JobPage.css"
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import JobList from "./ListJobs.jsx";
import CardAds from "./cardAds.jsx";
import CardProfile from "./CardProfile.jsx";

export default function JobsPage(){

    return <>
          <div className="Jobsparent">
    
            <div className="Jobsdiv1">
              <CardProfile></CardProfile>
            </div>
    
    
    
            <div className="Jobsdiv2">
              <JobList />
            </div>
    
    
    
            <div className="Jobsdiv3">
              <CardAds/>
            </div>
    
    
            <div className="Jobsdiv4">
              <Stack spacing={2}>
                <Pagination count={50} />
              </Stack>
            </div>
          </div>
    </>
}