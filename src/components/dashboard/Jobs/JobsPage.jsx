import "./JobPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import JobList from "../ListJobs.jsx";
import CardAds from "./cardAds.jsx";
import CardProfile from "./CardProfile.jsx";

import { useEffect, useState } from "react";
import { getJobList } from "../../../../logic/api/job/Job.jsx";
import { useJob } from "../../../../logic/context/JobContext.jsx";
import { useAuth } from "../../../../logic/context/AuthContext.jsx";

import { Box } from "@mui/material";


import SearchInput from "./searchInput.jsx";
import LoadingList from "./LoadingList.jsx";
import { useMediaQuery } from "@mui/material";

import { useProfile } from "../../../../logic/context/profileContext.jsx";
import JobsDesktop from "./Desktop/JobsPage.jsx";

export default function JobsPage() {
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


  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

 

  return (
    <>

      isMobile
          ? null
          : <JobsDesktop />;



    </>
  );
}
