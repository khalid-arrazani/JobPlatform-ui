import { Typography, Box, IconButton, Modal } from "@mui/material";

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

import {
  TextField,
  MenuItem,
  InputAdornment,
  Autocomplete,
} from "@mui/material";

import {
  Building2,
  Mail,
  Phone,
  Globe,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import { Share2, Gift } from "lucide-react";
import Companyinfo from "./CompanyInformation";

import DeleteIcon from "@mui/icons-material/Delete";

export default function ModalInfo({ open, setOpen, fetchCompany }) {
  const [reload, setReload] = useState(false);
  const { setSnackBar } = useAuth();

  const [part, setPart] = useState("Company Information");

  const companyEditSections = [
    {
      id: 1,
      title: "Company Information",
      icon: Building2,
      background: part == "Company Information" ? "#3131312a" : "none",
    },
    {
      id: 2,
      title: "Contact Information",
      background: part == "Contact Information" ? "#3131312a" : "none",
      icon: Mail,
    },
    {
      id: 3,
      title: "Social Links",
      background: part == "Social Links" ? "#3131312a" : "none",
      icon: Share2,
    },
    {
      id: 4,
      title: "Benefits",
      background: part == "Benefits" ? "#3131312a" : "none",
      icon: Gift,
    },
  ];

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
                {companyEditSections.map((section) => {
                  const Icon = section.icon;

                  return (
                    <ListItemButton
                      key={section.id}
                      onClick={() => {
                        setPart(section.title);
                      }}
                      sx={{
                        borderRadius: "0.7rem",
                        mb: 1,
                        mt: 1,
                        background: section.background,
                      }}
                    >
                      <ListItemIcon>
                        <Icon style={{ color: "#4f46e5" }} />
                      </ListItemIcon>

                      <ListItemText primary={section.title} />
                    </ListItemButton>
                  );
                })}
                <Divider />

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

                  <ListItemText primary="Delete Company" />
                </ListItemButton>
              </List>
            </Box>

            <Box
              sx={{
                width: "70%",
                height: "100%",
                px: 3,
                boxSizing: "border-box",
              }}
            >
              <Companyinfo />
            </Box>
            
          </Box>
        </Box>
      </Modal>
    </>
  );
}
