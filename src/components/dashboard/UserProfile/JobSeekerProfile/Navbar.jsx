import MainList from "./mainList";

import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkIcon from "@mui/icons-material/Work";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import * as React from "react";

import Drawer from "@mui/material/Drawer";

import logo from "../../../assets/title.png";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        background: "#376681f3",
        height: "8%",
        padding: "0px",
        paddingRight: "2%",
        paddingLeft: "1.5%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "80%",
        }}
        style={{ minHeight: "100%" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} width={"130"} alt="" />
        </Box>

        {/* Right side */}
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

          <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
            <MainList toggleDrawer={setOpen} />
          </Drawer>

        </Box>
      </Toolbar>
    </AppBar>
  );
}
