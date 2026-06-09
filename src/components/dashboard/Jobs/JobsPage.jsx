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

export default function JobsPage() {
  
  const { dispatch, ...state } = useJob();
  const { setSnackBar } = useAuth();
  const [page, setPage] = useState(1);



  const handleChange = (event, value) => {
    setPage(value);
  };


  useEffect(() => {
    const fetchUser = async () => {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });

      try {
        const data = await getJobList(page);

        console.log(data);
        dispatch({
          type: "SET-JOB-LIST",
          payload: data,
        });
      } catch (error) {
        console.log(error.response?.data.message);

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
    fetchUser();
  }, [page]);


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
            <Pagination onChange={handleChange} count={state.JobInfo?.totalPages} />
          </Stack>
        </div>
      </div>
    </>
  );
}
