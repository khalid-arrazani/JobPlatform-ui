import {
  Box,
  Typography,
  Avatar,
  Button,
  Card,
  Chip,
  Stack,
} from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useJob } from "../../../../logic/context/JobContext";

import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { toggleSaveJob } from "../../../../logic/api/job/Job";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../logic/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { millify } from "millify";

export default function JobList() {
  const { ...state } = useJob();
  const { setSnackBar } = useAuth();

  const [jobs, setJobs] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setJobs(state);
  }, [state?.JobInfo]);

  const saveJob = async (e) => {
    const jobId = e.currentTarget.dataset.id;
    try {
      setJobs((prev) => ({
        ...prev,
        JobInfo: {
          ...prev.JobInfo,
          jobs: prev.JobInfo.jobs.map((job) =>
            job._id === jobId ? { ...job, isSaved: !job.isSaved } : job,
          ),
        },
      }));

      const savejobs = await toggleSaveJob({
        jobId,
      });
      setSnackBar({
        open: true,
        message: savejobs?.message,
        severity: "success",
      });
    } catch (error) {
      setSnackBar({
        open: true,
        message: error.response?.data.message,
        severity: "error",
      });
      setJobs((prev) => ({
        ...prev,
        JobInfo: {
          ...prev.JobInfo,
          jobs: prev.JobInfo.jobs.map((job) =>
            job._id === jobId ? { ...job, isSaved: !job.isSaved } : job,
          ),
        },
      }));

      console.log(error.response?.data.message);
    }
  };

  const openJob = async (e) => {
    const jobId = e.currentTarget.dataset.id;
    navigate(`Details/${jobId}`);
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "75vh",
          marginTop: "0.5rem",
          alignItems:"center", 
        }}
        sx={{bgcolor:"#e9e8e8"}}
      >
        <Card
        
          sx={{
            display: "flex",
            gap: 1,
            background: "#ffffffe3",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            transition: "0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            },

            minHeight: "7.5rem",
            p: 1,
            width:"95%",
            boxSizing:"border-box"
          }}
        >
          <Box sx={{height:"100%",bgcolor:"#222020",width:"6rem"}} ></Box>
          
       
        </Card>
      </Box>
    </>
  );
}
