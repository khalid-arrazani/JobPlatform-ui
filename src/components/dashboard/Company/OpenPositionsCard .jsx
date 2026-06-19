import { Card, Typography, Box, Chip } from "@mui/material";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const postedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    employmentType: "Full Time",
    workMode: "Remote",
    location: "Berlin, Germany",
    salary: "$70k - $90k",
    postedAt: "2 days ago",
  },
  {
    id: 2,
    title: "Senior React Developer",
    employmentType: "Full Time",
    workMode: "Hybrid",
    location: "London, UK",
    salary: "$90k - $120k",
    postedAt: "5 hours ago",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    employmentType: "Part Time",
    workMode: "Remote",
    location: "Paris, France",
    salary: "$40k - $60k",
    postedAt: "1 week ago",
  },
  {
    id: 4,
    title: "Backend Engineer",
    employmentType: "Full Time",
    workMode: "On-site",
    location: "Toronto, Canada",
    salary: "$85k - $110k",
    postedAt: "3 days ago",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    employmentType: "Contract",
    workMode: "Hybrid",
    location: "Amsterdam, Netherlands",
    salary: "$80k - $100k",
    postedAt: "12 hours ago",
  },
];
export default function OpenPositionsCard() {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: "15px",
          boxSizing: "border-box",
          p: 2.5,
          mt: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <WorkOutlineOutlinedIcon color="primary" />
            <Typography fontWeight={600}>Open Positions</Typography>
          </Box>

          <Typography
            sx={{
              color: "primary.main",
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            View all jobs
          </Typography>
        </Box>

        {/* Job Item */}
        {postedJobs.slice(0, 3).map((item) => (
          <Box
            key={item}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1.5,
              borderBottom: item !== 3 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <Box>
              <Typography fontWeight={600}> {item.title} </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 0.5,
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{ fontSize: "0.9rem", color: "#666" }}
                />

                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#666",
                  }}
                >
                  {item.location}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex",gap:2 }}>

              <Chip size="small" sx={{fontSize:"0.7rem",borderRadius:"5px"}} label={item.employmentType} />

              
              <Chip size="small" sx={{fontSize:"0.7rem",borderRadius:"5px"}} label={item.workMode} />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems:"center",
                gap:2
              }}
            >

              <Typography sx={{fontSize:"0.7rem"}}>{item.postedAt}</Typography>

              <ArrowForwardIosIcon
                sx={{
                  fontSize: "0.9rem",
                  color: "#999",
                }}
              />

            </Box>
          </Box>
        ))}
      </Card>
    </>
  );
}
