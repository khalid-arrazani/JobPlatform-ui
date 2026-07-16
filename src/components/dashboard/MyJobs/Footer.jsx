import { Box, TextField, InputAdornment, Autocomplete } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Search } from "lucide-react";
import CardJobs from "./ListJobs";
import { useJob } from "../../../logic/context/JobContext";
import { useEffect, useState } from "react";

import NoJobsYet from "./emptyList/NoJobsYet";
import NoActiveJobsYet from "./emptyList/NoActiveJobsYet";
import NoClosedJobsYet from "./emptyList/NoClosedJobsYet";
import NoDraftsJobsYet from "./emptyList/NoDraftsJobsYet";

export default function Footer() {
  const [search, setSearch] = useState("");
  const { fetchCompany, felterData, setFelterData, ...state } = useJob();

  const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
  const timeout = setTimeout(() => {
    setFelterData((prev) => ({
      ...prev,
      search,
    }));
  }, 500);

  return () => clearTimeout(timeout);
}, [search]);


const handleSearch = (e) => {
  setSearch(e.target.value);
};

  console.log(felterData);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "74%",
          px: 4,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
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

            pr: 2,
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
              onChange={(e) => {
                handleSearch(e);
              }}
              value={search}
              placeholder="Search Jobs..."
              sx={{
                width: "45%",
                borderRadius: "20px",
                "& .MuiInputBase-root": { borderRadius: "10px" },
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
              sx={{
                width: 220,
                "& .MuiAutocomplete-clearIndicator": {
                  display: "none",
                },
                "& .MuiInputBase-root": { borderRadius: "8px" },
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




          <NoDraftsJobsYet/>

          {/* list jobs */}   
          <CardJobs fetchCompany={fetchCompany} />
        </Box>

        <Stack sx={{ placeSelf: "center", my: 2 }} spacing={2}>
          <Pagination
            onChange={handleChange}
            page={felterData.page}
            count={state?.MyJobs?.totalPages}
          />
        </Stack>
      </Box>
    </>
  );
}
