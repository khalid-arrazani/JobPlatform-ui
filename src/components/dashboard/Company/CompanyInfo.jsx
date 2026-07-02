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
    founded: "1998",
    size: "190K+",
    industry: "Technology, Information & Internet",
    headquarters: "Mountain View, California, USA",
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
    <Card
      sx={{
        mt: 2,
        p: 2,
        borderRadius: "20px",
        border: "1px solid #eef2f7",
        background:
          "linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          fontWeight: 600,
          color: "#111827d5",
          fontFamily:"-apple-system",
          letterSpacing: "-0.3px",
          display:"flex",
          alignItems:"center",
          gap:1
        }}
      >
        <Building2 color="#3091ff"/>
        Company Information
      </Typography>

      {info.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py: 1,
              px: 1,
              borderRadius: "14px",
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
                width: 42,
                height: 42,
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
                flexShrink: 0,
                boxShadow: "0 8px 16px rgba(37,99,235,.2)",
              }}
            >
              {item.icon}
            </Box>

            {/* Text */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#64748b",
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                {item.label}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color: "#0f172a",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  fontFamily: "Inter, sans-serif",
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
    </Card>
  );
};

export default CompanyInfo;