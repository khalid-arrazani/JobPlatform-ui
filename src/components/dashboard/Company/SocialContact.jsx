import { Card, Typography, Box, IconButton } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const SocialContact = () => {
  return (
    <Card sx={{ p: 2, borderRadius: "12px", mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Contact
      </Typography>

      {/* Phone */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <PhoneIcon color="success" />
        <Typography variant="body2">+212 600 000 000</Typography>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "#E1306C" }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "#1877F2" }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          href="https://twitter.com"
          target="_blank"
          sx={{ color: "#1DA1F2" }}
        >
          <TwitterIcon />
        </IconButton>

        <IconButton
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: "#0A66C2" }}
        >
          <LinkedInIcon />
        </IconButton>

        {/* Email */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 1 ,border:'solid 1px #807f7f5b',borderRadius:"10px"}}>
          <EmailIcon color="primary" />
          <Typography variant="body2" sx={{fontFamily:"sans-serif"}}>company@email.com</Typography>

        </Box>

      </Box>
    </Card>
  );
};

export default SocialContact;
