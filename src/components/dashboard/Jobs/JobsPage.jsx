import { useMediaQuery } from "@mui/material";
 
import { useEffect, useState } from "react";
import { getJobList } from "../../../logic/api/job/Job";
import { useAuth } from "../../../logic/context/AuthContext";
import { useProfile } from "../../../logic/context/profileContext";
import JobsDesktop from "./Desktop/JobsDesktop";
import { useJob } from "../../../logic/context/JobContext";
import JobsMobile from "./Mobile/JobsMobile";


export default function JobsPage() {
  
  const isMobile = useMediaQuery("(max-width:600px)");



   const {  dispatch : dispatch1, ...state1 } = useProfile();
     const {dispatch } = useJob();
   

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
  
  
    const { setSnackBar } = useAuth();
  
  
    const handleChange = (event, value) => {
      setFilter(prev => ({...prev , search , page:value}) )
    };
  
    const fetchJob = async () => {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
  
      try {
        const data = await getJobList(filter);
  
        dispatch({
          type: "SET-JOB-LIST",
          payload: data,
        });
      } catch (error) {
        setSnackBar({
          open: true,
          message: error.response?.data.message,
          severity: "error",
        });
      } finally {
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }
    };
  
    useEffect(() => {
      fetchJob();
    }, [filter]);
  
  
    useEffect(()=>{
  
      dispatch1({
          type: "RELOADLISTJOB",
          payload: false,
        });
  
        fetchJob();
  
    },[state1.reloadListJob])
 
 
  return (
    <>
     { isMobile
          ? <JobsMobile  search={search} setSearch={setSearch} handleChange={handleChange} />
          : <JobsDesktop  search={search} setSearch={setSearch} handleChange={handleChange} />}
    </>
  );
}
