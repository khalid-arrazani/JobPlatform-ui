import { Box, InputBase, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function CompanyCard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center",height:"100%",alignItems:"center" }}>

       <Box sx={{width:"75%",m:1}}>
      <Typography variant="h4" sx={{color:"#03021bcf",fontWeight:600,fontFamily:"monospace"}}>
       Companies
      </Typography>
            <Typography variant="h7" sx={{color:"#03021ba2",fontWeight:600,fontFamily:"monospace",fontSize:"1rem"}}>
       Discover top companies and explore their open positions
      </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        
        {/* 🔍 Search */}
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
            ml:1,
            mt:1,border:"solid 1px #ddd",boxSizing:"border-box"
          }}
        >
          <SearchIcon sx={{ color: "#777" }} />

          <InputBase
            placeholder="Search companies..."
            fullWidth
            sx={{
              ml: 1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
