import { Box, InputBase} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
 

export default function SearchAndFilter ({ search, setSearch }) {

  
  return (
  

        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "white",
            px: 1.5,
            borderRadius: "5px",
            minWidth: "250px",
            width: "50vw",
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
