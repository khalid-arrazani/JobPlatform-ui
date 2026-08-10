import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
  Stack,
  Modal,
} from "@mui/material";

import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

import TelegramIcon from "@mui/icons-material/Telegram";
import CheckIcon from "@mui/icons-material/Check";
import { millify } from "millify";
import { formatDistanceToNow } from "date-fns";

import { useAuth } from "../../../logic/context/AuthContext";
import { useEffect, useState } from "react";
import { toggleSaveJob } from "../../../logic/api/job/Job";
import {
  ApplyForAJob,
  CancelApplyForAJob,
} from "../../../logic/api/apply/Apply.jsx";

 
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { Badge } from "@mui/material";

import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function CardCompany({ jobInfo, JobId, fetchJobById }) {
  const { setSnackBar } = useAuth();

  const [jobs, setJobs] = useState();
  const navigate = useNavigate();
  const [openCancelApply, setOpenCancelApply] = useState(false);

 

  useEffect(() => {
    setJobs(jobInfo);
  }, [jobInfo]);

  const saveJob = async () => {
    try {
      const savejobs = await toggleSaveJob({
        jobId: JobId,
      });

      fetchJobById();

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
    }
  };

  const apply = async () => {
    try {
      const frontdata = { Company: jobInfo?.createdBy?._id };

      const applyjobs = await ApplyForAJob({ JobId, frontdata });

      setSnackBar({
        open: true,
        message: applyjobs?.message,
        severity: "success",
      });

      fetchJobById();
    } catch (error) {
      console.log(error.response);
      setSnackBar({
        open: true,
        message: error.response?.data.message,
        severity: "error",
      });
    }
  };

  const CancelApplication = async () => {
    try {
      const applyjobs = await CancelApplyForAJob(JobId);

      setSnackBar({
        open: true,
        message: applyjobs?.message,
        severity: "success",
      });
      setOpenCancelApply(false)
      fetchJobById();
    } catch (error) {
      console.log(error.response);
      setSnackBar({
        open: true,
        message: error.response?.data.message,
        severity: "error",
      });
    }
  };

  function handleCloose() {
    setOpenCancelApply(false)
  }

  const openCompany = async (e) => {
    const companyId = e.currentTarget.dataset.id;
    navigate(`/Dashboard/Company/${companyId}`);
  };

  return (
    <>
      <Modal
        open={openCancelApply}
        onClose={handleCloose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          sx={{
            width: "28rem",
            height: "18rem",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ height: "75%", width: "100%" ,display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",gap:1 ,boxSizing: "border-box", }}>


            <Box sx={{p:2.5,bgcolor:"#ffd5d5",width:"fit-Content",borderRadius:"50%",textAlign:"center"}} >
            <Badge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <ErrorRoundedIcon
                  sx={{
                    color: "#ef4444",
                    bgcolor: "#ffffff66",
                    borderRadius: "50%",
                    fontSize: 30,
                  }}
                />
              }
            >
              
              <RiDeleteBinLine  style={{fontSize: 60, color: "#ef4444",}}/>
            </Badge></Box>

            <Typography sx={{textAlign:"center",fontWeight:600}}>Cancel Application?</Typography>
            <Typography sx={{textAlign:"center",width:"85%",fontSize:"0.8rem"}}>Are you sure you want to cancel your application for this job? Thid action cannot be undone.</Typography>





          </Box>

          <Box
            sx={{
              height: "25%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              boxSizing: "border-box",
              px: 2,
              borderTop: "solid 1px #ddd",
              alignItems: "center",
            }}
          >
            <Button
             onClick={()=>setOpenCancelApply(false)}
              sx={{
                height: "70%",
                textTransform: "none",
                color: "#080616cf",
                border: "solid 1px #08041d53",
                fontFamily: "system-ui",
                fontWeight: 400,
              }}
            >
              Keep Application
            </Button>
            <Button
             onClick={CancelApplication}
              sx={{
                height: "70%",
                textTransform: "none",
                color: "#ffffff",
                bgcolor: "#bf0000c6",
                fontFamily: "system-ui",
                fontWeight: 400,
              }}
            >
              Yes, Cancel Application
            </Button>
          </Box>
        </Card>
      </Modal>
      
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
          data-id={jobInfo?.createdBy?._id}
             onClick={openCompany}
            src={jobInfo?.createdBy.companyLogo.url}
            sx={{
              width: 90,
              height: 90,
              bgcolor: "#fff",
              border: "1px solid #eee",
              borderRadius: "10px",
              m: "2rem",
              p: 2,
              cursor:"pointer",
              transition:".2s",
              
              ":active":{bgcolor: "#ececec",}
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
              jobs?.isSaved ? <TurnedInIcon /> : <TurnedInNotOutlinedIcon />
            }
            onClick={saveJob}
            sx={{
              borderRadius: "14px",
              textTransform: "none",
              px: 1,
              py: 1,
              borderColor: "#DDD",

              color: jobs?.isSaved ? "#ffffff" : "#a320e5",
              background: jobs?.isSaved
                ? "linear-gradient(30deg, #7100dbaa 0%, #a11aa4c1 35%, #8a2feb 100%)"
                : "#ffffff",

              fontSize: "0.8rem",
            }}
          >
            Save Job
          </Button>



          {jobs?.isApply ? (
            <Button
              variant="contained"
              onClick={()=>setOpenCancelApply(true)}
              startIcon={<CheckIcon />}
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
                  background:
                    "linear-gradient(90deg, #AA6EEA 0%, #7F28E3 100%)",
                },
                fontSize: "0.8rem",
              }}
            >
              Applied
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={apply}
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
                  background:
                    "linear-gradient(90deg, #AA6EEA 0%, #7F28E3 100%)",
                },
                fontSize: "0.8rem",
              }}
            >
              Apply Now
            </Button>
          )}
        </Stack>
      </Card>
    </>
  );
}
