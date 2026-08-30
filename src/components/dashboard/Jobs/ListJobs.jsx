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
import { useJob } from "../../../logic/context/JobContext";

import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { toggleSaveJob } from "../../../logic/api/job/Job";
import { useEffect, useState } from "react";
import { useAuth } from "../../../logic/context/AuthContext";
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
          height: "77vh",
          overflow: "scroll",
          marginTop: "0.5rem",
        }}
      >
        {jobs?.JobInfo?.jobs.map((job) => (
          <Card
            key={job._id}
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
              mb: "0.8rem",
              mr: 1,
              alignItems: "center",
              minHeight: "9.5rem",
              p: 1,
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#00000000",
                height: "100%",
                borderRight: "solid 1px #84848438",
              }}
            >
              <Avatar
                src={job.createdBy?.companyLogo?.url}
                sx={{
                  width: "5rem",
                  height: "5rem",
                  backgroundSize: "cover",
                  background: "#00000014",
                  borderRadius: "10px",
                  p: 2,
                }}
              />
            </Box>

            {/* Info */}

            <Box
              sx={{
                flex: 1,
                height: "100%",
                display: "flex",
                alignContent: "center",
                width: "80%",
                position: "relative",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    fontSize: "1.3rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    fontWeight: 600,
                    fontFamily: "ui-monospace",
                    alignItems:"center"
                  }}
                >
                  <Box sx={{display:"flex",alignItems:"end",height:"fit-Content"}} >
                    {job?.title.slice(0,60)}  {job?.title.length >= 60 ? "..." : null }
                    <Chip
                    
                      icon={<AccessTimeIcon />}
                      label={formatDistanceToNow(new Date(job.createdAt), {
                        addSuffix: true,
                      })}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: "0.7rem",
                    fontFamily: "monospace",
                        height: "24px",
                        ml: "1rem",fontWeight: 600,
                      }}
                    />
                  </Box>

                  <Button data-id={job._id} onClick={saveJob}>
                    {job.isSaved ? (
                      <TurnedInIcon sx={{ color: "#1976d2" }} />
                    ) : (
                      <TurnedInNotOutlinedIcon />
                    )}
                  </Button>
                </Box>

                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    fontFamily: "monospace",
                    color: "#02020db4",
                  }}
                >
                  {job?.createdBy?.name} • {job?.location}
                </Typography>

                <Stack
                  direction="row"
                  spacing={0.5}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mt: 0.5, mb: 1 }}
                >
                  {job.jobType && (
                    <Chip
                      label={job.jobType}
                      size="small"
                      color="primary"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                      }}
                    />
                  )}
                  {job.workMode && (
                    <Chip
                      label={job.workMode}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#f6d8ff",
                      }}
                    />
                  )}
                </Stack>
                <Stack
                  direction="row"
                  spacing={0.5}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mt: 1, mb: 0.5 }}
                >
                  {job.skills?.slice(0, 3).map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                      }}
                    />
                  ))}
                </Stack>

                <Box sx={{ mt: 1 }}>
                  <Chip
                    label={` ${millify(job.maxSalary)} - ${millify(job.minSalary)} / ${job.salaryCurrency}`}
                    size="small"
                    sx={{
                      fontSize: "0.7rem",
                      height: "22px",
                      bgcolor: "#c4e6d2",
                      color: "#289e5d",
                      fontWeight: 400,
                      py: 1.5,
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Box>

              <Button
                variant="contained"
                data-id={job._id}
                onClick={openJob}
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",

                  textTransform: "none",
                  borderRadius: "10px",
                  px: 2,
                  py: 0.8,
                  fontWeight: 600,
                  fontSize: "0.8rem",

                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(25, 118, 210, 0.35)",
                  },
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
