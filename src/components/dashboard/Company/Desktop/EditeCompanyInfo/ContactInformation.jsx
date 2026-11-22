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
import { useAuth } from "../../../../logic/context/AuthContext";
import { UpdateMyCompany } from "../../../../logic/api/company/Company";

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
            flexDirection: "column",
            justifyContent: "space-evenly",
            px: 3,
            height: "86%",
            boxSizing: "border-box",
          }}
        >
          {/* Email */}
          <Box sx={{ minWidth: "32%" }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Company Email <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <TextField
              value={contactInfo.company_email}
              onChange={(e) => {
                setContactInfo((prev) => ({
                  ...prev,
                  company_email: e.target.value,
                }));
              }}
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
          <Box sx={{ minWidth: "32%" }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Phone Number <span style={{ color: "#EF4444" }}>*</span>
            </Typography>

            <TextField
              value={contactInfo.company_number}
              onChange={(e) => {
                setContactInfo((prev) => ({
                  ...prev,
                  company_number: e.target.value,
                }));
              }}
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
          <Box sx={{ minWidth: "32%" }}>
            <Typography
              sx={{ mb: 1, fontWeight: 600, fontFamily: "system-ui" }}
            >
              Company Website
            </Typography>

            <TextField
              value={contactInfo.company_webSite}
              onChange={(e) => {
                setContactInfo((prev) => ({
                  ...prev,
                  company_webSite: e.target.value,
                }));
              }}
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
          borderTop: " solid 1px #d0d0d0",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          pb: 1.5,
          px: 4,
        }}
      >
        <Button
          variant="contained"
          onClick={UpdateMyCompanyContact}
          size="large"
          sx={{
            display: "flex",
            gap: 2,
            height: "2.5rem",
            fontSize: "1.1rem",
            bgcolor: !hasChanges ? "#969696" : null,
          }}
        >
          Save
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
