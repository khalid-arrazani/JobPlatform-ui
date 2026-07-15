import { Box, Typography, Button, Tab, Tabs, Chip } from "@mui/material";

import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { useJob } from "../../../logic/context/JobContext";

export default function Header() {
  const { felterData, setFelterData} = useJob();



  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "fit-Content",
          px: 2.5,
          boxSizing: "border-box",
          borderBottom: "solid 1px #ddd",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "6rem",
            px: 2.5,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "1.8rem",
                fontWeight: 600,
                color: "#050713ee",
              }}
            >
              My Jobs
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#6f6e6ee7",
              }}
            >
              Manage and track all the job positions you have posted.
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              gap: 1.5,
              textTransform: "none",
              flexShrink: 0,
              height: "2.3rem",
              bgcolor: "#6a36eb",
              fontSize: "0.8rem",
            }}
          >
            <AddIcon /> Post a New Job
          </Button>
        </Box>

        <Tabs
          value={felterData.status}
          onChange={(event, newValue) => {
            setFelterData((prev)=>({...prev , status :newValue ,page:1 , search:""}))
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
            label="All Jobs"
            value={""}
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
                <span>Active</span>

                <Chip
                  label="8"
                  size="small"
                  sx={{ color: "#02310e", bgcolor: "#8efb88" }}
                />
              </Box>
            }
            value={"active"}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />

          <Tab
            value={"closed"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span>Closed</span>

                <Chip
                  label="8"
                  size="small"
                  sx={{ color: "#2e2700", bgcolor: "#fbd588" }}
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
            value={"draft"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span>Draft</span>
                <Chip label="1" size="small" sx={{}} />
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
