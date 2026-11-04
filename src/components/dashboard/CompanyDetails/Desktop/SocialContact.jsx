import { Card, Typography, Box, Divider } from "@mui/material";
import { RiContactsLine } from "react-icons/ri";
import sendMessage from "../../../assets/Sent Message-bro.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const icons = {
  linkdin: {
    icon: <LinkedInIcon sx={{ fontSize: "2rem" }} />,
    color: "#0A66C2",
    border: "#cfe5ff",
    shadow: "0 8px 20px rgba(10, 102, 194, 0.15)",
    hoverShadow: "0 15px 30px rgba(10, 102, 194, 0.25)",
  },

  facebook: {
    icon: <FacebookIcon sx={{ fontSize: "2rem" }} />,
    color: "#1877F2",
    border: "#d5e7ff",
    shadow: "0 8px 20px rgba(24, 119, 242, 0.15)",
  
    hoverShadow: "0 15px 30px rgba(24, 119, 242, 0.25)",
  },

  instagram: {
    icon: <InstagramIcon sx={{ fontSize: "2rem" }} />,
    color: "#E1306C",
    border: "#f3d4e1",
    shadow: "0 8px 20px rgba(225, 48, 108, 0.15)",
    hoverShadow: "0 15px 30px rgba(225, 48, 108, 0.25)",
  },

  x: {
    icon: <XIcon sx={{ fontSize: "2rem" }} />,
    color: "#2b2c2d",
    border: "#ddd",
    shadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    hoverShadow: "0 15px 30px rgba(0, 0, 0, 0.25)",
  },
};

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const SocialContact = ({ CompanyInfo }) => {
  return (
    <Card sx={{ p: 2, borderRadius: "12px", position: "relative" }}>
      <img
        style={{ position: "absolute", width: "12.5rem", right: 0, zIndex: 0 }}
        src={sendMessage}
        alt=""
      />

      <Typography
        variant="h6"
        sx={{
          mb: 1.5,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontFamily: "initial",
          color: "#090909d8",
        }}
      >
        <RiContactsLine color="#2b88f3" />
        Contact
      </Typography>

      {/* Phone */}
      <Card
        sx={{
          p: 1.5,
          borderRadius: "14px",
          bgcolor: "#f8fcf8",
          border: "1px solid #e7f7ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "60%",
          boxShadow: "0 8px 20px rgba(8, 8, 8, 0.08)",
          zIndex: 1,
          mb: 2,
          cursor: "pointer",
          transition: ".25s",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 8px 20px rgba(188, 245, 130, 0.2)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              bgcolor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneIcon
              sx={{
                color: "#22c55e",
                fontSize: "1.3rem",
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "#64748b",
                lineHeight: 1,
              }}
            >
              Call us
            </Typography>

            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              {CompanyInfo?.company_number}
            </Typography>
          </Box>
        </Box>

        <PhoneIcon
          sx={{
            color: "#22c55e",
            fontSize: "1.2rem",
          }}
        />
      </Card>

      <Divider sx={{ my: 2.5 }} />

      {/* Social Icons */}

      <Box sx={{ zIndex: 1, display: "flex", gap: 2, flexWrap: "wrap" }}>
        {CompanyInfo?.socialLinks
          .filter((item) => item.url.trim() !== "")
          .map((item) => {
            const social = icons[item.platform];

            return (
              <Card
                key={item._id}
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: social.color,

                  border: `1px solid ${social.border}`,
                  borderRadius: "14px",
                  boxShadow: social.shadow,
                  textDecoration: "none",
                  display: "flex",
                  zIndex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1.2,
                  cursor: "pointer", transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                  "&:hover": {
                    boxShadow: social.hoverShadow,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {social.icon}
              </Card>
            );
          })}

        {/* Email */}
        <Card
          sx={{
            px: 2,
            border: "1px solid #dbeafe",
            borderRadius: "14px",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            zIndex: 1,
            gap: 1.2,
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
            boxShadow: "0 8px 20px rgba(37, 99, 235, 0.12)",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 15px 30px rgba(37, 99, 235, 0.2)",
            },
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: "12px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmailIcon
              sx={{
                color: "#2563eb",
                fontSize: "1.5rem",
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#020203bc",
              fontSize: "1rem",
              fontFamily: "Inter",
            }}
          >
            {CompanyInfo?.company_email}
          </Typography>
        </Card>
      </Box>
    </Card>
  );
};

export default SocialContact;
