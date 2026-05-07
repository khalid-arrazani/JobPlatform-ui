import MainList from "./mainList.jsx"

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkIcon from "@mui/icons-material/Work";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import * as React from "react";

import { Tabs, Tab } from "@mui/material";

import Drawer from "@mui/material/Drawer";

import logo from "../../assets/title.png";

export default function Navbar() {

  const [open, setOpen] = React.useState(false);
  const [tap, setTap] = React.useState(0);
 

  return (
    <AppBar
  position="static"
  sx={{
    background: "#376681",
    height:"8%",
    padding:"0px"
  }}

>
  <Toolbar
    sx={{
      display: "flex",
      justifyContent: "space-between",
      height: "80%"
    }}
    style={{minHeight:"100%"}}
  >


    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} width={"150"} alt="" />
    </Box>
    
  <Tabs
    value={tap}
    textColor="inherit"
      sx={{
    "& .MuiTabs-indicator": {
      backgroundColor: "#5590ff",
      height: "3px"
    }
  }}
  >
    <Tab onClick={()=>{setTap(0)}} label="Jobs" sx={{ color: "white" }} />
    <Tab onClick={()=>{setTap(1)}} label="Companies" sx={{ color: "white" }} />
  </Tabs>

    {/* ⚡ Right side */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

      <IconButton>
        <NotificationsIcon sx={{ color: "white" }} />
      </IconButton>

      <IconButton>
        <WorkIcon sx={{ color: "white" }} />
      </IconButton>

      <IconButton onClick={() => setOpen(true)}>
        <ViewHeadlineIcon sx={{ color: "white" }} />
      </IconButton>

      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
      >
        <MainList toggleDrawer={setOpen} />
      </Drawer>

      <Avatar src="" sx={{ width: 35, height: 35 }} />

    </Box>

  </Toolbar>
</AppBar>
  );
}
