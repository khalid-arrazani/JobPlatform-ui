import "./JobPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import JobList from "./ListJobs.jsx";
import CardAds from "./cardAds.jsx";
import CardProfile from "./CardProfile.jsx";

import { useEffect, useState } from "react";
import { getJobList } from "../../../logic/api/job/Job.jsx";
import { useJob } from "../../../logic/context/JobContext.jsx";
import { useAuth } from "../../../logic/context/AuthContext.jsx";
import SearchInput from "./searchInput.jsx";
import LoadingList from "./LoadingList.jsx";
import { useProfile } from "../../../logic/context/profileContext.jsx";

export default function JobsPage() {
  const { dispatch : dispatch1, ...state1 } = useProfile();
  const { dispatch, ...state } = useJob();



  const { setSnackBar } = useAuth();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const fetchJob = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    try {
      const data = await getJobList(page);

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
  }, [page]);



  useEffect(()=>{
    dispatch1({
        type: "RELOADLISTJOB",
        payload: false,
      });
      fetchJob();
  },[state1.reloadListJob])


 

  return (
    <>
      <div className="Jobsparent">
        <div className="Jobsdiv1">
          <CardProfile></CardProfile>
        </div>

        <div className="Jobsdiv2">
          <SearchInput />

          {state.isLoading ? <LoadingList /> : <JobList />}
        </div>

        <div className="Jobsdiv3">
          <CardAds />
        </div>

        <div className="Jobsdiv4">
          <Stack spacing={2}>
            <Pagination
              onChange={handleChange}
              count={state.JobInfo?.totalPages}
            />
          </Stack>
        </div>
      </div>
    </>
  );
}
