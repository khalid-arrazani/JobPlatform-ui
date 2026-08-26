import { Box, InputBase, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
 

export default function SearchAndFilter ({ search, setSearch }) {
  
  return (
  
    

   
        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "white",
            px: 2,
            py: 0.5,
            borderRadius: "12px",
            minWidth: "250px",
            width: "50vw",
            ml: 1,
            mt: 1,
            border: "solid 1px #ddd",
            boxSizing: "border-box",
          }}
        >
          {/* 🔍 Search */}

          <SearchIcon sx={{ color: "#777" }} />

          <InputBase
          value={search}
            onChange={(e) => {

              setSearch(e.target.value);

            }}
            placeholder="Search companies..."
            fullWidth
            sx={{
              ml: 1,
            }}
          />
        </Box>





  );
}
