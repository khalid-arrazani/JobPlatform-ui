import {

  Box,
  Typography,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export default function WhyCompleteProfileCard() {
  const benefits = [
    {
      icon:  <BusinessCenterTwoToneIcon />,
      title: "Post jobs faster",
      desc: "A complete profile enables you to publish jobs quickly",
    },

    {
      icon: <VisibilityOutlinedIcon />,
      title: "Attract better candidates",
      desc: "Top talent prefers transparent companies",
    },

    {
      icon: <TrendingUpOutlinedIcon />,
      title: "Build trust",
      desc: "A complete company profile builds credibility and trust",
    },
  ];

  return <>
 
   <Box sx={{width:"85%",display:"flex",flexDirection:"column",alignItems:"center"}}>
      {/* Title */}
      <Typography
        sx={{
          fontSize: "0.9rem",
          fontWeight: 700,
          color: "#111827e7",
          mt:'2rem',
          mb:'1rem',
          width:"100%",
          paddingLeft:"3rem"

        }}
      >
        Why Complete Your Profile?
      </Typography>

      {/* Items */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {benefits.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              width:"100%"
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                minWidth: "3rem",
                height: "2.5rem",

                borderRadius: "0.9rem",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background: "#f3f0ff",
                color: "#5b21b6",

                "& svg": {
                  fontSize: "1.4rem",
                },
              }}
            >
              {item.icon}
            </Box>

            {/* Text */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#111827e8",
                  mb: "0.2rem",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "#6b7280",
                  lineHeight:1,
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
 </Box>
 </>
}