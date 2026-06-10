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
import { useProfile } from "../../../logic/context/profileContext";
import { useJob } from "../../../logic/context/JobContext";

import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";

const jobs = [
  {
    id: 2,
    title: "Backend Engineer",
    company: "Microsoft",
    location: "Seattle, USA",
    salary: "$5,500/month",
    description:
      "Node.js and MongoDB developer to build scalable APIs and services.",
    logo: "https://cdn.pixabay.com/photo/2021/10/17/14/47/windows-7-logo-6718525_1280.png",
  },

  {
    id: 3,
    title: "UI/UX Designer",
    company: "Airbnb",
    location: "San Francisco, USA",
    salary: "$4,800/month",
    description:
      "Creative designer needed to improve user experiences across web products.",
    logo: "https://cdn.pixabay.com/photo/2018/05/08/21/28/airbnb-3384008_1280.png",
  },

  {
    id: 4,
    title: "Full Stack Developer",
    company: "Spotify",
    location: "Stockholm, Sweden",
    salary: "$6,000/month",
    description:
      "Work with React, Node.js, and cloud technologies on music platforms.",
    logo: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "Spotify",
    location: "Stockholm, Sweden",
    salary: "$6,000/month",
    description:
      "Work with React, Node.js, and cloud technologies on music platforms.",
    logo: "https://cdn.pixabay.com/photo/2018/05/08/21/29/spotify-3384019_1280.png",
  },
];
export default function JobList() {
  const { ...state } = useJob();
  console.log(state.JobInfo?.jobs);

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "77vh",
          overflow: "scroll",
          borderRadius: "1rem",

          marginTop: "0.5rem",
        }}
      >
        {state.JobInfo?.jobs.map((job) => (
          <Card
            key={job.id}
            sx={{
              display: "flex",
              gap: 1,

              background: "#ffffffe3",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              },
              mb: "0.8rem",
              mr: 1,
              alignItems: "center",
              minHeight: "9rem",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#00000029",
                height: "100%",
              }}
            >
              <Avatar
                src={job.createdBy?.companyLogo?.url}
                sx={{ width: "5rem", height: "5rem", backgroundSize: "cover" }}
              />
            </Box>

            {/* Info */}
            <Box sx={{ flex: 1, height: "100%", pt: "0.4rem" }}>
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {job?.title}
                <Button color="#fff">
                  {" "}
                  <TurnedInNotOutlinedIcon />{" "}
                </Button>
              </Typography>

              <Typography sx={{ fontSize: "0.8rem", color: "#1f1d1d" }}>
                {job?.createdBy?.companyName} • {job.location}
              </Typography>

        


              <Stack
                direction="row"
                spacing={0.5}
                flexWrap="wrap"
                useFlexGap
                sx={{ mt: 1 }}
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
              </Stack>
              <Stack
                direction="row"
                spacing={0.5}
                flexWrap="wrap"
                useFlexGap
                sx={{ mt: 1 }}
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
              

              <Typography sx={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                💰 {job.salary} / {job.salaryCurrency}
              </Typography>
            </Box>

            {/* Button
            <Button
              size="small"
              variant="contained"
              sx={{
                borderRadius: "6px",
                textTransform: "none",
                fontSize: "11.5px",
                px: 1.5,
                minWidth: "auto",
              }}
            >
              Apply
            </Button> */}
          </Card>
        ))}
      </Box>
    </>
  );
}
