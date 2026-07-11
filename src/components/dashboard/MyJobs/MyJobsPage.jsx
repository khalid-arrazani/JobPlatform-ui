import { Box, Typography, Button, Tab, Tabs, Chip } from "@mui/material";

import { useEffect, useState } from "react";
import {
  getCompanyById,
  getmyCompany,
} from "../../../logic/api/company/Company";

import { useCompany } from "../../../logic/context/CompanyContext";

import AddIcon from "@mui/icons-material/Add";

export default function MyJobsPage() {
  const { dispatch, ...state } = useCompany();

  const [currentTab, setCurrentTab] = useState();

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const data = await getmyCompany();

      dispatch({
        type: "SETCOMPANY",
        payload: data,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "93%",
          width: "100vw",
          bgcolor: "#f2f2f5",
          boxSizing: "border-box",

          pt: 3,
          px: 2,
          overflow: "auto",
          display: "flex",
          gap: 1.5,
        }}
      >
        {/* left side */}
        <Box
          sx={{
            width: "75%",
            height: "100%",
            bgcolor: "#ffffff",
            boxSizing: "border-box",
            overflow: "hidden",
            borderRadius: "10px 10px 0px 0px",
            pt: 1,
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
                sx={{ fontSize: "1.8rem", fontWeight: 600, color: "#050713ee" }}
              >
                My Jobs
              </Typography>
              <Typography
                sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#6f6e6ee7" }}
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
            value={currentTab}
            textColor="inherit"
            sx={{
              minHeight: 64,
              "& .MuiTabs-indicator": {
                backgroundColor: "#5590ff",
                height: "2px",
                borderRadius: "999px",
                top: "51px",
              },
              ml:2
            }}
          >
            <Tab
              label="All Jobs"
              onClick={()=>setCurrentTab(0)}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                minHeight: 64,
                padding: 0,
              }}
            />

            <Tab
              label={
                <Box sx={{display:"flex",gap:1,alignItems:"center"}}>
                  <span>Active</span>

                  <Chip label="8" size="small" sx={{color:"#02310e",bgcolor:"#8efb88"}} />
                </Box>
              }
              onClick={()=>setCurrentTab(1)}

              sx={{
                textTransform: "none",
                fontWeight: 600,
                minHeight: 64,
              }}
            />

            <Tab
              onClick={()=>setCurrentTab(2)}
               
              label={
                <Box sx={{display:"flex",gap:1,alignItems:"center"}}>
                  <span>Closed</span>

                  <Chip label="8" size="small" sx={{color:"#2e2700",bgcolor:"#fbd588"}} />
                </Box>
              }
              sx={{
                textTransform: "none",
                fontWeight: 600,
                minHeight: 64,
              }}
            />
            <Tab
              onClick={()=>setCurrentTab(3)}
              
              label={
                <Box sx={{display:"flex",gap:1,alignItems:"center"}}>
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

        {/* right side */}

        <Box
          sx={{
            width: "25%",
            height: "100%",
            bgcolor: "#ddd",
            borderRadius: "10px 10px 0px 0px",
          }}
        ></Box>
      </Box>
    </>
  );
}
