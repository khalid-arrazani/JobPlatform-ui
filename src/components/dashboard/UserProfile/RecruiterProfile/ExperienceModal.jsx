import {
  Modal,
  Card,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useProfile } from "../../../logic/context/profileContext";
import { useAuth } from "../../../logic/context/AuthContext";
import { updateProfileR } from "../../../logic/api/profile/GetMe";

export default function ExperienceModal({ open, setOpen }) {

  const [experience, setExperience] = useState("Junior");

  const { dispatch, ...state } = useProfile();
  const { setSnackBar } = useAuth();


  useEffect(() => {
    const profile = state.user?.profile;
    if (!profile) return;

    setExperience(profile.experienceLevel );
  }, [state.user?.profile]);



  const handleSave = async () => {
    dispatch({
      type: "SET_LOADING_UPDATE_PROFILE",
      payload: true,
    });
    setSnackBar({
      open: true,
      message: "Education Update Seccesfuly",
      severity: "success",
    });
    try {
      const data = await updateProfileR({
        experienceLevel: experience,
      });
      dispatch({
        type: "PROFILE",
        payload: data,
      });
      setOpen(false);
    } catch (error) {
      setSnackBar({
        open: true,
        message: error.response?.data?.message,
        severity: "error",
      });
    } finally {
      dispatch({
        type: "SET_LOADING_UPDATE_PROFILE",
        payload: false,
      });
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "28rem",
          maxWidth: "90vw",

          p: 3,

          borderRadius: "1rem",

          outline: "none",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontWeight: 700,
            mb: 3,
          }}
        >
          Experience Level
        </Typography>

        {/* Select */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Years of Experience
          </Typography>

          <TextField
            select
            fullWidth
            size="small"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <MenuItem value="Entry Level">Entry Level</MenuItem>

            <MenuItem value="Junior">Junior</MenuItem>

            <MenuItem value="Mid Level">Mid Level</MenuItem>

            <MenuItem value="Senior">Senior</MenuItem>

            <MenuItem value="Lead">Lead</MenuItem>
          </TextField>
        </Box>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={() => setOpen(false)}
            sx={{
              textTransform: "none",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}
