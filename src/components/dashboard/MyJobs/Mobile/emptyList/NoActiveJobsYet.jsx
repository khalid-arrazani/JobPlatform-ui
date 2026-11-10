import { Box, Typography } from "@mui/material";

export default function NoActiveJobsYet() {
  return (
    <>
      <Box
        sx={{
          border: "dashed 1px #ddd",
          width: "95%",
          height: "80%",
          placeSelf: "center",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          bgcolor: "#fff9f891",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "2rem",
            color: "#010214ce",
            fontFamily: "ui-rounded",
          }}
        >
          No active jobs
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "#5f5f5fd6",
            fontFamily: "ui-rounded",
          }}
        >
          You don't have any active job listings.
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "#5f5f5fd6",
            fontFamily: "ui-rounded",
          }}
        >
          Drafts and closed jobs are available in their tabs.
        </Typography>
      </Box>
    </>
  );
}
