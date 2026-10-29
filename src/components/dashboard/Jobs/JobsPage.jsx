import { useMediaQuery } from "@mui/material";
import JobsDesktop from "./Desktop/JobsPage";
import { useEffect, useState } from "react";
import { getJobList } from "../../../logic/api/job/Job";
import { useAuth } from "../../../logic/context/AuthContext";
import { useJob } from "../../../logic/context/JobContext";
import { useProfile } from "../../../logic/context/profileContext";


export default function JobsPage() {
  
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");


   const {  dispatch : dispatch1, ...state1 } = useProfile();
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
          ? null
          : <JobsDesktop state={state} search={search} setSearch={setSearch} handleChange={handleChange} />}
    </>
  );
}
