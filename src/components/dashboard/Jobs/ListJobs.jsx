import { Box, Typography, Avatar, Button, Card } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { useProfile } from "../../../logic/context/profileContext";
import { useJob } from "../../../logic/context/JobContext";

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
      <div
        style={{
          maxHeight: "100%",
          paddingTop: "0.8%",
          display: "flex",
          flexDirection: "column",

          flex: 1,
          height: "70vh",
        }}
      >
        {state.JobInfo?.jobs.map((job) => (
          <Card
            key={job.id}
            sx={{
              display: "flex",
              gap: 1,
              p: 1,
              background: "#ffffffe3",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              transition: "0.2s",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              },
              m: 0.5,
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Avatar
              src={job.createdBy?.companyLogo?.url}
              sx={{ width: "4rem", height: "4rem", backgroundSize: "cover" }}
            />

            {/* Info */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                {job?.title}
              </Typography>

              <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
                {job?.createdBy?.companyName} • {job.location}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#777",
                  mt: 0.2,
                  textWrap: "wrap",
                }}
                noWrap
              >
                {job.description.split(" ").slice(0, 15).join(" ")}
              </Typography>

              <Typography
                sx={{ mt: 0.2, fontWeight: "bold", fontSize: "0.7rem" }}
              >
                💰 {job.salary} / {job.salaryCurrency}
              </Typography>
            </Box>

            {/* Button */}
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
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
