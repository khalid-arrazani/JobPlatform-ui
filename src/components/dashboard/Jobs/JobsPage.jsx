import "./JobPage.css"
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import JobList from "./ListJobs.jsx";
import CardAds from "./cardAds.jsx";
import CardProfile from "./CardProfile.jsx";
import { useAuth } from "../../../logic/context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getJobList } from "../../../logic/api/job/Job.jsx";


export default function JobsPage(){

  const {dispatch , ...state} = useAuth()
  
   const navigate = useNavigate()
    
  
    useEffect(() => {
      
      const fetchUser = async () => {
        dispatch({
          type: "SET_LOADING",
          payload: true,
        });
        try {
         const data = await getJobList();
  
          if (data.isComplete){
            navigate("/profile")
          }
  
          dispatch({
            type: "COMPLETEPRPFILE",
            payload: data,
          });
          
        } catch (error) {
  
          console.log(error.response?.data);
  
        } finally {
  
          dispatch({
            type: "SET_LOADING",
            payload: false,
          });
        }
      };
      fetchUser();
    }, []);

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