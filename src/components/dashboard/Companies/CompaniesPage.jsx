import "./CompaniesPage.css";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

import { Box, Card, Avatar, Typography, Button } from "@mui/material";

export default function CompaniesPage() {
  return (
    <>
      <div class="parent">
        <div class="div1">1</div>
        <div class="div2">
<Card
  key={company.name}
  sx={{
    borderRadius: "18px",
    p: 2,
    minHeight: "170px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.3s",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
    },
  }}
>

  {/* TOP */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
    <Avatar
      src={company.image}
      sx={{ width: 45, height: 45 }}
    />

    <Box>
      <Typography variant="body1" fontWeight="bold">
        {company.name}
      </Typography>

      <Typography variant="caption" sx={{ opacity: 0.7 }}>
        {company.location}
      </Typography>
    </Box>
  </Box>

  {/* DESCRIPTION */}
  <Typography
    sx={{
      mt: 1,
      opacity: 0.75,
      fontSize: "13px",
      lineHeight: 1.4,
    }}
  >
    Explore opportunities and open positions at {company.name}.
  </Typography>

  {/* STATS */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      mt: 1,
    }}
  >
    <Typography fontWeight="bold" fontSize="13px">
      {company.jobs}
    </Typography>

    <Typography fontWeight="bold" fontSize="13px">
      {company.employees}
    </Typography>
  </Box>

  {/* BUTTON */}
  <Button
    fullWidth
    variant="contained"
    sx={{
      mt: 1.5,
      borderRadius: "10px",
      textTransform: "none",
      fontSize: "13px",
      py: 0.6,
    }}
  >
    View Jobs
  </Button>

</Card>
        </div>
        <div class="div3">3</div>
      </div>
    </>
  );
}
