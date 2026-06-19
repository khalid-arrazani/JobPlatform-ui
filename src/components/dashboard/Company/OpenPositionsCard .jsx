import { Card, Typography, Box } from "@mui/material";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function OpenPositionsCard() {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: "15px",
          boxSizing:"border-box",
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
        {[1, 2, 3].map((item) => (
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
              <Typography fontWeight={600}>Frontend Developer</Typography>

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
                  Remote
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#666",
                  }}
                >
                  • Full Time
                </Typography>
              </Box>
            </Box>

            <ArrowForwardIosIcon
              sx={{
                fontSize: "0.9rem",
                color: "#999",
              }}
            />
          </Box>
        ))}
      </Card>
    </>
  );
}
