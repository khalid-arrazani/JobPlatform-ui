import { Card, Typography, Box, MenuItem } from "@mui/material";

import ISO6391 from "iso-639-1";

import {
  Chip,
  Modal,
  Divider,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";

import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import { useState } from "react";
import { useProfile } from "../../../logic/context/profileContext";

export default function AboutMeModal({
  open,
  setOpen,

}) {
  const {...state} = useProfile()


  // this is the languages List 
  const lang = ISO6391.getAllNames();
  //---------------------------------


  const [bio, setBio] = useState("bio");

  const [language, setLanguage] = useState("");

  const [languagesList, setLanguagesList] = useState([]);

  // -----------------------availability and preferredJobType----------------------------

  const [availability, setAvailability] = useState("");


  const [preferredJobType, setPreferredJobType] =
    useState("");


  const [experienceLevel, setExperienceLevel] =
    useState("");


  const handleAdd = () => {
    if (!language) return;

    setLanguagesList((prev) =>
      prev.includes(language) ? prev : [...prev, language],
    );

    setLanguage("");
  };


  const handleSave = () => {

    setOpen(false);
  };




  const handleDelete = (item) => {
    setLanguagesList((prev) => prev.filter((l) => l !== item));
  };

  return (
    <>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pb:"2rem"
        }}
        open={open}
        onClose={() => setOpen(false)}

      >
        <Card
          sx={{
           maxHeight: "80vh",
            width: "50vw",
            outline: "none",
           
            background: "#fffffff8",

            p: "0.5rem",
            overflow:'auto'

          }}
        >
          <Box
            sx={{
              height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="80"
              height="18"
              viewBox="0 0 80 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91999 15.52C8.67999 15.1733 7.87332 13.6933 6.49999 11.08C5.13999 8.45333 4.17332 6.62666 3.59999 5.6C3.54665 6.05333 3.42665 6.92 3.23999 8.2C2.87999 10.7867 2.69999 12.96 2.69999 14.72C2.69999 15.1333 2.72665 15.6867 2.77999 16.38C1.84665 16.38 1.21332 16.2733 0.879988 16.06C0.559988 15.8333 0.399988 15.52 0.399988 15.12C0.399988 15 0.619988 13.2133 1.05999 9.76C1.49999 6.29333 1.72665 3.86666 1.73999 2.48L1.55999 2.22C1.22665 1.72667 0.786655 1.31333 0.239988 0.979998C0.106655 0.899998 0.0266545 0.846665 -1.21593e-05 0.819998C0.639988 0.433331 1.25332 0.239998 1.83999 0.239998C3.01332 0.239998 3.87332 0.626665 4.41999 1.4C4.96665 2.16 5.98665 4.04666 7.47999 7.06C7.63999 7.39333 7.87999 7.9 8.19999 8.58C8.53332 9.24667 8.79999 9.78667 8.99999 10.2C9.46666 11.2 9.96665 12.14 10.5 13.02C10.54 12.5 10.72 10.9067 11.04 8.24C11.3733 5.56 11.54 3.44 11.54 1.88C11.54 1.46666 11.5133 0.926664 11.46 0.259998C12.3933 0.259998 13.02 0.366664 13.34 0.579998C13.66 0.793331 13.82 1.09333 13.82 1.48C13.82 1.62666 13.6 3.48666 13.16 7.06C12.72 10.6333 12.5 13.1067 12.5 14.48C12.5 14.9733 12.5133 15.3333 12.54 15.56C12.6467 15.6533 12.82 15.7667 13.06 15.9C12.2333 16.4333 11.4667 16.7 10.76 16.7C10.0533 16.7 9.43999 16.3067 8.91999 15.52ZM21.0458 11.36C20.4058 11.36 19.7791 11.2867 19.1658 11.14C19.1524 11.2733 19.1458 11.48 19.1458 11.76C19.1458 12.8667 19.3524 13.7 19.7658 14.26C20.1791 14.82 20.6724 15.1 21.2458 15.1C21.8191 15.1 22.3658 14.9267 22.8858 14.58C23.4058 14.2333 23.8591 13.7533 24.2458 13.14C24.7258 13.2467 24.9658 13.4933 24.9658 13.88C23.7924 15.68 22.2791 16.58 20.4258 16.58C19.3058 16.58 18.3258 16.1533 17.4858 15.3C16.6458 14.4333 16.2258 13.2333 16.2258 11.7C16.2258 10.5533 16.4458 9.46666 16.8858 8.44C17.3258 7.4 18.0258 6.52667 18.9858 5.82C19.9458 5.1 21.0058 4.74 22.1658 4.74C23.3391 4.74 24.1991 5.00667 24.7458 5.54C25.2924 6.07333 25.5658 6.77333 25.5658 7.64C25.5658 8.89333 25.1258 9.82666 24.2458 10.44C23.3791 11.0533 22.3124 11.36 21.0458 11.36ZM21.8858 5.98C21.2058 5.98 20.6324 6.4 20.1658 7.24C19.6991 8.08 19.3924 9.1 19.2458 10.3H19.5458C20.7058 10.3 21.5591 10 22.1058 9.4C22.6658 8.8 22.9458 8.08 22.9458 7.24C22.9458 6.89333 22.8524 6.6 22.6658 6.36C22.4924 6.10666 22.2324 5.98 21.8858 5.98ZM35.4372 16.88C34.5038 16.88 33.6972 16.48 33.0172 15.68C32.3505 14.8667 31.7238 13.7333 31.1372 12.28C29.9638 13.72 29.1105 15.3333 28.5772 17.12C27.5772 16.2933 27.0772 15.56 27.0772 14.92C27.0772 14.4533 27.3638 13.88 27.9372 13.2C28.5238 12.5067 29.3772 11.64 30.4972 10.6C29.6438 8.29333 29.0572 6.86667 28.7372 6.32C28.4305 5.76 28.1772 5.34667 27.9772 5.08C28.6438 4.73333 29.2505 4.56 29.7972 4.56C30.2372 4.56 30.5972 4.74666 30.8772 5.12C31.2105 5.53333 31.4638 5.98 31.6372 6.46C31.8105 6.92666 31.9372 7.3 32.0172 7.58C32.1105 7.84666 32.2438 8.24666 32.4172 8.78C34.3238 6.91333 35.3772 5.44666 35.5772 4.38C36.3638 5.04667 36.7572 5.62667 36.7572 6.12C36.7572 6.46667 36.6372 6.82 36.3972 7.18C36.1572 7.54 35.9038 7.84666 35.6372 8.1C35.3705 8.34 34.9305 8.71333 34.3172 9.22C33.7172 9.71333 33.2572 10.1067 32.9372 10.4C33.4038 11.6933 34.0305 12.9533 34.8172 14.18C35.6038 15.4067 36.2372 16.2467 36.7172 16.7C36.2372 16.82 35.8105 16.88 35.4372 16.88ZM47.0509 9.36L45.1309 9.34C44.4509 9.34 43.6376 9.36 42.6909 9.4C42.3843 11.6933 42.2309 13.4067 42.2309 14.54C42.2309 15.6733 42.3243 16.46 42.5109 16.9C41.3776 16.6067 40.6043 16.22 40.1909 15.74C39.7776 15.2467 39.5709 14.5667 39.5709 13.7C39.5709 13.1933 39.7109 11.9067 39.9909 9.84C40.0043 9.78667 40.0109 9.75333 40.0109 9.74C39.6109 9.84667 39.2909 9.95333 39.0509 10.06C39.0243 9.76667 39.0109 9.54667 39.0109 9.4C39.0109 8.46666 39.4376 7.89333 40.2909 7.68C40.5709 5.30666 40.7109 3.37333 40.7109 1.88C40.7109 1.48 40.6843 0.933331 40.6309 0.239998C41.9643 0.293331 42.8043 0.533331 43.1509 0.959998C43.3243 1.2 43.4309 1.43333 43.4709 1.66C43.5243 1.87333 43.5509 2.22666 43.5509 2.72C43.5509 3.2 43.4576 4.06666 43.2709 5.32C43.0843 6.56 42.9776 7.3 42.9509 7.54C45.1643 7.54 47.0709 7.52667 48.6709 7.5C48.9509 5.20667 49.0909 3.33333 49.0909 1.88C49.0909 1.48 49.0643 0.933331 49.0109 0.239998C50.3443 0.293331 51.1776 0.533331 51.5109 0.959998C51.6976 1.2 51.8109 1.43333 51.8509 1.66C51.9043 1.87333 51.9309 2.22666 51.9309 2.72C51.9309 3.2 51.7043 4.97333 51.2509 8.04C50.8109 11.0933 50.5909 13.2267 50.5909 14.44C50.5909 15.64 50.6843 16.46 50.8709 16.9C49.7376 16.6067 48.9643 16.22 48.5509 15.74C48.1509 15.26 47.9509 14.6467 47.9509 13.9C47.9509 13.1533 48.0843 11.8 48.3509 9.84L48.4709 8.98C48.1776 9.23333 47.7043 9.36 47.0509 9.36ZM58.4712 6.34C58.4712 6.54 58.3046 7.59333 57.9712 9.5C57.6512 11.3933 57.4846 12.96 57.4712 14.2C57.4712 15.4267 57.5512 16.22 57.7112 16.58C56.6712 16.3133 55.9712 15.9133 55.6112 15.38C55.2512 14.8333 55.0712 14.04 55.0712 13C55.0712 12.44 55.1779 11.4267 55.3912 9.96C55.6046 8.49333 55.7112 7.35333 55.7112 6.54C55.7112 5.72666 55.6712 5.1 55.5912 4.66C55.8846 4.63333 56.1579 4.62 56.4112 4.62C57.1846 4.62 57.7179 4.75333 58.0112 5.02C58.3179 5.27333 58.4712 5.71333 58.4712 6.34ZM58.7712 2.86C58.3979 2.91333 58.0712 2.94 57.7912 2.94C56.4179 2.94 55.7312 2.46 55.7312 1.5C55.7312 1.15333 55.8312 0.679998 56.0312 0.0799975C56.4046 0.0266649 56.7312 -1.43051e-06 57.0112 -1.43051e-06C58.3846 -1.43051e-06 59.0712 0.479998 59.0712 1.44C59.0712 1.78666 58.9712 2.26 58.7712 2.86ZM64.097 9.78C64.577 8.04667 65.1504 6.77333 65.817 5.96C66.497 5.13333 67.1237 4.72 67.697 4.72C68.2837 4.72 68.7237 4.94 69.017 5.38C69.3104 5.80667 69.457 6.36667 69.457 7.06C69.457 7.74 69.2504 8.36667 68.837 8.94C68.437 9.51333 67.8837 9.8 67.177 9.8C66.9904 9.8 66.7704 9.74667 66.517 9.64C66.9304 9.12 67.137 8.49333 67.137 7.76C67.137 7.33333 66.9637 7.12 66.617 7.12C66.3637 7.12 66.0904 7.3 65.797 7.66C65.5037 8.00666 65.2237 8.49333 64.957 9.12C64.6904 9.73333 64.4637 10.5267 64.277 11.5C64.1037 12.46 64.017 13.4867 64.017 14.58C64.017 14.7133 64.0504 15.28 64.117 16.28C63.6904 16.3067 63.417 16.32 63.297 16.32C62.537 16.32 61.9904 16.1867 61.657 15.92C61.3237 15.6533 61.157 15.2133 61.157 14.6C61.157 14.3333 61.297 13.3067 61.577 11.52C61.857 9.73333 61.997 8.31333 61.997 7.26C61.997 6.19333 61.8837 5.21333 61.657 4.32C62.6304 4.62666 63.3104 5.06666 63.697 5.64C64.0837 6.2 64.277 6.86 64.277 7.62C64.277 8.36667 64.217 9.08667 64.097 9.78ZM74.8348 11.36C74.1948 11.36 73.5682 11.2867 72.9548 11.14C72.9415 11.2733 72.9348 11.48 72.9348 11.76C72.9348 12.8667 73.1415 13.7 73.5548 14.26C73.9682 14.82 74.4615 15.1 75.0348 15.1C75.6082 15.1 76.1548 14.9267 76.6748 14.58C77.1948 14.2333 77.6482 13.7533 78.0348 13.14C78.5148 13.2467 78.7548 13.4933 78.7548 13.88C77.5815 15.68 76.0682 16.58 74.2148 16.58C73.0948 16.58 72.1148 16.1533 71.2748 15.3C70.4348 14.4333 70.0148 13.2333 70.0148 11.7C70.0148 10.5533 70.2348 9.46666 70.6748 8.44C71.1148 7.4 71.8148 6.52667 72.7748 5.82C73.7348 5.1 74.7948 4.74 75.9548 4.74C77.1282 4.74 77.9882 5.00667 78.5348 5.54C79.0815 6.07333 79.3548 6.77333 79.3548 7.64C79.3548 8.89333 78.9148 9.82666 78.0348 10.44C77.1682 11.0533 76.1015 11.36 74.8348 11.36ZM75.6748 5.98C74.9948 5.98 74.4215 6.4 73.9548 7.24C73.4882 8.08 73.1815 9.1 73.0348 10.3H73.3348C74.4948 10.3 75.3482 10 75.8948 9.4C76.4548 8.8 76.7348 8.08 76.7348 7.24C76.7348 6.89333 76.6415 6.6 76.4548 6.36C76.2815 6.10666 76.0215 5.98 75.6748 5.98Z"
                fill="black"
              />
            </svg>
          </Box>
          <Divider sx={{ mt: "1rem" }}>About Me</Divider>
          <Box
            sx={{
              height: "89%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",

              p: "1rem 1rem",
            }}
          >
            {/* About Me */}
            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  mb: "0.5rem",
                  color: "#111827",
                }}
              >
                About Me*
              </Typography>

              <TextField
                value={changeBio}
                onChange={(e) => setChangeBio(e.target.value)}
                size="small"
                fullWidth
                multiline
                rows={3}
                slotProps={{
                  htmlInput: {
                    maxLength: 700,
                  },
                }}
              />

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: "0.75rem",
                  color: "#6b7280",
                  textAlign: "right",
                }}
              >
                {bio.length}/700
              </Typography>
            </Box>

            {/* --languages-- */}
            <Box>
              <Typography
                sx={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  mb: "0.5rem",
                  color: "#111827",
                }}
              >
                languages*
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Autocomplete
                  disablePortal
                  options={lang}
                  value={language}
                  slotProps={{
                    popper: {
                      sx: {
                        transition: "none",
                        animation: "none",
                        m: 5,
                      },
                    },
                    listbox: {
                      sx: {
                        maxHeight: "150px",
                      },
                    },
                  }}
                  onChange={(e, value) => setLanguage(value)}
                  sx={{ flex: 1 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Language" size="small" />
                  )}
                />

                <Button
                  variant="contained"
                  onClick={handleAdd}
                  sx={{
                    textTransform: "none",
                    height: "40px",
                  }}
                >
                  Add
                </Button>
              </Box>

              {/* Chips */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  my: 2,
                }}
              >
                {languagesList.map((item, index) => (
                  <Chip
                    key={index}
                    label={item}
                    onDelete={() => handleDelete(item)}
                  />
                ))}
              </Box>
            </Box>

            {/* -----------------------availability and preferredJobType----------------------- */}
            <Box>
              {/* Availability */}
              <Box sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  Availability
                </Typography>

                <TextField
                  select
                  fullWidth
                  size="small"
                  sx={{ mb: 1 }}
                  value={changeAvailability}
                  onChange={(e) => setchangeAvailability(e.target.value)}
                >
                  <MenuItem value="Available">Available</MenuItem>

                  <MenuItem value="1 Week Notice">1 Week Notice</MenuItem>

                  <MenuItem value="2 Weeks Notice">2 Weeks Notice</MenuItem>

                  <MenuItem value="1 Month Notice">1 Month Notice</MenuItem>

                  <MenuItem value="Not Available">Not Available</MenuItem>
                </TextField>
              </Box>

              {/* Preferred Job Type */}
              <Box>
                <Typography
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  Preferred Job Type
                </Typography>

                <TextField
                  select
                  fullWidth
                  size="small"
                  sx={{ mb: 2 }}
                  value={changePreferredJobType}
                  onChange={(e) => setChangePreferredJobType(e.target.value)}
                >
                  <MenuItem value="Full-Time">Full-Time</MenuItem>

                  <MenuItem value="Part-Time">Part-Time</MenuItem>

                  <MenuItem value="Freelance">Freelance</MenuItem>

                  <MenuItem value="Contract">Contract</MenuItem>

                  <MenuItem value="Internship">Internship</MenuItem>

                  <MenuItem value="Remote">Remote</MenuItem>
                </TextField>
              </Box>


              {/* Experience Level */}
              <Box>
                <Typography
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  Experience Level
                </Typography>

                <TextField
                  select
                  fullWidth
                  size="small"
                  value={changeExperienceLevel}
                  onChange={(e) => setChangeExperienceLevel(e.target.value)}
                >
                  <MenuItem value="Entry Level (No Experience)">
                    Entry Level (No Experience)
                  </MenuItem>

                  <MenuItem value="1-2 Years">1-2 Years</MenuItem>

                  <MenuItem value="1-2 Years">1-2 Years</MenuItem>

                  <MenuItem value="2-4 Years">2-4 Years</MenuItem>

                  <MenuItem value="4-6 Years">4-6 Years</MenuItem>

                  <MenuItem value="6-10 Years">6-10 Years</MenuItem>

                  <MenuItem value="10+ Years">10+ Years</MenuItem>
                </TextField>
              </Box>
            </Box>


            {/* Button */}
            <Button
              onClick={handleSave}
              fullWidth
              variant="contained"
              sx={{
                height: "3rem",
                borderRadius: "0.5rem",

                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                mt: "1rem",
                background: "#6d28d9",

                "&:hover": {
                  background: "linear-gradient(135deg,#4c1d95 0%,#5b21b6 100%)",
                },
              }}
            >
              Save
              <TrendingFlatOutlinedIcon
                sx={{ position: "relative", right: "-40%" }}
              />
            </Button>
          </Box>
        </Card>
      </Modal>
    </>
  );
}
