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

const CompanyInfo = () => {
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
        p: 2,
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: 600 }}
      >
        Company Information
      </Typography>

      {info.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py: 1.5,
            }}
          >
            <Box
              sx={{
                color: "text.secondary",
                mr: 1.5,
                display: "flex",
                alignItems: "center",
              }}
            >
              {item.icon}
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ width: 120 }}
            >
              {item.label}
            </Typography>

            <Typography
              variant="body2"
              fontWeight={500}
            >
              {item.value}
            </Typography>
          </Box>

          {index !== info.length - 1 && <Divider />}
        </Box>
      ))}
    </Card>
  );
};

export default CompanyInfo;