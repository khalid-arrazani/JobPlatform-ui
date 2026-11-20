import {
  Autocomplete,
  Box,
  InputAdornment,
  Pagination,
  TextField,
} from "@mui/material";

import ListJobsSaved from "./ListJobsSaved";

import { useEffect, useState } from "react";

import LoadingList from "./LoadingList";
import { getSavedJobs } from "../../../../logic/api/job/Job";
import { Search } from "lucide-react";

export default function Footer() {

  const [felterData, setFelterData] = useState({
    search: "",
    sort: "Newest First",
    page: 1,
  });


  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFelterData((prev) => {
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


 const [savedJobs, setSavedJobs] = useState();
  const [loading, setLoading] = useState(false);

   const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
    SavedJobs();
  }, []);

  
  useEffect(() => {
    SavedJobs();
  }, [felterData]);

  const SavedJobs = async () => {
    setLoading(true);
    try {
      const SavedJobs = await getSavedJobs(felterData);
      setSavedJobs(SavedJobs);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          flex: 1,
          bgcolor: "#fff",
          pb: "6rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 0.5,
          boxSizing: "border-box",overflow:"auto"
        }}
      >
        {/* filter and search */}
        <Box
          sx={{
            width: "100%",
            my: 1,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: 0.5,
            
          }}
        >
          <TextField
            size="small"
            onChange={(e) => {
               setSearch(e.target.value)
            }}
            fullWidth
            value={search}
            placeholder="Search Jobs..."
            sx={{
              borderRadius: "20px",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                fontFamily: "monospace",
              },
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
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                fontFamily: "monospace",
              },
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

        {loading ? (
          <LoadingList />
        ) : (
          <ListJobsSaved savedJobs={savedJobs} handleChange={handleChange} />
        )}

        <Pagination
          onChange={handleChange}
          count={savedJobs?.totalPages}
          page={felterData.page}
          sx={{
            mt: "auto",
            alignSelf: "center",
            mb: 0.5,
          }}
        />
      </Box>
    </>
  );
}
