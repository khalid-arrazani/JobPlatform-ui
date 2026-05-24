import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from "@mui/icons-material/Link";

import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function RecruiterSettingsSidebar({setTap}) {

    const [part , setPart]=useState("profile") 
    setTap(part)
    const handleProfile = ()=>{setPart("profile")}
    const handleSecurity = ()=>{setPart("security")}
    const handleSocial = ()=>{setPart("social")}
    const handlecompany = ()=>{setPart("company")}
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
             background :part == 'profile' ? "#3131312a": 'none'
              
            }}
          >
            <ListItemIcon>
              <PersonIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Profile Information" />
          </ListItemButton>

           {/* Company Information */}
          <ListItemButton
          onClick={handlecompany}
            sx={{
              borderRadius: "0.7rem",
              mb: 1,
              mt: 1,
             background :part == 'company' ? "#3131312a": 'none'
              
            }}
          >
            <ListItemIcon>
              <BusinessIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Company Information" />
          </ListItemButton>

          {/* Security */}
          <ListItemButton
          onClick={handleSecurity}

            sx={{
              borderRadius: "0.7rem",
              mb: 1,
              background :part == 'security' ? "#3131312a": 'none'
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
              background :part == 'social' ? "#3131312a": 'none'

            }}
          >
            <ListItemIcon>
              <LinkIcon sx={{ color: "#4f46e5" }} />
            </ListItemIcon>

            <ListItemText primary="Social Links" />
          </ListItemButton>
          <Divider></Divider>
         
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
