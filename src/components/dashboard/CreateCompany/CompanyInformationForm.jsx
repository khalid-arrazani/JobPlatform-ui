import {
  Box,
  TextField,
  Typography,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import {
  Building2,
  Mail,
  Phone,
  Globe,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";


const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};

export default function CompanyInformationForm({ setFirstInfo, firstInfo }) {
  return (
    <Box
      sx={{
        height: "70%",
        width: "100%",
        border: "solid 0.5px #b3b0b069",
        borderRadius: "15px",
        boxSizing: "border-box",
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        {/* Company Name */}
        <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Company Name <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <TextField

            onChange={(e) => {
              setFirstInfo((prev) => ({
                ...prev,
                company_name: e.target.value,
              }));
            }}

            value={firstInfo.company_name}
            fullWidth
            size="small"
            placeholder="Enter company name"
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Building2 size={18} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {/* Email */}
        <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Company Email <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <TextField
            fullWidth
            value={firstInfo.company_email}

            onChange={(e) => {
              setFirstInfo((prev) => ({
                ...prev,
                company_email: e.target.value,
              }));
            }}
            size="small"
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
            fullWidth
            value={firstInfo.company_number}

            onChange={(e) => {
              setFirstInfo((prev) => ({
                ...prev,
                company_number: e.target.value,
              }));
            }}
            size="small"
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
            value={firstInfo.company_webSite}
            fullWidth
            onChange={(e) => {
              setFirstInfo((prev) => ({
                ...prev,
                company_webSite: e.target.value,
              }));
            }}
            size="small"
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

        {/* Industry */}
        <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Industry <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <TextField
            placeholder="Select industry"
            value={firstInfo.company_industry}
            fullWidth
            onChange={(e) => {
              setFirstInfo((prev) => ({
                ...prev,
                company_industry: e.target.value,
              }));
            }}
            size="small"
            defaultValue=""
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <BriefcaseBusiness size={18} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          >
            <MenuItem value="">Select industry</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Construction">Construction</MenuItem>
          </TextField>
        </Box>

        {/* headquarters */}
        <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Headquarters <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <TextField
            value={firstInfo.company_locatin}
            placeholder="Select Location"
            fullWidth
            onChange={(e) => {
              setFirstInfo((prev) => ({
                ...prev,
                company_locatin: e.target.value,
              }));
            }}
            size="small"
            defaultValue=""
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MapPin size={18} color="#64748B" />
                  </InputAdornment>
                ),
              },
            }}
          >
            <MenuItem value="">Select location</MenuItem>
            <MenuItem value="Morocco">Morocco</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
          </TextField>
        </Box>

        {/* About Company */}

        <Box sx={{ minWidth: "80%", flex: 1  }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            About Your Company <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <TextField
           value={firstInfo.company_about}

            onChange={(e) => {
              e.target.value.length <= 2000 &&
                setFirstInfo((prev) => ({
                  ...prev,
                  company_about: e.target.value,
                }));
            }}
            fullWidth
            multiline
            rows={4.2}
            placeholder="Tell us about your company, your mission, vision and what makes it unique..."
            sx={inputStyle}
            helperText={`${firstInfo.company_about.length}/2000`}
            inputProps={{
              maxLength: 2000,
            }}
            FormHelperTextProps={{
              sx: {
                textAlign: "right",
                color: "#6B7280",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
