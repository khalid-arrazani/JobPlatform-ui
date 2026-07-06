import {
  Typography,
  Box,
  Divider,
  TextField,
  MenuItem,
  InputAdornment,
  Autocomplete,Button
} from "@mui/material";

import { Globe, Phone, Mail } from "lucide-react";

 
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
};

export default function ContactInfo() {
  return (
    <>
      <Box sx={{ width: "100%", height: "85%", boxSizing: "border-box" }}>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#050318d2",
            fontFamily: "system-ui",
            py: 2,
            boxSizing: "border-box",
            ml: 1,
          }}
        >
          Edite Contact information
        </Typography>

        <Divider />

        <Box
          sx={{
            display: "flex",
            flexDirection:"column",
            gap: 3,
            justifyContent: "space-between",
            px: 2,
            pt: 2,
          }}
        >
          

          {/* Email */}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Company Email <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <TextField
            
            //   value={firstInfo.company_email}
            //   onChange={(e) => {
            //     setFirstInfo((prev) => ({
            //       ...prev,
            //       company_email: e.target.value,
            //     }));
            //   }}
            
            placeholder="contact@company.com"
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={18} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

          {/* Phone */}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Phone Number <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <TextField
           
            //   value={firstInfo.company_number}
            //   onChange={(e) => {
            //     setFirstInfo((prev) => ({
            //       ...prev,
            //       company_number: e.target.value,
            //     }));
            //   }}
           
            placeholder="+212 6 12 34 56 78"
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone size={18} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

          {/* Website */}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Company Website
          </Typography>

          <TextField
            //   value={firstInfo.company_webSite}
            
            //   onChange={(e) => {
            //     setFirstInfo((prev) => ({
            //       ...prev,
            //       company_webSite: e.target.value,
            //     }));
            //   }}
            
            placeholder="https://www.yourcompany.com"
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Globe size={18} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        </Box>
      </Box>

      <Box
        sx={{
          height: "15%",
          boxSizing: "border-box",
          alignSelf: "end",
          borderTop:" solid 1px #d0d0d0",
          display:"flex",
          alignItems:"center",
          justifyContent:"end",pb:1.5,
          px:4
          
        }}
      >
        <Button variant="contained" size="large" sx={{  display:"flex", gap:2,height:"2.5rem",fontSize:"1.1rem"}} >
              Save
         </Button>
      </Box>
    </>
  );
}
