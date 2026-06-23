import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  Heart,
  Briefcase,
  Clock3,
  TrendingUp,
  Plus,
  Mail,
  Phone,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { FaLinkedin, FaFacebook, FaXTwitter , FaInstagram } from "react-icons/fa6";

const benefits = [
  {
    title: "Health Insurance",
    icon: <Heart color="#EF4444" />,
    bg: "#FEF2F2",
  },
  {
    title: "Remote Work",
    icon: <Briefcase size={25} color="#06B6D4" />,
    bg: "#ECFEFF",
  },
  {
    title: "Flexible Hours",
    icon: <Clock3 size={25} color="#4F46E5" />,
    bg: "#EEF2FF",
  },
  {
    title: "Career Growth",
    icon: <TrendingUp size={25} color="#F59E0B" />,
    bg: "#FEF3C7",
  },
];

export default function MoreInfo() {
  return (
    <>
      <Box
        sx={{
          height: "70%",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          gap: 2,
        }}
      >
        {/* Benefits */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            borderRadius: "15px",
            border: "solid 0.5px #b3b0b069",
            boxSizing: "border-box",
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#020314d2",
              fontFamily: "ui-serif",
            }}
          >
            Company Benefits
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#06051cb7",
              mb: 3,
            }}
          >
            Add benefits your company offers
          </Typography>

          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 3,
            }}
          >
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                sx={{
                  boxSizing: "border-box",
                  width: "7.8rem",
                  height: "7.5rem",
                  px: 1.8,
                  py: 1.5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "14px",
                  border: "1px solid #b8b8b89b",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(39, 38, 38, 0)",
                  transition: "0.5s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 10px rgba(15, 23, 42, 0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "2.2rem",
                    height: "2.2rem",
                    p: "0.7rem",
                    borderRadius: "12px",
                    bgcolor: benefit.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                  }}
                >
                  {benefit.icon}
                </Box>

                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#06051cd1",
                  }}
                >
                  {benefit.title}
                </Typography>
              </Card>
            ))}
          </Box>

          <Button
            variant="outlined"
            sx={{ borderStyle: "dashed" }}
            startIcon={<Plus size={16} />}
          >
            Add Benefit
          </Button>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            borderRadius: "15px",
            border: "solid 0.5px #b3b0b069",
            boxSizing: "border-box",
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#020314d2",
              fontFamily: "ui-serif",
            }}
          >
            Social Links (optional)
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#06051cb7",
              mb: 3,
            }}
          >
            Add benefits your company social media profiles
          </Typography>
          <Box sx={{width:"100%",  display:"flex",flexDirection:"column", flex:1,gap:2.5}}>

          

          {/* LinkedIn */}
           <TextField
            fullWidth           
            placeholder="https://linkedin.com/company/..."
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLinkedin size={30} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Facebook */}
           <TextField
            fullWidth           
            placeholder="https://facebook.com/..."
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaFacebook size={30} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          />
          {/* Facebook */}
           <TextField
            fullWidth           
            placeholder="https://instagram.com/..."
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaInstagram size={30} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          />
          
          {/* X / Twitter */}
           <TextField
            fullWidth
            placeholder="https://twitter.com/..."
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaXTwitter size={30} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          />
          </Box>

        </Box>
      </Box>
    </>
  );
}
const inputWrapper = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #e5e5e5",
  borderRadius: "8px",
  padding: "10px",
  marginBottom: "12px",
  background: "#fafafa",
};

const iconBox = {
  width: "3rem",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  background: "#f0f0f0",
  fontWeight: "bold",
  marginRight: "10px",
  fontSize: "12px",
};

const inputStyle = {
  border: "none",
  outline: "none",
  width: "100%",
  background: "transparent",
  fontSize: "13px",
};
