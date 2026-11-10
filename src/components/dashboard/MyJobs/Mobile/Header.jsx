import { Box, Typography, Button, Tab, Tabs, Chip } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useJob } from "../../../../logic/context/JobContext";

export default function Header() {
  const { setOpenModal, felterData, setFelterData, ...state } = useJob();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "fit-Content",

          boxSizing: "border-box",
          borderBottom: "solid 1px #ddd",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "6rem",
            px: 1.3,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box  sx={{display:"flex",justifyContent:"space-between",mb:1}} >
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "#050713c3",
                  fontFamily:"monospace"
                }}
              >
                My Jobs
              </Typography>
              <Button

                variant="contained"
                onClick={() => setOpenModal(true)}
                sx={{
                  gap: .5,
                  textTransform: "none",
                  flexShrink: 0,
                  height: "2.3rem",
                  bgcolor: "#6a36eb",
                  fontSize: "0.8rem",
                  fontFamily:"unset",px:0.8
                }}
              >
                <AddIcon /> Post a New Job
              </Button>
            </Box>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#6f6e6ee7",
                fontFamily:"monospace"
              }}
            >
              Manage and track all the job positions you have posted.
            </Typography>
          </Box>
        </Box>

        <Tabs
          value={felterData.status}
          onChange={(event, newValue) => {
            setFelterData((prev) => ({
              ...prev,
              status: newValue,
              page: 1,
              search: "",
            }));
          }}
          textColor="inherit"
          
          sx={{
            maxHeight: 53,
            "& .MuiTabs-indicator": {
              backgroundColor: "#5590ff",
              height: "2px",
              top: "51px", 
            },
            width:"100%",p:0,
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
              fontSize:"0.8rem",fontFamily:'monospace',p:0
            }}
          />

          <Tab
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span >Active</span>

                <Chip
                  label={state?.MyJobs?.countActive || 0}
                  size="small"
                  sx={{ color: "#02310e", bgcolor: "#8efb88" }}
                />
              </Box>
            }
            value={"active"}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,fontSize:"0.8rem",fontFamily:'monospace',p:0
            }}
          />

          <Tab
            value={"closed"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span>Closed</span>

                <Chip
                  label={state?.MyJobs?.countClosed || 0}
                  size="small"
                  sx={{ color: "#2e2700", bgcolor: "#fbd588" }}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,fontSize:"0.8rem",fontFamily:'monospace',p:0
            }}
          />

          <Tab
            value={"draft"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span>Draft</span>
                <Chip
                  label={state?.MyJobs?.countDraft || 0}
                  size="small"
                  sx={{}}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,fontSize:"0.8rem",fontFamily:'monospace',p:0
            }}
          />

        </Tabs>
      </Box>
    </>
  );
}
