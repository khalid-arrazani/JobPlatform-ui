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

export default function JobList() {
  const { ...state } = useJob();


  const saveJob = async (e) => {

    console.log(e.currentTarget.dataset.id);

    try {
      
      const savejobs = await toggleSaveJob({
        jobId: e.currentTarget.dataset.id,
      });
      console.log(savejobs);
    } catch (error) {
      console.log(error.response?.data.message);
    }
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
        {state.JobInfo?.jobs.map((job) => (
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
                <Box>
                  {job?.title}
                  <Chip
                    icon={<AccessTimeIcon />}
                    label={formatDistanceToNow(new Date(job.createdAt), {
                      addSuffix: true,
                    })}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: "0.7rem",
                      height: "24px",
                      ml: "0.5rem",
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
              </Typography>

              <Typography sx={{ fontSize: "0.8rem", color: "#1f1d1d" }}>
                {job?.createdBy?.companyName} • {job.location}
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

              <Typography sx={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                💰 {job.salary} / {job.salaryCurrency}
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  position: "relative",
                  top: "-2.5rem",
                  right: "-71%",

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
