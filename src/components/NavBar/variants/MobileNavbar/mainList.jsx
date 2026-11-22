import { useNavigate } from "react-router-dom";
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  CircularProgress,
} from "@mui/material";

import { Tabs, Tab } from "@mui/material";
import Drawer from "@mui/material/Drawer";

import Badge from "@mui/material/Badge";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AddIcon from "@mui/icons-material/Add";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import WorkIcon from "@mui/icons-material/Work";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import logoTitle from "../../../../assets/Logo/logo.png";
import { useState } from "react";

import { useLocation } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useProfile } from "../../../../logic/context/profileContext";
import { Logout } from "../../../../logic/api/auth/auth";
import { useAuth } from "../../../../logic/context/AuthContext";

export default function MainList({ onClose }) {
  const navigate = useNavigate();
  const { ...state } = useProfile();

  const handleLogout = async () => {
    try {
      const data = await Logout();
      console.log(data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const { ...authState } = useAuth();
  return (
    <>
      <Box
        sx={{
          width: 280,
          height: "100%",
          background: "linear-gradient(180deg, #57073d95 0%, #64129ab9 100%)",
          color: "white",
        }}
        role="presentation"
      >
        {/* Profile Section */}
        <Box
          sx={{
            textAlign: "center",
            p: 3,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Avatar
            src={state.user?.profile?.ProfileImage?.url}
            sx={{
              width: 90,
              height: 90,
              margin: "0 auto",
              border: "2px solid #7b8489",
            }}
          />

          <Typography
            variant="h6"
            sx={{ mt: 1, fontWeight: "bold", fontFamily: "monospace" }}
          >
            {state.user?.profile?.fullName}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {state.user?.profile?.headline}
          </Typography>
        </Box>

        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/Dashboard/Saved");
                onClose();
              }}
              sx={{ "&:hover": { background: "rgba(255,255,255,0.08)" } }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 10"
                  id="Bookmark--Streamline-Micro"
                  height="20"
                  width="20"
                >
                  <desc>
                    Bookmark Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    fill="#f1f1f1"
                    d="M7.5 0h-5A1.5 1.5 0 0 0 1 1.5v8a0.5 0.5 0 0 0 0.791 0.407l3.064 -2.189a0.249 0.249 0 0 1 0.29 0l3.064 2.189A0.5 0.5 0 0 0 9 9.5v-8A1.5 1.5 0 0 0 7.5 0"
                    stroke-width="1"
                  ></path>
                </svg>
              </ListItemIcon>

              <Typography sx={{ fontFamily: "monospace", fontSize: "1.3rem" }}>
                Save Jobs
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            {authState.user?.user?.role == "recruiter" ? (
              <IconButton
                onClick={() => navigate("/Dashboard/My_Company")}
                sx={{
                  borderRadius: "5px",
                  height: "fit-content",
                  alignSelf: "center",
                  fontSize: 13,
                  gap: 0.5,
                  border: "solid 1px #3f024142",
                  fontFamily: "-apple-system",
                }}
                style={{ position: "relative", right: "-3rem" }}
              >
                {state.isLoading ? (
                  <CircularProgress
                    color="success"
                    aria-label="Loading…"
                    sx={{ mx: 3 }}
                  />
                ) : !state?.user?.hasCompany ? (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Badge
                      overlap="circular"
                      sx={{ mr: 0.5 }}
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <AddIcon
                          sx={{
                            fontSize: 9,
                            bgcolor: "#1976d2",
                            color: "white",
                            borderRadius: "10px",
                            p: 0.2,
                          }}
                        />
                      }
                    >
                      <BusinessOutlinedIcon />
                    </Badge>
                    add Company
                  </Box>
                ) : (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <BusinessOutlinedIcon />
                    <Typography
                      sx={{
                        color: "#ffff",
                        fontWeight: 500,
                        fontFamily: "monospace",
                      }}
                    >
                      {state.user.profile.company.name}{" "}
                    </Typography>
                  </Box>
                )}
              </IconButton>
            ) : null}
          </ListItem>
        </List>

        {/*  Navigation */}
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate("/")}
              sx={{ "&:hover": { background: "rgba(255,255,255,0.08)" } }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <HomeIcon />
              </ListItemIcon>

              <Typography sx={{ fontFamily: "monospace", fontSize: "1.3rem" }}>
                Home
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate("/profile")}
              sx={{ "&:hover": { background: "rgba(255,255,255,0.08)" } }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <PersonIcon />
              </ListItemIcon>

              <Typography sx={{ fontFamily: "monospace", fontSize: "1.3rem" }}>
                My Profile
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate("/AccountSettings")}
              sx={{ "&:hover": { background: "rgba(255,255,255,0.08)" } }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <SettingsIcon />
              </ListItemIcon>

              <Typography sx={{ fontFamily: "monospace", fontSize: "1.3rem" }}>
                Account Settings
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />

        {/*  Logout */}
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              sx={{ "&:hover": { background: "rgba(255,0,0,0.1)" } }}
            >
              <ListItemIcon sx={{ color: "#f87171" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
