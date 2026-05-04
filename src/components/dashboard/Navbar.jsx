import { AppBar, Toolbar, Box, IconButton, Avatar, InputBase } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkIcon from '@mui/icons-material/Work';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

import logo from "../../assets/title.png"


export default function Navbar() {
  return (
    <AppBar position="static"  sx={{ background: "#376681"}}>
        
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }} style={{minHeight:"50px"}}>
        
        {/* Logo */}
        {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          NexHire
        </Typography> */}
        <img src={logo} width={"10%"} alt="" />

        {/* Search */}
        <Box
          sx={{
            background: "#ffffff",
            px: 2,
            py: 0.5,
            borderRadius: "10px",
            width: "40%",
          }}
        >
          <InputBase
            placeholder="Search jobs..."
            size="small"
            sx={{ color: "black", width: "100%" }}
          />
        </Box>

        {/* Right side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <NotificationsIcon sx={{ color: "white" }} />
          </IconButton>

          <IconButton>
            <WorkIcon sx={{ color: "white" }} />
          </IconButton> 

          <IconButton>
            <ViewHeadlineIcon sx={{ color: "white" }} />
          </IconButton>                   
          <Avatar src=""/>
        </Box>

      </Toolbar>
    </AppBar>
  );
}