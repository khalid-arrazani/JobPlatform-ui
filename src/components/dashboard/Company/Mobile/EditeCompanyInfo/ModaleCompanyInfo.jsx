import { Typography, Box, IconButton, Modal } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import { Building2, Mail } from "lucide-react";

import { Share2, Gift } from "lucide-react";
import Companyinfo from "./CompanyInformation";

import DeleteIcon from "@mui/icons-material/Delete";
import ContactInfo from "./ContactInformation";
import SocialInfo from "./SocialLinks";
import CompanyBenefits from "./CompanyBenefits";
import { useAuth } from "../../../../../logic/context/AuthContext";
import { useCompany } from "../../../../../logic/context/CompanyContext";

export default function ModalInfo({
  open,
  setOpen,
  fetchCompany,
  CompanyInfo,
}) {
  const [reload, setReload] = useState(false);
  const { setSnackBar } = useAuth();
  const { part, setPart } = useCompany();

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

  const handleClose = () => {
    setOpen(false);
  };

  const page =
    part == "Company Information" ? (
      <Companyinfo CompanyInfo={CompanyInfo} fetchCompany={fetchCompany} />
    ) : part == "Contact Information" ? (
      <ContactInfo CompanyInfo={CompanyInfo} fetchCompany={fetchCompany} />
    ) : part == "Social Links" ? (
      <SocialInfo CompanyInfo={CompanyInfo} fetchCompany={fetchCompany} />
    ) : part == "Benefits" ? (
      <CompanyBenefits CompanyInfo={CompanyInfo} fetchCompany={fetchCompany} />
    ) : null;

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
            height: "100%",
            width: "100%",
            bgcolor: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
            outline: "none",
            display:"flex",flexDirection:"column"
          }}
        >
          {/* header */}
          <Box
            sx={{
              width: "100%",
              height: "4rem",

              borderBottom: "solid 1px #e6e5e5c8",
              display: "flex",
              alignItems: "center",
              px: 1.5,
              boxSizing: "border-box",
              justifyContent: "space-between",
            }}
          >
            <Box  sx={{
              
              height: "4rem",

              display: "flex",
              alignItems: "center",
          
              boxSizing: "border-box",
              justifyContent: "space-between",
              gap:1
            }}>

              <IconButton sx={{borderRadius:"10px",bgcolor:"#f5edfbaa"}}>
              <svg
                id="Text-Align-Right--Streamline-Carbon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                height="30"
                width="30"
              >
                
                <defs></defs>
                <title>align--right</title>
                <path d="M3 3h7v1H3Z" fill="#7215cf" stroke-width="0.5"></path>
                <path d="M5 6h5v1H5Z" fill="#7215cf" stroke-width="0.5"></path>
                <path d="M3 9h7v1H3Z" fill="#7215cf" stroke-width="0.5"></path>
                <path d="M5 12h5v1H5Z" fill="#7215cf" stroke-width="0.5"></path>
                <path
                  d="M12 2h1v12h-1Z"
                  fill="#1501aa"
                  stroke-width="0.5"
                ></path>
                <path
                  id="_Transparent_Rectangle_"
                  d="M0 0h16v16H0Z"
                  fill="none"
                  stroke-width="0.5"
                ></path>
              </svg>
              </IconButton>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#050318d2",
                  fontFamily: "monospace",
                }}
              >
                Edite Company Information
              </Typography>
            </Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>


          {/* content */}
          <Box  sx={{width:"100%",flex:1,bgcolor:"#ddd"}}  >

          </Box>



          {/* bottom */}
          <Box
            sx={{
              width: "100%",
              height: "4rem",
              borderTop: "solid 1px #e6e5e5c8",
              display: "flex",
              alignItems: "center",
              px: 1.5,
              boxSizing: "border-box",
              justifyContent: "space-between",
            }}
          >
            

              
          </Box>

          {/* <Box
            sx={{
              width: "100%",
              height: "10%",
              bgcolor: "#fff",
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
          </Box> */}
        </Box>
      </Modal>
    </>
  );
}
