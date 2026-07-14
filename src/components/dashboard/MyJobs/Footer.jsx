import {
  Box,
  TextField,
  InputAdornment,
  Autocomplete,

} from "@mui/material";

import { useState } from "react";



import { Search } from "lucide-react";
import CardJobs from "./ListJobs";

export default function Footer({fetchCompany}) {
  const [sort, setSort] = useState("Newest First");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "74%",
          px: 4,
          boxSizing: "border-box",
          overflow:"auto"
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
        <CardJobs fetchCompany={fetchCompany} />

    
      </Box>
    </>
  );
}
