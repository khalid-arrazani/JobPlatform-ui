import {
  Card,
  Box,
  Typography,
  Divider,
} from "@mui/material";

import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { Building2 } from 'lucide-react';

const CompanyInfo = ( {CompanyInfo}) => {

  const company = {
    founded: CompanyInfo?.foundedYear,
    size: CompanyInfo?.companySize,
    industry: CompanyInfo?.industry,
    headquarters: CompanyInfo?.headquarters,
  };

  const info = [
    {
      icon: <EventOutlinedIcon fontSize="small" />,
      label: "Founded",
      value: company.founded,
    },
    {
      icon: <GroupsOutlinedIcon fontSize="small" />,
      label: "Company Size",
      value: company.size,
    },
    {
      icon: <BusinessCenterOutlinedIcon fontSize="small" />,
      label: "Industry",
      value: company.industry,
    },
    {
      icon: <LocationOnOutlinedIcon fontSize="small" />,
      label: "Headquarters",
      value: company.headquarters,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "10px",
        p: 1.5,
        boxSizing: "border-box",
        bgcolor: "#fff",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: "8px" }}>

      <Building2 color="#3091ff" size={"1.2rem"}/>
      <Typography
        variant="h6"
          sx={{
            fontWeight: 600,
            fontFamily: "monospace",
            color: "#0c031fb2",
            fontSize: "1rem",
          }}
      >
        
        Company Information
      </Typography></Box>

      {info.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py:0.5,
              px: 0.5,
        
              transition: "all .25s ease",
              "&:hover": {
                bgcolor: "#f8fafc",
                transform: "translateX(4px)",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "4px",
                background:
                  "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1.5,
                flexShrink: 0,
                boxShadow: "0 8px 16px rgba(37,99,235,.2)",
              }}
            >
              {item.icon}
            </Box>

            {/* Text */}
            <Box sx={{ flex: 1 }}>
              <Typography
                
                sx={{
                  color: "#455265",
                  fontWeight: 600,
                  fontFamily: "monospace",
           
                  fontSize:"0.88rem"
                 
                }}
              >
                {item.label}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color: "#0f172a",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  fontFamily: "monospace",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>

          {index !== info.length - 1 && (
            <Divider
              sx={{
                borderColor: "#f1f5f9",
                my: 0.5,
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default CompanyInfo;