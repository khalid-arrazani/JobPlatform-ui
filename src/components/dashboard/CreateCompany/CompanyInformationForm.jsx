import {
  Box,
  TextField,
  Typography,
  MenuItem,
  InputAdornment,
  Autocomplete,
} from "@mui/material";

import {
  Building2,
  Mail,
  Phone,
  Globe,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

const optionSize = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"];
const specialties = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "UI/UX Design",
  "Mobile Development",
  "DevOps",
  "Cloud Computing",
  "Cybersecurity",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Data Analysis",
  "Blockchain",
  "Game Development",
  "QA Testing",
  "Project Management",
  "Product Management",
  "Digital Marketing",
  "SEO",
  "Content Writing",
  "Graphic Design",
  "Video Editing",
  "Human Resources",
  "Finance",
  "Sales",
  "Customer Support",
  "Business Development",
  "Recruitment",
];

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};

import CompanyFounded from "./CompanyFounded";

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
        overflow:"auto"
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
          ></TextField>
        </Box>





        {/* Company Founded*/}
        <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Founded <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <CompanyFounded />
        </Box>




        {/* Company Size*/}
         <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Company Size <span style={{ color: "#EF4444" }}>*</span>
          </Typography>

          <Autocomplete
          disablePortal
          value={firstInfo.company_size}

          options={optionSize}
          
          onChange={(e) => {
              setFirstInfo((prev) => ({
                ...prev,
                company_size: e.target.value,
              }));
            }}
          sx={{ width: "100%",  }}
          renderInput={(params) => (
            <TextField {...params} />
          )}
          slotProps={{
            popper: { sx: { transition: "none", animation: "none" } },
          }}
        />
        </Box>
        

        {/* Company Specialties*/}

        <Box sx={{ minWidth: "32%", flex: 1 }}>
          <Typography sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}>
            Specialties <span style={{ color: "#EF4444" }}>*</span>
          </Typography>
          <Autocomplete
            freeSolo
            options={specialties}
            // value={companySpecialties}
            // onChange={(event, newValue) => {
            //   setCompanySpecialties(newValue);
            // }}

            slotProps={{
              popper: { sx: { transition: "none", animation: "none" } },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
            
                placeholder="Select or type a specialty"
              />
            )}
          />
        </Box>

        {/* About Company */}

        <Box sx={{ minWidth: "80%", flex: 1 }}>
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
            rows={4}
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
