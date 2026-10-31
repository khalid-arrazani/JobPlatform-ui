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
          alignItems: "center",
          gap:6
        }}
        sx={{ bgcolor: "#e9e8e8",overflow:"auto" }}
      >


         {jobs?.JobInfo?.jobs.map((job) => (
           <Card
           key={job._id}
          sx={{
            display: "flex",
            gap: 0.8,
            background: "#ffffffe3",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            transition: "0.2s",
            minHeight: "8rem",
            p: 1,
            width: "95%",
            boxSizing: "border-box",
            height:"auto"
          }}
        >
          <Box sx={{ height: "100%", width: "4rem" }}>
           
              <Avatar
                src={job.createdBy?.companyLogo?.url}
                sx={{ borderRadius: "5px", width: "3.5rem", height: "3.5rem",border :"1px dashed #c5c5c5" }}
              />
      
          </Box>

          {/* content */}
          <Box
            sx={{
              bgcolor: "#d8d8d815",
              flex: 1,
              position: "relative",
              height:"auto"
            }}
          >
            <Box
              sx={{ display: "flex",
                alignContent: "center",
                width: "90%",
                position: "relative",
                flexDirection:"column"
              }}
            >
              <Box sx={{ display: "flex", height: "fit-Content", gap: 0.5 }}>
               
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#080811aa",
                    fontFamily: "ui-sans-serif",
                  }}
                >
         
                   {job?.title.slice(0,60)}  {job?.title.length >= 60 ? "..." : null }
                </Typography>
                <Chip
                  // label={formatDistanceToNow(new Date(job.createdAt), {
                  //   addSuffix: true,
                  // })}
                  label={"4 months ago"}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: "0.6rem",
                    height: "22px",
                    fontWeight: 500,
                    color: "#000000ab",
                    borderRadius:"5px",fontFamily:""
                  }}
                />
              </Box>
              
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    fontFamily: "monospace",
                    color: "#02020db4",
                  }}
                >
                  {/* {job?.createdBy?.name} • {job?.location} */}
                  NexHire • Taroudant - Morocco
                </Typography>

                <Stack
                  direction="row"
                  spacing={0.8}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mt: 0.5, mb:0 }}
                >
                
                    <Chip
                      label={"Full-time"}
                      size="small"
                      color="primary"
                      sx={{
                        fontSize: "0.7rem",
                        height: "20px",
                        borderRadius:"5px"
                      }}
                    />

                    <Chip
                      label={"Remote"}
                      size="small"
                      sx={{
                         fontSize: "0.7rem",
                        height: "20px",
                        borderRadius:"5px",
                        bgcolor: "#f6d8ff",
                      }}
                    />
               
                </Stack>

                <Stack
                  direction="row"
                  spacing={0.5}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mt: 0.7 }}
                >
   
                    <Chip
                      label={"JavaScript"}
                      size="small"
                      sx={{
                         fontSize: "0.7rem",
                        height: "20px",
                        borderRadius:"5px"
                      }}
                    />  <Chip
                    
                      label={"Node.Js"}
                      size="small"
                      sx={{
                         fontSize: "0.7rem",
                        height: "20px",
                        borderRadius:"5px"
                      }}
                    /> 
                    <Chip
                    
                      label={"Node.Js"}
                      size="small"
                      sx={{
                         fontSize: "0.7rem",
                        height: "20px",
                        borderRadius:"5px"
                      }}
                    /> 
 
                </Stack>

                <Box sx={{ mt:0.8 }}>
                  <Chip
                    label={`1.2M-124K/USD`}
                    size="small"
                    sx={{
                      fontSize: "0.7rem",
                        height: "20px",
                        borderRadius:"5px",
                      bgcolor: "#c4e6d2",
                      color: "#289e5d",
                      fontWeight: 400,
                    
                      
                    }}
                  />
                </Box>
            </Box>
            <Button
              sx={{
                position: "absolute",
                top: "0.2rem",
                right: "0rem",
                textTransform: "none",
                borderRadius: "10px",
                fontWeight: 500,
                fontSize: "0.6rem",
                transition: "all 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(25, 118, 210, 0.35)",
                },
                minWidth: "5px",
                p: 0,
              }}
            >
              <TurnedInIcon sx={{ color: "#1976d2" }} />
            </Button>

            <Button
              variant="contained"
              // data-id={job._id}
              onClick={openJob}
              sx={{
                position: "absolute",
                bottom: "0rem",
                right: "0rem",
                textTransform: "none",
                borderRadius: "3px",
                px: 0.5,
                py: 0.3,
                fontWeight: 500,
                fontSize: "0.7rem",
                transition: "all 0.2s ease",
                fontFamily:"monospace"
              }}
            >
              Open position
            </Button>
          </Box>
        </Card>
        ))}
        


      </Box>
    </>
  );
}
