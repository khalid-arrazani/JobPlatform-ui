import {
  Typography,
  Box,
  IconButton,
  Button,
  Modal,
  CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAuth } from "../../../../logic/context/AuthContext";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessIcon from "@mui/icons-material/Business";
import LinkIcon from "@mui/icons-material/Link";

import DeleteIcon from "@mui/icons-material/Delete";

export default function ModalInfo({ open, setOpen, fetchCompany }) {
  const [reload, setReload] = useState(false);
  const { setSnackBar } = useAuth();

  const [part, setPart] = useState("profile");

  const handleProfile = () => {
    setPart("profile");
  };
  const handleSecurity = () => {
    setPart("security");
  };
  const handleSocial = () => {
    setPart("social");
  };
  const handlecompany = () => {
    setPart("company");
  };
  const handleDelete = () => {
    setPart("delete");
  };
  // const DeleteCompanyBanner = async () => {
  //     setReload(true)
  //       try {
  //         const res = await deleteCompanyBnner();

  //         setSnackBar({
  //           open: true,
  //           message: res?.message,
  //           severity: "success",
  //         });

  //         fetchCompany();

  //         setOpen(false);

  //       } catch (error) {
  //         console.log(error?.response?.data);
  //         setSnackBar({
  //           open: true,
  //           message: error?.response?.data?.message,
  //           severity: "error",
  //         });
  //       }finally{
  //         setReload(false)
  //       }
  //     };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "95%",
            width: "95%",
            bgcolor: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
            outline: "none",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "10%",
              bgcolor: "#eeecec",
              borderBottom: "solid 1px #c9c9c9c6",
              display: "flex",
              alignItems: "center",
              px: 3.5,
              boxSizing: "border-box",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#050318d2",
                fontFamily: "system-ui",
              }}
            >
              Edite Company Information
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "90%",
              bgcolor: "#eeecec",
              display: "flex",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "30%",
                height: "100%",
                borderRight: "solid 1px #c9c9c9c6",
              }}
            >
              <List sx={{ height: "100%", p: "0.5rem" }}>
                {/* Profile Information */}
                <ListItemButton
                  onClick={handleProfile}
                  sx={{
                    borderRadius: "0.7rem",
                    mb: 1,
                    mt: 1,
                    background: part == "profile" ? "#3131312a" : "none",
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
                    background: part == "company" ? "#3131312a" : "none",
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
                    background: part == "security" ? "#3131312a" : "none",
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
                    background: part == "social" ? "#3131312a" : "none",
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
                    position: "absolute",
                    bottom: "2rem",
                    background: part == "delete" ? "#e2c9c9d5" : "none",
                  }}
                >
                  <ListItemIcon>
                    <DeleteIcon sx={{ color: "#dc2626" }} />
                  </ListItemIcon>

                  <ListItemText primary="Delete Account" />
                </ListItemButton>
              </List>
            </Box>

            <Box sx={{ width: "70%", height: "100%" }}></Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
