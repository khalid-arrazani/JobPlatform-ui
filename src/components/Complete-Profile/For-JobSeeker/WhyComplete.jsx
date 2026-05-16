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
      icon: <VisibilityOutlinedIcon />,
      title: "Get noticed by recruiters",
      desc: "Recruiters prefer complete profiles.",
    },

    {
      icon: <BusinessCenterTwoToneIcon />,
      title: "Unlock more job opportunities",
      desc: "Apply faster and access more jobs.",
    },

    {
      icon: <TrendingUpOutlinedIcon />,
      title: "Increase profile visibility",
      desc: "Complete profiles receive more views.",
    },
  ];

  return <>
 
   <Box sx={{width:"85%",display:"flex",flexDirection:"column",alignItems:"center"}}>
      {/* Title */}
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#111827",
          mt:'2rem',
          mb:'.5rem'

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
              gap: "0.8rem",
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                minWidth: "3rem",
                height: "3rem",

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
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "#111827e8",
                  mb: "0.2rem",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  lineHeight: 1.6,
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