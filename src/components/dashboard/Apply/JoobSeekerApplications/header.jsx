import { Box, Typography, TextField, Button } from "@mui/material";
import { Tab, Tabs, Chip } from "@mui/material";

import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { useState } from "react";

export default function Header() {
  const [felterData, setFelterData] = useState("All");

  return (
    <>
      <Box
        sx={{
          height: "30%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderBottom: "solid 0.1px #8d8d8d3a",
          boxSizing: "border-box",
          pt:4
        }}
      >
        <Box sx={{ width: "100%", display: "flex",justifyContent:"space-between",alignItems:"end" }}>
          {/* Left */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
              My Application
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#64748B",
                fontSize: "0.95rem",
              }}
            >
              Track the status of your job application
            </Typography>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <TextField
              placeholder="Search jobs..."
              size="small"
              sx={{
                width: 280,

                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  bgcolor: "#fff",
                  height: 40,
                },
              }}
            />

            <Button
              variant="outlined"
              size="small"
              startIcon={<TuneOutlinedIcon />}
              sx={{
                height: 45,
                px: 3,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 600,
                color: "#475569",
                borderColor: "#E2E8F0",

                "&:hover": {
                  borderColor: "#8B5CF6",
                  bgcolor: "#FAF5FF",
                },
              }}
            >
              Filters
            </Button>
          </Box>
        </Box>

        <Tabs
          value={felterData}
          onChange={(event, newValue) => {
            setFelterData(newValue);
          }}
          textColor="inherit"
          sx={{
            maxHeight: 53,
            "& .MuiTabs-indicator": {
              backgroundColor: "#5590ff",
              height: "2px",
              borderRadius: "999px",
              top: "51px",
            },
            ml: 2,
          }}
        >
          <Tab
            label="All"
            value={"All"}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
              padding: 0,
            }}
          />

          <Tab
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{fontFamily:"system-ui"}} >Pending</span>

                <Chip
                  label={1}
                  size="small"
                  sx={{ color: "#F59E0B", bgcolor: "#FEF3C7" }}
                />
              </Box>
            }
            value={"pending"}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />



          <Tab
            value={"under review"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{fontFamily:"system-ui"}} >Under review</span>

                <Chip
                  label={2}
                  size="small"
                  sx={{ color: "#3B82F6", bgcolor: "#DBEAFE" }}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />


          <Tab
            value={"accepted"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{fontFamily:"system-ui"}} >Accepted</span>

                <Chip
                  label={2}
                  size="small"
                  sx={{ color: "#10B981", bgcolor: "#D1FAE5" }}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />



          <Tab
            value={"interview"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{fontFamily:"system-ui"}} >Interview</span>

                <Chip
                  label={2}
                  size="small"
                  sx={{ color: "#10B981", bgcolor: "#D1FAE5" }}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />
          
          <Tab
            value={"rejected"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{fontFamily:"system-ui"}} >Rejected</span>
                <Chip label={3} size="small" sx={{ color: "#EF4444", bgcolor: "#FEE2E2" }} />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />
        </Tabs>
      </Box>
    </>
  );
}
