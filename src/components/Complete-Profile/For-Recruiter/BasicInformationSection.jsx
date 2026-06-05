import {
  Box,
  Typography,
  Chip,
  Button,
  TextField,
  Divider,
} from "@mui/material";

import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import UploadProfilePhoto from "./UploadProfilePhoto";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { CompleteProfileJS } from "../../../logic/api/CompleteProfile/CompleteProfile";
import { AuthContext } from "../../../logic/context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BasicInformationSection() {
  const [fullName, setFullName] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");

  //------------ Company Info ------------------

  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [webSite, setWebSite] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");

  const navigate = useNavigate();

  const { setSnackBar } = useContext(AuthContext);

  const handleCreateProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("fullName", fullName);
      formData.append("headline", headline);
      formData.append("location", location);

      if (photo) {
        formData.append("image", photo, "profile.png");
      }

      const data = await CompleteProfileJS(formData);
      console.log(data);
      setSnackBar({
        open: true,
        message: data?.message,
        severity: "success",
      });
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data);

      setSnackBar({
        open: true,
        message: error.response.data?.message,
        severity: "error",
      });
    }
  };

  return (
    <>
      {/* Badge */}
      <Chip
        label="Recruiter"
        size="small"
        sx={{
          mb: "0.5rem",
          background: "#f3f0ff",
          color: "#5b21b6",
          fontWeight: 600,
          borderRadius: "0.2rem",
          fontSize: "0.75rem",
          p: 2,
        }}
      />

      {/* Title */}
      <Typography
        sx={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "#111827",
          mb: "0.3rem",
        }}
      >
        Basic Information
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: "0.82rem",
          color: "#6b7280",
          mb: "1rem",
        }}
      >
        Start by telling us a bit about yourself and your Company
      </Typography>
      {/* Upload */}
      <UploadProfilePhoto setPhoto={setPhoto} />

      {/* Full Name */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.82rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
          }}
        >
          Full Name*
        </Typography>

        <TextField
          fullWidth
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          required
          size="small"
          placeholder="Enter your full name"
          InputProps={{
            startAdornment: (
              <PersonOutlineOutlinedIcon
                sx={{
                  mr: "0.5rem",
                  color: "#9ca3af",
                  fontSize: "1rem",
                }}
              />
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.3rem",
            },
          }}
        />
      </Box>

      {/* Bio */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.82rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
          }}
        >
          Headline*
        </Typography>

        <TextField
          fullWidth
          onChange={(e) => {
            setHeadline(e.target.value);
          }}
          required
          multiline
          placeholder="Tell us about yourself..."
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.3rem",
            },
          }}
        />
      </Box>

      {/* Location */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.82rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
          }}
        >
          Location*
        </Typography>

        <TextField
          fullWidth
          size="small"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          required
          placeholder="Enter your location"
          InputProps={{
            startAdornment: (
              <LocationOnOutlinedIcon
                sx={{
                  mr: "0.5rem",
                  color: "#9ca3af",
                  fontSize: "1rem",
                }}
              />
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.3rem",
            },
          }}
        />
      </Box>
      <Divider sx={{ my: "1rem" }} />
      <Chip
        label="Company"
        size="small"
        sx={{
          mb: "0.5rem",
          background: "#f3f0ff",
          color: "#5b21b6",
          fontWeight: 600,
          borderRadius: "0.2rem",
          fontSize: "0.75rem",
          p: 2,
        }}
      />
      {/* Company name */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.82rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
          }}
        >
          Company name*
        </Typography>

        <TextField
          fullWidth
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          size="small"
          required
          placeholder="Enter your Company name"
          InputProps={{
            startAdornment: (
              <LocationOnOutlinedIcon
                sx={{
                  mr: "0.5rem",
                  color: "#9ca3af",
                  fontSize: "1rem",
                }}
              />
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.3rem",
            },
          }}
        />
      </Box>
      {/* industry */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.82rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
          }}
        >
          industry*
        </Typography>

        <TextField
          fullWidth
          onChange={(e) => {
            setIndustry(e.target.value);
          }}
          size="small"
          required
          placeholder="Enter your Company industry"
          InputProps={{
            startAdornment: (
              <LocationOnOutlinedIcon
                sx={{
                  mr: "0.5rem",
                  color: "#9ca3af",
                  fontSize: "1rem",
                }}
              />
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.3rem",
            },
          }}
        />
      </Box>
      {/* WebSite */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.82rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
          }}
        >
          WebSite*
        </Typography>

        <TextField
          fullWidth
          onChange={(e) => {
            setWebSite(e.target.value);
          }}
          size="small"
          required
          placeholder="Enter your Company Website"
          InputProps={{
            startAdornment: (
              <LocationOnOutlinedIcon
                sx={{
                  mr: "0.5rem",
                  color: "#9ca3af",
                  fontSize: "1rem",
                }}
              />
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.3rem",
            },
          }}
        />
      </Box>
      {/* Company Location */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.82rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
          }}
        >
          Location*
        </Typography>

        <TextField
          fullWidth
          onChange={(e) => {
            setCompanyLocation(e.target.value);
          }}
          size="small"
          required
          placeholder="Enter your Company Location"
          InputProps={{
            startAdornment: (
              <LocationOnOutlinedIcon
                sx={{
                  mr: "0.5rem",
                  color: "#9ca3af",
                  fontSize: "1rem",
                }}
              />
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.3rem",
            },
          }}
        />
      </Box>

      {/* Button */}
      <Button
        fullWidth
        variant="contained"
        onClick={handleCreateProfile}
        sx={{
          height: "3rem",
          borderRadius: "0.5rem",

          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.9rem",

          background: "#6d28d9",

          "&:hover": {
            background: "linear-gradient(135deg,#4c1d95 0%,#5b21b6 100%)",
          },
          mb: "2rem",
        }}
      >
        Continue
        <TrendingFlatOutlinedIcon
          sx={{ position: "relative", right: "-40%" }}
        />
      </Button>
    </>
  );
}
