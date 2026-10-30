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
            gap: 0.8,
            background: "#ffffffe3",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            transition: "0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            },

            minHeight: "8rem",
            p: 1,
            width:"95%",
            boxSizing:"border-box"
          }}
        >
          <Box sx={{height:"100%",width:"4rem"}} >
          <Box sx={{height:"4rem ",bgcolor:"#cdc0c07c",width:"4rem",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px"}} >
            <Avatar
            src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo-497x500.jpg"
            sx={{borderRadius:"5px",width:"3.5rem",height:"3.5rem"}}
            />
          </Box>
          </Box>

          {/* content */}
          <Box sx={{height:"100%",bgcolor:"#d8d8d815",flex:1}} >
            <Box
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                alignContent: "center",
                width: "90%",
                position: "relative",
              }}
            >
              <Box sx={{display:"flex",height:"fit-Content",gap:0.2}} >
                    {/* {job?.title.slice(0,60)}  {job?.title.length >= 60 ? "..." : null } */}

                    

                    <Typography sx={{fontSize:"0.8rem",fontWeight:500,color:"#080811cb"}}>Front End developer mobile , desktop , full stake dff</Typography>
                    <Chip
                    
                      icon={<AccessTimeIcon />}
                      // label={formatDistanceToNow(new Date(job.createdAt), {
                      //   addSuffix: true,
                      // })}
                      label={"4 months ago"}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: "0.6rem",
                  
                        height: "24px",
                        ml: "",fontWeight: 500,color:"#000000ab"
                      }}
                    />
                  </Box>
            </Box>

          </Box>
          
       
        </Card>
      </Box>
    </>
  );
}
