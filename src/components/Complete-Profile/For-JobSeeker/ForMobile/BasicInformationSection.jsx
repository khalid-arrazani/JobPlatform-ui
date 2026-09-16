import { Box, Typography, Chip, Button, TextField } from "@mui/material";

import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import UploadProfilePhoto from "./UploadProfilePhoto";

import { useCP } from "../../../../logic/context/CPContext";

export default function BasicInformationSection() {
  const {
    setFullName,
    setHeadline,
    setLocation,
    setPhoto,
    handleCreateProfileJS,
  } = useCP();

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
          fontFamily: "monospace",
        }}
      />

      {/* Title */}
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#111827",
          mb: "0.3rem",
          fontFamily: "system-ui",
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
          fontFamily: "monospace",
          fontWeight: 600,
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
            color: "#111827",
            fontFamily: "system-ui",
          }}
        >
          Full Name*
        </Typography>

        <Box
          sx={{
            display: "flex",
            border: "1px solid #b9b7b7d8",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderRight: "1px solid #b9b7b7d8",
              alignItems: "center",
              p: 0.5,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="User-1--Streamline-Guidance-Free"
              height="35"
              width="35"
            >
              <path
                stroke="#3b0447"
                d="M18.5 20.247V16S16 14.5 12 14.5 5.5 16 5.5 16v4.247M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12Zm10.426 0.5S8.5 10.68 8.5 8c0 -1.933 1.569 -3.5 3.504 -3.5A3.495 3.495 0 0 1 15.5 8c0 2.68 -3.426 4.5 -3.426 4.5h-0.148Z"
                stroke-width="1"
              ></path>
            </svg>
          </Box>

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
                fontFamily: "monospace",
              },
              "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
              border: "none",
            }}
          />
        </Box>
      </Box>

      {/* Bio */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.88rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
            fontFamily: "system-ui",
          }}
        >
          Headline*
        </Typography>

        <Box
          sx={{
            display: "flex",
            border: "1px solid #b9b7b7d8",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderRight: "1px solid #b9b7b7d8",
              alignItems: "center",
              p: 0.5,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Newspapers--Streamline-Guidance-Free"
              height="35"
              width="35"
            >
              <desc>Newspapers Streamline Icon: https://streamlinehq.com</desc>
              <path
                stroke="#3b0447"
                d="M18.91 20c0.276 -1.823 0.59 -4.637 0.59 -8 0 -6 -1 -10.25 -1 -10.25l-0.05 -0.25H1.5v0.25S2.5 6 2.5 12s-1 10.25 -1 10.25v0.25h19.95l0.05 -0.25s1 -4.25 1 -10.25c0 -3.07 -0.262 -5.681 -0.517 -7.5H19m-2.685 12h-11m-0.332 -12a54.458 54.458 0 0 1 0.496 9h11a54.453 54.453 0 0 0 -0.496 -9h-11Z"
                stroke-width="1"
              ></path>
            </svg>
          </Box>

          <TextField
            fullWidth
            onChange={(e) => {
              setHeadline(e.target.value);
            }}
            required
            multiline
            rows={1}
            placeholder="Tell us about yourself..."
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.3rem",
                fontFamily: "monospace",
              },
              "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
              border: "none",
            }}
          />
        </Box>
      </Box>

      {/* Location */}
      <Box sx={{ mb: "1rem" }}>
        <Typography
          sx={{
            fontSize: "0.88rem",
            fontWeight: 600,
            mb: "0.5rem",
            color: "#111827",
            fontFamily: "system-ui",
          }}
        >
          Location*
        </Typography>

        <Box
          sx={{
            display: "flex",
            border: "1px solid #b9b7b7d8",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderRight: "1px solid #b9b7b7d8",
              alignItems: "center",
              p: 0.5,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Location-Pin--Streamline-Guidance-Free"
              height="35"
              width="35"
            >
              <path
                stroke="#3b0447"
                d="M12 23.92a9.04 9.04 0 0 0 -2.96 -6.61l-2.567 -2.334A8.365 8.365 0 0 1 3.75 8.799C3.75 4.242 7.444 0.5 12 0.5s8.25 3.741 8.25 8.298c0 2.343 -0.989 4.6 -2.723 6.177l-2.568 2.334a9.041 9.041 0 0 0 -2.96 6.61Zm0 0V24l0 -0.057M12 11.5a2.5 2.5 0 1 1 0 -5 2.5 2.5 0 0 1 0 5Z"
                stroke-width="1"
              ></path>
            </svg>
          </Box>

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
                fontFamily: "monospace",
              },
              "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                {
                  border: "none",
                },
              border: "none",
            }}
          />
        </Box>
      </Box>

      {/* Button */}
      <Button
        fullWidth
        onClick={handleCreateProfileJS}
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
          fontFamily: "monospace",
          px: 4,
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
