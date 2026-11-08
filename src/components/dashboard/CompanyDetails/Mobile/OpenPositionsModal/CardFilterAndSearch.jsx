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
            width: "90%",
            border: "solid 1px #ddd",
            boxSizing: "border-box",
          }}
        >



         

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
              fontFamily:"monospace"
            }}
          />
        </Box>





  );
}
