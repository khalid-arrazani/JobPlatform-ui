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
import { useState } from "react";

export default function JobSeekerSettingsSidebar() {

    const [part , setPart]=useState("profile") 

    const handleProfile = ()=>{setPart("profile")}
    const handleSecurity = ()=>{setPart("security")}
    const handleSocial = ()=>{setPart("social")}
    const handleCv = ()=>{setPart("cv")}
    const handleDelete = ()=>{setPart("delete")}



  return (
    <>
       
        <List sx={{height:"100%",p:"0.5rem"}}>


          {/* Profile Information */}
          <ListItemButton
          onClick={handleProfile}
            sx={{
              borderRadius: "0.7rem",
              mb: 1,
              mt: 1,
             background :part == 'profile' ? "#fffafad5": 'none'
              
            }}
          >
            <ListItemIcon>
              <PersonIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Profile Information" />
          </ListItemButton>

          {/* Security */}
          <ListItemButton
          onClick={handleSecurity}

            sx={{
              borderRadius: "0.7rem",
              mb: 1,
              background :part == 'security' ? "#fffafad5": 'none'
            }}
          >
            <ListItemIcon>
              <SecurityIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Security" />
          </ListItemButton>

          {/* Social Links */}
          <ListItemButton
          onClick={handleSocial}

            sx={{
              borderRadius: "0.7rem",
              mb: 1,
              background :part == 'social' ? "#fffafad5": 'none'

            }}
          >
            <ListItemIcon>
              <LinkIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Social Links" />
          </ListItemButton>

          {/* CV */}
          <ListItemButton
          onClick={handleCv}

            sx={{
              borderRadius: "0.7rem",
              mb: 1,
              background :part == 'cv' ? "#fffafad5": 'none'

            }}
          >
            <ListItemIcon>
              <DescriptionIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="CV / Resume" />
          </ListItemButton>

          {/* Delete */}
          <ListItemButton
          onClick={handleDelete}

            sx={{
              borderRadius: "0.7rem",

              color: "#dc2626",

              "&:hover": {
                background: "#fef2f2",
              },
              position:"absolute",
              bottom:"2rem",
              background :part == 'delete' ? "#e2c9c9d5": 'none'

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
