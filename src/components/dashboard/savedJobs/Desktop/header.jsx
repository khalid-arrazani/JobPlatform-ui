import { Box, Typography, TextField, InputAdornment, Autocomplete } from "@mui/material";
import { Search } from "lucide-react";

export default function Header({setSearch , search,felterData,setFelterData }) {
  return (
    <>
      <Box
        sx={{
          height: "17%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "solid 0.1px #8d8d8d3a",
          boxSizing: "border-box",
        }}
      >
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
            Saved Jobs
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#64748B",
              fontSize: "0.95rem",
            }}
          >
            Jobs you've saved for later.
          </Typography>
        </Box>

        {/* Right */}
        <Box
          sx={{
            display: "flex",
            gap: 0,
            alignItems: "center",
            flexWrap: "wrap",
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
      </Box>
    </>
  );
}
