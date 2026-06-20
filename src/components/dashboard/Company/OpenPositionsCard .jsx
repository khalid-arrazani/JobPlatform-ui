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
            <Typography  sx={{fontFamily:"initial",color:"#090909d8" ,fontSize:"1.2rem"}}>Open Positions</Typography>
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
          <Card
            key={item}
            sx={{
              boxSizing:"border-box",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1.5,
              px:1.5,
              borderBottom: item !== 3 ? "1px solid #f0f0f0" : "none",
              width:"100%"

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

            <Box
              sx={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Chip
                  size="small"
                  sx={{
                    fontSize: "0.7rem",
                    borderRadius: "3px",
                    color: "#04b630",
                    bgcolor: "#e9fdef",
                  }}
                  label={item.employmentType}
                />

                <Chip
                  size="small"
                  sx={{
                    fontSize: "0.7rem",
                    borderRadius: "3px",
                    color:
                      item.workMode === "Remote"
                        ? "#1976d2"
                        : item.workMode === "On-site"
                          ? "#d32f2f"
                        : item.workMode === "Hybrid"
                          ? "#9c27b0"  

                          : "#555",

                    bgcolor:
                      item.workMode === "Remote"
                        ? "rgba(25, 118, 210, 0.1)"
                        : item.workMode === "On-site"
                          ? "rgba(211, 47, 47, 0.1)"
                          : item.workMode === "Hybrid"
                          ? "rgba(156,39,176,0.1)"

                          : "rgba(0,0,0,0.05)",
                  }}
                  label={item.workMode}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Chip size="small" label={item.postedAt} sx={{ fontSize: "0.7rem",borderRadius:"5px" }}>
                
                </Chip>

                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "0.9rem",
                    color: "#999",
                  }}
                />
              </Box>
            </Box>
          </Card>
        ))}
      </Card>
    </>
  );
}
