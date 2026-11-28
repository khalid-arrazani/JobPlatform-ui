import {
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
} from "@mui/material";

import { Globe, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../../../logic/context/AuthContext";
import { UpdateMyCompany } from "../../../../../../logic/api/company/Company";
 
 




const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#fff",
    minWidth: "190%",
  },
};

export default function ContactInfo({ CompanyInfo, fetchCompany }) {


  const { setSnackBar } = useAuth();
  const [reload, setReload] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    company_email: "",
    company_number: "",
    company_webSite: "",
  });

  useEffect(() => {
    setContactInfo({
      company_email: CompanyInfo.company_email,
      company_number: CompanyInfo.company_number,
      company_webSite: CompanyInfo.website,
    });
  }, [CompanyInfo]);

  const hasChanges =
    contactInfo.company_email !== CompanyInfo.company_email ||
    contactInfo.company_number !== CompanyInfo.company_number ||
    contactInfo.company_webSite !== CompanyInfo.website;

  const UpdateMyCompanyContact = async () => {
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
        company_email: contactInfo.company_email,
        company_number: contactInfo.company_number,
        website: contactInfo.company_webSite,
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
      <Box
      sx={{
        display: "flex",
        gap: 2,
        px: 2,
        pt: 2,
        flexDirection: "column",
        height: "100%",

        boxSizing: "border-box",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 600,
          color: "#050318d2",
          fontFamily: "monospace",

          boxSizing: "border-box",
          borderBottom: "1px dashed #ddd",
          width: "fit-content",
          mb: 1,
        }}
      >
        Edite Company Information
      </Typography>

      {/* Company Name */}
      <Box sx={{ minWidth: "32%", flex: 1 }}>
        <Typography sx={{ mb: 1, fontWeight: 600, fontFamily:"monospace",color:"#010217c1" }}>
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
                  <Building2 size={22} color="#64748B" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* Industry */}
      <Box sx={{ minWidth: "32%", flex: 1 }}>
        <Typography sx={{ mb: 1, fontWeight: 600, fontFamily:"monospace",color:"#010217c1"  }}>
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
        <Typography sx={{ mb: 1, fontWeight: 600, fontFamily:"monospace",color:"#010217c1"  }}>
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
        <Typography sx={{ mb: 1, fontWeight: 600, fontFamily:"monospace",color:"#010217c1" }}>
          Founded <span style={{ color: "#EF4444" }}>*</span>
        </Typography>

        <CompanyFounded setCompanyinfo={setCompanyinfo} />
      </Box>

      {/* Company Size*/}
      <Box sx={{ minWidth: "32%", flex: 1 }}>
        <Typography sx={{ mb: 1, fontWeight: 600, fontFamily:"monospace",color:"#010217c1"  }}>
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
        <Typography sx={{ mb: 1, fontWeight: 600, fontFamily:"monospace",color:"#010217c1"  }}>
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
        <Typography sx={{ mb: 1, fontWeight: 600, fontFamily:"monospace",color:"#010217c1"  }}>
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

      <Box
        sx={{
          height: "fit-content",
          boxSizing: "border-box",
          alignSelf: "end",
          borderTop: " dashed 1px #d0d0d0",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          pb: 2,

          pt:1,
          width: "100%",
        }}
      >
        <Button
          onClick={UpdateMyCompanyinfo}
          variant="contained"
          size="large"
          fullWidth
          sx={{
            display: "flex",
            gap: 2,
            height: "2.5rem",
            fontSize: "1.1rem",
            bgcolor: !hasChanges ? "#969696" : null,
            fontFamily: "monospace",
            
            textTransform: "none",
          }}
        >
          Save Change{" "}
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
    </Box>
    </>
  );
}
