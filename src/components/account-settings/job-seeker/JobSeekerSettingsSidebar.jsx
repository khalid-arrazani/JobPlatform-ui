import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";

export default function JobSeekerSettingsSidebar() {
  return (
    <>
       
        <List sx={{height:"100%",p:"0.5rem"}}>
          {/* Profile Information */}

          <ListItemButton
            sx={{
              borderRadius: "0.7rem",
              mb: 1,
              mt: 1,
            }}
          >
            <ListItemIcon>
              <PersonIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Profile Information" />
          </ListItemButton>

          {/* Security */}
          <ListItemButton
            sx={{
              borderRadius: "0.7rem",
              mb: 1,
            }}
          >
            <ListItemIcon>
              <SecurityIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Security" />
          </ListItemButton>

          {/* Social Links */}
          <ListItemButton
            sx={{
              borderRadius: "0.7rem",
              mb: 1,
            }}
          >
            <ListItemIcon>
              <LinkIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Social Links" />
          </ListItemButton>

          {/* CV */}
          <ListItemButton
            sx={{
              borderRadius: "0.7rem",
              mb: 1,
            }}
          >
            <ListItemIcon>
              <DescriptionIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="CV / Resume" />
          </ListItemButton>

          {/* Delete */}
          <ListItemButton
            sx={{
              borderRadius: "0.7rem",

              color: "#dc2626",

              "&:hover": {
                background: "#fef2f2",
              },
              position:"absolute",
              bottom:"2rem"
            }}
          >
            <ListItemIcon >
              <DeleteIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>

            <ListItemText primary="Delete Account" />
          </ListItemButton>
        </List>
       
    </>
  );
}
