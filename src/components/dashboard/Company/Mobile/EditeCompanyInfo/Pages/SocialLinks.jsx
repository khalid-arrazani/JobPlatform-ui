import {
  Typography,
  Box,
 
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";


import { useAuth } from "../../../../../../logic/context/AuthContext";
import { UpdateMyCompany } from "../../../../../../logic/api/company/Company";


const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    backgroundColor: "#fff",
    maxWidth: "100%",
     fontFamily:"monospace"
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
        Edite Socia Links
      </Typography>

      {/* LinkedIn*/}
      <Box sx={{ minWidth: "32%", mb:1 }}>
        

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
      </Box>

      {/* Facebook */}
      <Box sx={{ minWidth: "32%", mb:1   }}>
         

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
        ></TextField>
      </Box>

      {/* Instagram */}
      <Box sx={{ minWidth: "32%",   }}>
        

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
        ></TextField>
      </Box>

      {/*  X / Twitter */}
      <Box sx={{ minWidth: "32%", flex: 1 }}>
        

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
        ></TextField>
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
          onClick={UpdateMyCompanySocial}
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
