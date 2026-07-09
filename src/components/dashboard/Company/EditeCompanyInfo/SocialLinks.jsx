import {
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";

import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { UpdateMyCompany } from "../../../../logic/api/company/Company";
import { useAuth } from "../../../../logic/context/AuthContext";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#fff",
    maxWidth: "100%",
  },
};

export default function SocialInfo({ CompanyInfo, fetchCompany }) {
  const { setSnackBar } = useAuth();
  const [reload, setReload] = useState(false);

  const [socialInfo, setSocialInfo] = useState([
    {
      platform: "linkdin",
      url: "",
    },
    {
      platform: "facebook",
      url: "",
    },
    {
      platform: "instagram",
      url: "",
    },
    {
      platform: "x",
      url: "",
    },
  ]);

  const [socialInfoHasChanj, setSocialInfoHasChang] = useState([
    {
      platform: "linkdin",
      url: "",
    },
    {
      platform: "facebook",
      url: "",
    },
    {
      platform: "instagram",
      url: "",
    },
    {
      platform: "x",
      url: "",
    },
  ]);

  useEffect(() => {
    const socialLinks = CompanyInfo?.socialLinks.map((item) => ({
      platform: item.platform,
      url: item.url,
    }));
    setSocialInfo(socialLinks);
    setSocialInfoHasChang(socialLinks)
  }, [CompanyInfo]);

  const hasChanges = socialInfo !== socialInfoHasChanj;



  const UpdateMyCompanySocial = async () => {
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
        socialLinks: socialInfo,
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
          Edite Socia Links
        </Typography>

        <Divider />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: 2,
            border: "dashed 0.5px #c8c8c8",
            px: 10,
            boxSizing: "border-box",
            overflow: "auto",
            height: "70%",
            mt: 4,
            py: 3.5,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* LinkedIn */}
          <TextField
            value={
              socialInfo.find((item) => item.platform === "linkdin")?.url || ""
            }
            onChange={(e) => {
              setSocialInfo((prev) =>
                prev.map((item) =>
                  item.platform === "linkdin"
                    ? { ...item, url: e.target.value }
                    : item,
                ),
              );
            }}
            fullWidth
            placeholder="https://linkedin.com/company/..."
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLinkedin size={30} color="#3376d5" />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Facebook */}
          <TextField
            fullWidth
            value={
              socialInfo.find((item) => item.platform === "facebook")?.url || ""
            }
            onChange={(e) => {
              setSocialInfo((prev) =>
                prev.map((item) =>
                  item.platform === "facebook"
                    ? { ...item, url: e.target.value }
                    : item,
                ),
              );
            }}
            placeholder="https://facebook.com/..."
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaFacebook size={30} color="#1f62c1" />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Instagram */}
          <TextField
            fullWidth
            value={
              socialInfo.find((item) => item.platform === "instagram")?.url ||
              ""
            }
            onChange={(e) => {
              setSocialInfo((prev) =>
                prev.map((item) =>
                  item.platform === "instagram"
                    ? { ...item, url: e.target.value }
                    : item,
                ),
              );
            }}
            placeholder="https://instagram.com/..."
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaInstagram size={30} color="#E1306C" />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* X / Twitter */}
          <TextField
            fullWidth
            value={socialInfo.find((item) => item.platform === "x")?.url || ""}
            onChange={(e) => {
              setSocialInfo((prev) =>
                prev.map((item) =>
                  item.platform === "x"
                    ? { ...item, url: e.target.value }
                    : item,
                ),
              );
            }}
            placeholder="https://x.com/..."
            sx={inputStyle}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaXTwitter size={30} color="#353d49" />
                  </InputAdornment>
                ),
              },
            }}
          />
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
          onClick={UpdateMyCompanySocial}
          size="large"
          sx={{ display: "flex", gap: 2, height: "2.5rem", fontSize: "1.1rem" ,bgcolor: !hasChanges ? '#969696' : null}}
        >
          Save
          {reload ? <CircularProgress  sx={{
                color: "#ffffff",
                "& .MuiCircularProgress-track": {
                  stroke: "#000000",
                },
              }}  enableTrackSlot size="25px" aria-label="Loading…" /> :null }
        </Button>
      </Box>
    </>
  );
}
