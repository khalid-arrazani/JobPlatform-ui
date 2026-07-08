import {
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
  Autocomplete,Button
} from "@mui/material";

import { Building2, BriefcaseBusiness, MapPin } from "lucide-react";

import CompanyFounded from "./CompanyFounded";

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
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
};



export default function Companyinfo({CompanyInfo}) {

  const [companyinfo, setCompanyinfo] = useState({
      company_name: "",
      company_locatin: "",
      company_industry: "",
      company_about: "",
      company_founded: "2026",
      company_size: "1-10",
      company_specialties : "",
    });


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
          Edite Company Information
        </Typography>

        <Divider />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
            px: 2,
            pt: 2,
          }}
        >
          {/* Company Name */}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Company Name <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <TextField
             
              fullWidth
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


          {/* Industry */}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Industry <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <TextField
              placeholder="Select industry"
              fullWidth
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
            </TextField>
          </Box>

          {/* headquarters */}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Headquarters <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <TextField
              placeholder="Select Location"
              fullWidth
              
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
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Founded <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <CompanyFounded
            
            />
          </Box>

          {/* Company Size*/}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Company Size <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <Autocomplete
              defaultValue={"1-10"}
              options={optionSize}
              sx={{ width: "100%", bgcolor: "#fff" }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select Company Size " />
              )}
              slotProps={{
                popper: { sx: { transition: "none", animation: "none" } },
              }}
            />
          </Box>

          {/* Company Specialties*/}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Specialties <span style={{ color: "#EF4444" }}>*</span>
            </Typography>
            <Autocomplete
              freeSolo
              sx={{ width: "100%", bgcolor: "#fff" }}
              options={specialties}
              slotProps={{
                popper: { sx: { transition: "none", animation: "none" } },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Specialty"
                  placeholder="Select or type a specialty"
                />
              )}
            />
          </Box>

          {/* About Company */}

          <Box sx={{ minWidth: "80%", flex: 1 }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              About Your Company <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <TextField
              //   value={firstInfo.company_about}
              //   onChange={(e) => {
              //     e.target.value.length <= 2000 &&
              //       setFirstInfo((prev) => ({
              //         ...prev,
              //         company_about: e.target.value,
              //       }));
              //   }}
              fullWidth
              multiline
              rows={4}
              placeholder="Tell us about your company, your mission, vision and what makes it unique..."
              sx={inputStyle}
              //   helperText={`${firstInfo.company_about.length}/2000`}
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
