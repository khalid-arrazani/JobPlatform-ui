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
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useProfile } from "../../../../logic/context/profileContext";
import { Logout } from "../../../../logic/api/auth/auth";
 

export default function MainList() {
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

        <Box>
          
        </Box>





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
