import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
  Stack,
} from "@mui/material";

import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

import TelegramIcon from "@mui/icons-material/Telegram";
import { millify } from "millify";
import { formatDistanceToNow } from "date-fns";
import { useJob } from "../../../logic/context/JobContext";
import { useAuth } from "../../../logic/context/AuthContext";
import { useEffect, useState } from "react";
import { toggleSaveJob } from "../../../logic/api/job/Job";

export default function CardCompany({ jobInfo, JobId }) {
  const { setSnackBar } = useAuth();

  const [jobs, setJobs] = useState();

  useEffect(() => {
    setJobs(jobInfo);
  }, [jobInfo]);

  console.log(15644, jobs);

  const saveJob = async () => {
    try {
      setJobs((prev) => ({
        ...prev,
        isSaved: !prev.isSaved,
      }));

      const savejobs = await toggleSaveJob({
        jobId: JobId,
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
        isSaved: !prev.isSaved,
      }));
    }
  };
  return (
    <>
      <Card
        sx={{
          flex: 1,
          height: "auto",

          borderRadius: "10px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#fff",
          pr: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={jobInfo?.createdBy.companyLogo.url}
            sx={{
              width: 90,
              height: 90,
              bgcolor: "#fff",
              border: "1px solid #eee",
              borderRadius: "10px",
              m: "2rem",
              p: 2,
            }}
          />

          {/* Left Side */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "solid 1px #d4d3d3",
              pl: "1.2rem",
              height: "fit-Content",
            }}
          >
            <Box>
              <Stack direction="row" spacing={1.5}>
                <Chip
                  label="Verified Company"
                  size="small"
                  sx={{
                    bgcolor: "#e8ffea",
                    color: "#238a3f",
                    fontWeight: 400,
                  }}
                />
                <Chip
                  label={`Posted ${
                    jobInfo?.createdAt
                      ? formatDistanceToNow(new Date(jobInfo.createdAt), {
                          addSuffix: true,
                        })
                      : ""
                  }`}
                  size="small"
                  sx={{
                    bgcolor: "#f2f0f0",
                    color: "#404040c5",
                    fontWeight: 400,
                  }}
                />
              </Stack>
              <Typography
                sx={{
                  fontSize: "1.7rem",
                  fontWeight: 700,
                  color: "#060505e8",
                }}
              >
                {jobInfo?.title}
              </Typography>

              <Typography
                sx={{
                  color: "#000000",
                  mt: 0.5,
                  fontSize: "0.95rem",
                  mb: 1.5,
                }}
              >
                {jobInfo?.createdBy.name} • {jobInfo?.location}
              </Typography>

              <Stack direction="row" spacing={1.5}>
                <Chip
                  label={jobInfo?.jobType}
                  size="small"
                  sx={{
                    bgcolor: "#fce8ff",
                    color: "#7C3AED",
                    fontWeight: 400,
                  }}
                />

                <Chip
                  label={`${jobInfo?.experienceLevel} Level`}
                  size="small"
                  sx={{
                    bgcolor: "#fce8ff",
                    color: "#7C3AED",
                    fontWeight: 400,
                  }}
                />
                <Chip
                  label={`${millify(jobInfo?.minSalary)} - ${millify(jobInfo?.maxSalary)} ${jobInfo?.salaryCurrency} / ${jobInfo?.salaryPeriod}`}
                  size="small"
                  sx={{
                    bgcolor: "#e9fcf1",
                    color: "#27a25e",
                    fontWeight: 500,
                    fontFamily: "-apple-system",
                  }}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
        {/* Right Side */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={
              jobs?.isSaved ? (
                <TurnedInIcon />
              ) : (
                <TurnedInNotOutlinedIcon />
              )
            }
            onClick={saveJob}
            sx={{
              borderRadius: "14px",
              textTransform: "none",
              px: 1,
              py: 1,
              borderColor: "#DDD",

              color:  jobs?.isSaved ? "#ffffff" : "#a320e5",
              background: jobs?.isSaved ? "linear-gradient(30deg, #4c078c 0%, #7c197e 35%, #440884 100%)" : "#ffffff" ,

              fontSize: "0.8rem",
            }}
          >
            Save Job
          </Button>

          <Button
            variant="contained"
            startIcon={<TelegramIcon />}
            sx={{
              borderRadius: "14px",
              textTransform: "none",
              px: 2,
              py: 1.2,
              fontWeight: 300,
            
             background:
                "linear-gradient(30deg, #4c078c 0%, #be81fa 35%, #440884 100%)",

              transition: "all 0.3s ease",

              "&:hover": {
                background: "linear-gradient(90deg, #AA6EEA 0%, #7F28E3 100%)",
              },
              fontSize: "0.8rem",
            }}
            
          >
            Apply Now
          </Button>
        </Stack>
      </Card>
    </>
  );
}
