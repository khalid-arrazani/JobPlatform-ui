import {
  Box,
  Typography,
  Button,
  Tab,
  Tabs,
  Chip,
  TextField,
  InputAdornment,
  Autocomplete,Card,Stack
} from "@mui/material";

import { useEffect, useState } from "react";
import {
  getCompanyById,
  getmyCompany,
} from "../../../logic/api/company/Company";

import { useCompany } from "../../../logic/context/CompanyContext";

import AddIcon from "@mui/icons-material/Add";
import { Building2, Search } from "lucide-react";

export default function MyJobsPage() {
  const { dispatch, ...state } = useCompany();

  const [currentTab, setCurrentTab] = useState(0);

  const [sort, setSort] = useState("Newest First");

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
          {/* header */}
          <Box
            sx={{
              width: "100%",
              height: "26%",
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
              value={currentTab}
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
                onClick={() => setCurrentTab(0)}
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
                onClick={() => setCurrentTab(1)}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  minHeight: 64,
                }}
              />

              <Tab
                onClick={() => setCurrentTab(2)}
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
                onClick={() => setCurrentTab(3)}
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



          {/* foter */}
          <Box
            sx={{
              width: "100%",
              height: "74%",
              px: 4,
              boxSizing: "border-box",
            }}
          >


          {/* filter and search */}
            <Box
              sx={{
                width: "100%",
                height: "10%",
                my: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                size="small"
                placeholder="Search Jobs..."
                sx={{ width: "45%", borderRadius: "20px","& .MuiInputBase-root":{borderRadius:"10px"} }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search size={18} color="#64748B" />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Autocomplete
                size="small"
                sx={{ width: 220 ,"& .MuiAutocomplete-clearIndicator":{
                    display:"none"
                },"& .MuiInputBase-root":{borderRadius:"8px"}     
            
            }}
                options={["Newest First", "Oldest First"]}
                value={sort}
                onChange={(event, newValue) => {
                  setSort(newValue);
                }}
                slotProps={{
                  popper: {
                    sx: {
                      transition: "none",
                      animation: "none",
                     
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Sort by" />
                )}
              />
            </Box>


          {/* list jobs */}
          

            <Card sx={{bgcolor:"#ffffff" , height:"10rem",border:"1px solid #ddddddb9",borderRadius:"10px",display:"flex",boxSizing:"border-box",boxShadow:"none"}}>
                   
                   {/* card job left side */}
                   <Box sx={{width:"16%",height:"100%"}} ></Box>



                   {/* card job right side */}
                   <Box sx={{width:"84%",borderLeft:"solid 1px #ddd",height:"100%",p:1}}>
                      <Typography  sx={{fontSize:"1.7rem",fontWeight:600,fontFamily:"ui-monospace",color:"#02020dda"}} >Full Stack developer</Typography>
                      <Typography  sx={{fontSize:"0.8rem",fontWeight:600,fontFamily:"monospace",color:"#02020db4"}} >Marrakesh, Morocco</Typography>
                    <Stack
                  direction="row"
                  spacing={0.5}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mt: 0.5, mb: 1 }}
                >
                
                    <Chip
                      label={"Full Time"}
                      size="small"
                    
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#d8f3ff",
                        color:"#0150b7",
                        fontWeight:600

                      }}
                    />
           
            
                    <Chip
                      label={"Mid Level"}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#ffd8de",   color:"rgb(158, 64, 64)", fontWeight:600
                      }}
                    />
                    <Chip
                      label={"Hybrid"}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#f6d8ff",    color:"#72037c",fontWeight:600
                      }}
                    />
          
                </Stack>
                   </Box>
                
            </Card>

           

          





          </Box>




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
