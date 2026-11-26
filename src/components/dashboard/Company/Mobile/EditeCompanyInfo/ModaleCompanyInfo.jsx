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
 

export default function ModalInfo({ open, setOpen, fetchCompany,CompanyInfo }) {
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

  const page = part == "Company Information" ? 
      <Companyinfo CompanyInfo={CompanyInfo} fetchCompany={fetchCompany} />
     : part == "Contact Information" ? 
      <ContactInfo CompanyInfo={CompanyInfo} fetchCompany={fetchCompany}   />
     : part == "Social Links" ? 
      <SocialInfo  CompanyInfo={CompanyInfo} fetchCompany={fetchCompany}  />
     : part == "Benefits" ? 
      <CompanyBenefits CompanyInfo={CompanyInfo} fetchCompany={fetchCompany}  />
     : null;
  



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
          }}
        >
          <Box sx={{width:"100%",height:"4rem",bgcolor:"#ddd",borderBottom: "solid 1px #c9c9c9c6",
              display: "flex",
              alignItems: "center",
              px: 3.5,
              boxSizing: "border-box",
              justifyContent: "space-between"}} >
           <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "#050318d2",
                fontFamily:"monospace",
              }}
            >
              Edite Company Information
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
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
