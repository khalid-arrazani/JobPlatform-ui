
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";



import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

export default function MainList(){


    return<>
    <Box
      sx={{
        width: 280,
        height: "100%",
        background: "linear-gradient(180deg, #143446 0%, #121925 100%)",
        color: "white"
      }}
      role="presentation"
  
    >
    
      {/* 🔝 Profile Section */}
      <Box
        sx={{
          textAlign: "center",
          p: 3,
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <Avatar
          src="/your-image.jpg"
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto",
            border: "2px solid #38bdf8"
          }}
        />
    
        <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
          Khalid Arrazani
        </Typography>
    
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          Frontend Developer
        </Typography>
      </Box>
    
      {/* 🧭 Navigation */}
      <List>
    
        <ListItem disablePadding>
          <ListItemButton sx={{ "&:hover": { background: "rgba(255,255,255,0.08)" } }}>
            <ListItemIcon sx={{ color: "white" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
    
        <ListItem disablePadding>
          <ListItemButton sx={{ "&:hover": { background: "rgba(255,255,255,0.08)" } }}>
            <ListItemIcon sx={{ color: "white" }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </ListItem>
    
        <ListItem disablePadding>
          <ListItemButton sx={{ "&:hover": { background: "rgba(255,255,255,0.08)" } }}>
            <ListItemIcon sx={{ color: "white" }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Account Settings" />
          </ListItemButton>
        </ListItem>
    
      </List>
    
      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
    
      {/* 🚪 Logout */}
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ "&:hover": { background: "rgba(255,0,0,0.1)" } }}>
            <ListItemIcon sx={{ color: "#f87171" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    
    </Box>
    </>
}