import { Box, TextField, InputAdornment, Autocomplete } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Search } from "lucide-react";
 
 
import { useEffect, useState } from "react";

import NoJobsYet from "./emptyList/NoJobsYet";
import NoActiveJobsYet from "./emptyList/NoActiveJobsYet";
import NoClosedJobsYet from "./emptyList/NoClosedJobsYet";
import NoDraftsJobsYet from "./emptyList/NoDraftsJobsYet";
import NoSearchResults from "./emptyList/NoSearchResults ";
import SkeletonJobs from "./SkeletonJobs";
import CardJobs from "./CardJobs";
import { useJob } from "../../../../logic/context/JobContext";



export default function Footer() {
  
  const [search, setSearch] = useState("");
  const {myJobsLoading, felterData, setFelterData, ...state } = useJob();

  

  const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
  const timeout = setTimeout(() => {
    setFelterData(prev => {
      if (prev.search === search) return prev;

      return {
        ...prev,
        search,
        page: 1,
      };
    });
  }, 500);

  return () => clearTimeout(timeout);
}, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };


  const page = myJobsLoading ? (
    <SkeletonJobs />
  ) :!state.MyJobs?.hasJobs ? (
    <NoJobsYet />
  ) : state.MyJobs?.jobs.length === 0 && search ? (
    <NoSearchResults />
  ) : felterData.status === "active" && state.MyJobs?.jobs.length === 0 ? (
    <NoActiveJobsYet />
  ) : felterData.status === "closed" && state.MyJobs?.jobs.length === 0 ? (
    <NoClosedJobsYet />
  ) : felterData.status === "draft" && state.MyJobs?.jobs.length === 0 ? (
    <NoDraftsJobsYet />
  ): <CardJobs />

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "74%",
         
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          px:1
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "1px",
            },

            "&::-webkit-scrollbar-thumb": {
              background: "#a1a2d87f",
              borderRadius: "20px",
            },
            display:"flex",
            flexDirection:"column",boxSizing:"border-box",pb:"2.5rem"
            

            
          }}
        >
          {/* filter and search */}
          <Box
            sx={{
              width: "100%",
            
              my: 1, display: "flex",
              justifyContent: "space-between",
              flexDirection:"column",gap:0.5
            }}
          >
            <TextField
              size="small"
              onChange={(e) => {
                handleSearch(e);
              }}
              fullWidth
              value={search}
              placeholder="Search Jobs..."
              sx={{
                 
                borderRadius: "20px",
                "& .MuiInputBase-root": { borderRadius: "8px",fontFamily:"monospace" }
              }}
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
              fullWidth
              sx={{
                
                "& .MuiAutocomplete-clearIndicator": {
                  display: "none",
                },
                "& .MuiInputBase-root": { borderRadius: "8px",fontFamily:"monospace" }
              }}
              options={["Newest First", "Oldest First"]}
              value={felterData.sort}
              onChange={(event, newValue) => {
                setFelterData((prev) => ({ ...prev, sort: newValue }));
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

          <Box
          sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1,alignItems:"center"}}
          
          >
          {page}
          

        <Pagination
            onChange={handleChange}
            page={felterData.page}
            count={state?.MyJobs?.totalPages}
            sx={{mb:"0.6rem"}}
          />
          
          </Box>
        </Box>

        
          
     
      </Box>
    </>
  );
}
