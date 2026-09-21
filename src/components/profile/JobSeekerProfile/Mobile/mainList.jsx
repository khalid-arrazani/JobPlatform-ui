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
import { Logout } from "../../../../logic/api/auth/auth";
import { useProfile } from "../../../../logic/context/profileContext";

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
            src="https://imgs.search.brave.com/sgSqeqpujrTJDQYBggmQDyLTjvjcKb7a4MsC7A2-fuU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vdXNlci1wcm9m/aWxlLXBuZy1wcm9m/ZXNzaW9uYWwtYnVz/aW5lc3NtYW4tc3Rp/Y2tlci10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kXzUzODc2LTEw/NDg5MjkuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw"
            sx={{
              width: 80,
              height: 80,
              margin: "0 auto",
              border: "2px solid #38bdf8",
            }}
          />

          <Typography
            variant="h6"
            sx={{ mt: 1, fontWeight: "bold", fontFamily: "monospace" }}
          >
            {state.user?.profile?.fullName} Khalid Arrazani
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {state.user?.profile?.headline}Full Stack Web Developer | React •
            MUI • Node.js • MongoDB • GSAP
          </Typography>
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
