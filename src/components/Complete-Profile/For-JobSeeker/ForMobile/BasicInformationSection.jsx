import { Box, Typography, Chip, Button, TextField } from "@mui/material";


import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import UploadProfilePhoto from "./UploadProfilePhoto";


import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompleteProfileJS } from "../../../../logic/api/CompleteProfile/CompleteProfile";
import { AuthContext } from "../../../../logic/context/AuthContext";

export default function BasicInformationSection() {
  const [fullName, setFullName] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");


  const navigate = useNavigate();
  
  const {setSnackBar}= useContext(AuthContext)


  const handleCreateProfile = async () => {
    try {
     const formData = new FormData();

  formData.append("fullName", fullName);
  formData.append("headline", headline);
  formData.append("location", location);

    if (photo) {
      formData.append(
        "image",
        photo,
        "profile.png"
      );
    };

    const data =
      await CompleteProfileJS(formData);
      console.log(data);
      setSnackBar({
        open: true,
        message: data?.message,
        severity: "success",
      });
      navigate('/profile')
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
        label="Job Seeker"
        size="small"
        sx={{
          mb: "0.5rem",
          background: "#f3f0ff",
          color: "#5b21b6",
          fontWeight: 600,
          borderRadius: "0.2rem",
          fontSize: "1rem",
          p: 2,
          fontFamily:"monospace"
        }}
      />

      {/* Title */}
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight:600,
          color: "#111827",
          mb: "0.3rem",
          fontFamily:"system-ui"
        }}
      >
        Basic Information
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: "0.87rem",
          color: "#6b7280",
          mb: "1rem",
          fontFamily:"monospace",fontWeight:600
        }}
      >
        Start by telling us a bit about yourself.
      </Typography>

      {/* Upload */}
      <UploadProfilePhoto setPhoto={setPhoto} />

      {/* Full Name */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.88rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",fontFamily:"system-ui"
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
            fontSize: "0.88rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",fontFamily:"system-ui"
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
          rows={3}
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
            fontSize: "0.88rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",fontFamily:"system-ui"
          }}
        >
          Location*
        </Typography>

        <TextField
          fullWidth
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          size="small"
          required
          placeholder="Enter your location"
          
          
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
        onClick={handleCreateProfile}
        variant="contained"
        sx={{
          height: "3rem",
          borderRadius: "0.5rem",

          textTransform: "none",
          fontWeight: 500,
          fontSize: "1rem",

          background: "#6d28d9",

          "&:hover": {
            background: "linear-gradient(135deg,#4c1d95 0%,#5b21b6 100%)",
          },
          mb: "2rem",
         fontFamily:"monospace",px:4
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
