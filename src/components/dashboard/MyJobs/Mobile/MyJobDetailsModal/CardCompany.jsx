import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
  Stack,

} from "@mui/material";


import TelegramIcon from "@mui/icons-material/Telegram";
import CheckIcon from "@mui/icons-material/Check";
import { millify } from "millify";
import { formatDistanceToNow } from "date-fns";

import { useEffect, useState } from "react";


export default function CardCompany({ jobInfo, JobId}) {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    setJobs(jobInfo);
  }, [jobInfo]);

  const saveJob = async () => {};
 

  return (
    <>
    
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: "fit-content",
            width: "93%",
            borderRadius: "10px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#fff",
            boxSizing: "border-box",
            flexDirection: "column",
            px: ".5rem",
            py: "0.5rem",
          }}
        >
          <Box
            sx={{ width: "100%", height: "auto", display: "flex", gap: 1 }}
          >
            {/* avatar */}
            <Box
              sx={{
                width: "5rem",
                height: "5rem",
                border: "#ddd 1px solid",
                borderRadius: "10px",
                boxSizing: "border-box",
                p: 0.5,
              }}
            >
              <Avatar
                data-id={jobInfo?.createdBy?._id}
               
                src={jobInfo?.createdBy.companyLogo.url}
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "#fff",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: ".2s",

                  ":active": { bgcolor: "#ececec" },
                }}
              />
            </Box>

            {/* info */}
            <Box sx={{display:"flex", height: "auto", flex: 1,flexDirection:"column",justifyContent:"space-between",}}>
              <Stack direction="row" spacing={0.5}>
                <Chip
                  
                  label="Verified Company"
                  size="small"
                  sx={{
                    bgcolor: "#e5fee7",
                    color: "#238a3f",
                    fontWeight: 400,
                    fontSize: "0.68rem",
                    borderRadius: "4px",
                    py:0.3,
                    fontFamily:"monospace",height:"fit-content"
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
                    fontSize: "0.68rem",
                    borderRadius: "4px",py:0.3,
                    fontFamily:"monospace",height:"fit-content"
                  }}
                />
              </Stack>
              <Typography
              title={jobInfo?.title}
                sx={{
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#060505dc",
                  fontFamily:"monospace",ml:"1px"
                }}
              >
                {jobInfo?.title.slice(0,45)}
                 
                {jobInfo?.title.length > 30 ? "..." : null}
              </Typography>

              <Typography
                sx={{
                  color: "#000000ad",
                  fontSize: "0.68rem",
                  fontFamily:"monospace",ml:"1px"
                  
                }}
              >
                {jobInfo?.createdBy.name} • {jobInfo?.location}
              </Typography>

              <Stack direction="row" spacing={0.5}>
                <Chip
                  label={jobInfo?.jobType}
                  size="small"
                  sx={{
                    bgcolor: "#fce8ff",
                    color: "#7C3AED",
                  fontSize: "0.5rem",
                    fontWeight: 400,
                    height:"fit-content",py:0.2,borderRadius:"4px",fontFamily:"monospace"
                  }}
                />

                <Chip
                  label={`${jobInfo?.experienceLevel} Level`}
                  size="small"
                  sx={{
                    bgcolor: "#fce8ff",
                  fontSize: "0.5rem",
                    color: "#7C3AED",
                    fontWeight: 400,
                    height:"fit-content",py:0.2,borderRadius:"4px",fontFamily:"monospace"
                  }}
                />
                <Chip
                  label={`${millify(jobInfo?.minSalary)}-${millify(jobInfo?.maxSalary)} ${jobInfo?.salaryCurrency}/${jobInfo?.salaryPeriod}`}
                  size="small"
                  sx={{
                    bgcolor: "#e9fcf1",
                    color: "#27a25e",
                    fontWeight: 400,
                  fontSize: "0.5rem",
                    height:"fit-content",py:0.2,borderRadius:"4px",fontFamily:"monospace"
                    
                  }}
                />
              </Stack>

            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "auto",

              display: "flex",
              boxSizing: "border-box",
              py: "7px",
              gap: 2,
            
            }}
          >
            <Button
              variant="outlined"
              startIcon={
                jobs?.isSaved ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    id="Bookmark--Streamline-Flex-Gradient"
                    height="15"
                    width="15"
                  >
                    <desc>
                      Bookmark Streamline Icon: https://streamlinehq.com
                    </desc>
                    <g id="bookmark--bookmarks-tags-favorite">
                      <path
                        id="Union"
                        fill="url(#paint0_linear_9371_4837)"
                        fill-rule="evenodd"
                        d="M7 0C5.66863 0 4.57402.174092 3.54903.337112l-.19118.030355C2.42972.514329 1.69765 1.2865 1.64329 2.2505c-.19888 3.52659-.19073 6.91466.02442 10.4524.0415.6824.59483 1.3932 1.43199 1.2873C4.40881 13.8245 5.73417 13.045 7 12.219c1.26583.826 2.59119 1.6055 3.9003 1.7712.8372.1059 1.3905-.6049 1.432-1.2873.2151-3.53774.2233-6.92581.0244-10.4524-.0543-.964-.7864-1.736171-1.7145-1.883033L10.451.337113C9.42598.174092 8.33137 0 7 0Z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_9371_4837"
                        x1="3.298"
                        x2="13.06"
                        y1="2.692"
                        y2="6.942"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#f3eded"></stop>
                        <stop offset="1" stop-color="#fdfafdf5"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    id="Bookmark--Streamline-Flex"
                    height="15"
                    width="15"
                  >
                    <desc>
                      Bookmark Streamline Icon: https://streamlinehq.com
                    </desc>
                    <g id="bookmark--bookmarks-tags-favorite">
                      <path
                        id="Vector"
                        stroke="#a320e5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.6602 12.0852c-0.0333 0.4656 -0.5926 0.6832 -0.9318 0.3626L7.68702 9.57254c-0.38549 -0.36444 -0.98847 -0.36444 -1.37396 -0.00001L3.2717 12.4478c-0.33917 0.3206 -0.89853 0.103 -0.93178 -0.3626v0c-0.22596 -3.16338 -0.23549 -6.33579 -0.04779 -9.49964C2.35374 1.54721 3.22321 0.75 4.26338 0.75H9.7367c1.0402 0 1.9096 0.79721 1.9712 1.83556 0.1878 3.16385 0.1782 6.33626 -0.0477 9.49964v0Z"
                        stroke-width="1"
                      ></path>
                    </g>
                  </svg>
                )
              }
              onClick={saveJob}
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                px: 2,
                borderColor: "#DDD",
                color: jobs?.isSaved ? "#ffffff" : "#a320e5",
                background: jobs?.isSaved
                  ? "linear-gradient(30deg, #7100dbaa 0%, #a11aa4c1 35%, #8a2feb 100%)"
                  : "#ffffff",
                fontSize: "0.7rem",
                flex: 1,
                fontFamily: "monospace",
                height:"fit-content"
              }}
            >
              Save Job
            </Button>

            {jobs?.isApply ? (
              <Button
                variant="contained"
                
                startIcon={<CheckIcon />}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  px: 2,

                  fontWeight: 300,

                  background:
                    "linear-gradient(30deg, #4c078c 0%, #be81fa 35%, #440884 100%)",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #AA6EEA 0%, #7F28E3 100%)",
                  },
                  fontSize: "0.7rem",
                  flex: 1,
                  fontFamily: "monospace",
                height:"fit-content"

                }}
              >
                Applied
              </Button>
            ) : (
              <Button
                variant="contained"
           
                startIcon={<TelegramIcon />}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  px: 2,

                  fontWeight: 300,

                  background:
                    "linear-gradient(30deg, #4c078c 0%, #be81fa 35%, #440884 100%)",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #AA6EEA 0%, #7F28E3 100%)",
                  },
                  fontSize: "0.7rem",
                  flex: 1,
                  fontFamily: "monospace",
                height:"fit-content"

                }}
              >
                Apply Now
              </Button>
            )}
          </Box>
        </Card>
      </Box>
    </>
  );
}
