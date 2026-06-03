import {
  Modal,
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useProfile } from "../../../logic/context/profileContext";
import { updateProfileHeader } from "../../../logic/api/profile/GetMe";

import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import { useAuth } from "../../../logic/context/AuthContext";

export default function TopSkillsModal({ open, setOpen }) {

  const {dispatch, ...state } = useProfile();
    const { setSnackBar } = useAuth();
  

  const [inputAdd, setInputAdd] = useState("");
  const [editSkills, setEditSkills] = useState([]);


useEffect(() => {
  setEditSkills(
    state.user?.profile?.skills || []
  );
}, [state.user?.profile]);

  const handleAdd = () => {
    setEditSkills((S) => [...S, inputAdd]);
    setInputAdd("");
  };

  const handleDelete = (index) => {
    setEditSkills((prev) => prev.filter((_, i) => i !== index));
  };


  const handleSave = async() => {
     dispatch({
          type: "SET_LOADING_UPDATE_PROFILE",
          payload: true,
        });
      try {
        const data = await updateProfileHeader({
          skills:editSkills
        });
  
        dispatch({
          type: "PROFILE", 
          payload: data,
        });
        setSnackBar({
        open: true,
        message: "Top Skills Update Seccesfuly",
        severity: "success",
      });
  
        setOpen(false);
      } catch (error) {

        setSnackBar({
        open: true,
        message: error.response?.data?.message,
        severity: "error",
      });

      }finally {
        dispatch({
          type: "SET_LOADING_UPDATE_PROFILE",
          payload: false,
        });
      }
    setOpen(false);
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
          width: "35rem",
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
          Top Skills
        </Typography>

        {/* Inputs */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mb: 2,
          }}
        >
          {/* skills */}
          <TextField
            fullWidth
            size="small"
            label="skills"
            placeholder="ex : JavaScript , react . . . . . "
            value={inputAdd}
            onChange={(e) => setInputAdd(e.target.value)}
          />

          {/* Add */}
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              minWidth: "5rem",
              textTransform: "none",
              borderRadius: "0.5rem",
            }}
          >
            Add
          </Button>
        </Box>

        {/* Chips */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {editSkills.map((item, index) => (
            <Chip
              key={index}
              label={item}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </Box>

        {/* Save Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 4,
          }}
        >
         <Button
            onClick={handleSave}
            fullWidth
            disabled={state.isLoadingUptadeProfile}
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
            {state.isLoadingUptadeProfile ? (
              <CircularProgress
                aria-label="Loading…"
                size={30}
                sx={{
                  color: green[800],
                  position: "absolute",
                }}
              />
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                Save
                <TrendingFlatOutlinedIcon
                  sx={{ position: "relative", right: "-400%" }}
                />
              </Box>
            )}
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}
