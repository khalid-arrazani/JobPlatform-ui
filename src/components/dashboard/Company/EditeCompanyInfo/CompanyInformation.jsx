import {
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
  Autocomplete,
  Button,
  CircularProgress,
} from "@mui/material";

import { Building2, BriefcaseBusiness, MapPin } from "lucide-react";

import CompanyFounded from "./CompanyFounded";
import { useEffect, useState } from "react";

import { useAuth } from "../../../../logic/context/AuthContext";
import { UpdateMyCompany } from "../../../../logic/api/company/Company";

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

export default function Companyinfo({ CompanyInfo, fetchCompany }) {
  const { setSnackBar } = useAuth();
  const [reload, setReload] = useState(false);

  const [companyinfo, setCompanyinfo] = useState({
    company_name: "",
    company_locatin: "",
    company_industry: "",
    company_about: "",
    company_founded: "2026",
    company_size: "1-10",
    company_specialties: "",
  });
  console.log(companyinfo);

  useEffect(() => {
    setCompanyinfo({
      company_name: CompanyInfo.name,
      company_locatin: CompanyInfo.headquarters,
      company_industry: CompanyInfo.industry,
      company_about: CompanyInfo.description,
      company_founded: CompanyInfo.foundedYear,
      company_size: CompanyInfo.companySize,
      company_specialties: CompanyInfo.specialties,
    });
  }, [CompanyInfo]);

  const hasChanges =
    companyinfo.company_name !== CompanyInfo.name ||
    companyinfo.company_locatin !== CompanyInfo.headquarters ||
    companyinfo.company_industry !== CompanyInfo.industry ||
    companyinfo.company_founded !== CompanyInfo.foundedYear ||
    companyinfo.company_size !== CompanyInfo.companySize ||
    companyinfo.company_specialties !== CompanyInfo.specialties;

  const UpdateMyCompanyinfo = async () => {
    if (!hasChanges) {
      return setSnackBar({
        open: true,
        message: "You didn't make any changes.",
        severity: "warning",
      });
    }
    setReload(true);
    try {
      const res = await UpdateMyCompany({
        name: companyinfo.company_name,
        headquarters: companyinfo.company_locatin,
        industry: companyinfo.company_industry,
        description: companyinfo.company_about,
        foundedYear: companyinfo.company_founded,
        companySize: companyinfo.company_size,
        specialties: companyinfo.company_specialties,
      });

      setSnackBar({
        open: true,
        message: res?.message,
        severity: "success",
      });

      fetchCompany();
    } catch (error) {
      setSnackBar({
        open: true,
        message: error?.response?.data?.message,
        severity: "error",
      });
    } finally {
      setReload(false);
    }
  };

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
              value={companyinfo.company_name}
              onChange={(e) => {
                setCompanyinfo((prev) => ({
                  ...prev,
                  company_name: e.target.value,
                }));
              }}
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
              value={companyinfo.company_industry}
              onChange={(e) => {
                setCompanyinfo((prev) => ({
                  ...prev,
                  company_industry: e.target.value,
                }));
              }}
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
            ></TextField>
          </Box>

          {/* headquarters */}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Headquarters <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <TextField
              value={companyinfo.company_locatin}
              onChange={(e) => {
                setCompanyinfo((prev) => ({
                  ...prev,
                  company_locatin: e.target.value,
                }));
              }}
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

            <CompanyFounded setCompanyinfo={setCompanyinfo} />
          </Box>

          {/* Company Size*/}
          <Box sx={{ minWidth: "32%", flex: 1 }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Company Size <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <Autocomplete
              value={companyinfo.company_size}
              onChange={(event, newValue) => {
                setCompanyinfo((prev) => ({
                  ...prev,
                  company_size: newValue,
                }));
              }}
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
              value={companyinfo.company_specialties}
              onChange={(event, newValue) => {
                setCompanyinfo((prev) => ({
                  ...prev,
                  company_specialties: newValue,
                }));
              }}
              freeSolo
              sx={{ width: "100%", bgcolor: "#fff" }}
              options={specialties}
              slotProps={{
                popper: { sx: { transition: "none", animation: "none" } },
              }}
              renderInput={(params) => (
                <TextField
                  onChange={(e) => {
                    setCompanyinfo((prev) => ({
                      ...prev,
                      company_specialties: e.target.value,
                    }));
                  }}
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
              value={companyinfo.company_about}
              onChange={(e) => {
                setCompanyinfo((prev) => ({
                  ...prev,
                  company_about: e.target.value,
                }));
              }}
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
          borderTop: " solid 1px #d0d0d0",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          pb: 1.5,
          px: 4,
        }}
      >
        <Button
          onClick={UpdateMyCompanyinfo}
          variant="contained"
          size="large"
          sx={{
            display: "flex",
            gap: 2,
            height: "2.5rem",
            fontSize: "1.1rem",
            bgcolor: !hasChanges ? "#969696" : null,
          }}
        >
          Save{" "}
          {reload ? (
            <CircularProgress
              sx={{
                color: "#ffffff",
                "& .MuiCircularProgress-track": {
                  stroke: "#000000",
                },
              }}
              enableTrackSlot
              size="25px"
              aria-label="Loading…"
            />
          ) : null}
        </Button>
      </Box>
    </>
  );
}
