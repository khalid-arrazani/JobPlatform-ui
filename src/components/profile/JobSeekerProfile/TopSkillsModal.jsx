import {
  Modal,
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Chip,

  
} from "@mui/material";

import { useState } from "react";

export default function TopSkillsModal({
  open,
  setOpen,
  setSkills,
  editSkills,
  setEditSkills
}) {

  

  const [inputAdd, setInputAdd] = useState("");



  const handleAdd = () => {
    setEditSkills((S)=>[...S,inputAdd])
      setInputAdd("");
  };

  const handleDelete = (index) => {
    setEditSkills((prev) => prev.filter((_, i) => i !== index));
  };
  
 const handleSave = () => {
   setSkills(editSkills)
   setOpen(false)
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
          Social Links
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
            variant="contained"
            onClick={() => setOpen(false)}
            onClick={handleSave}
            sx={{
              textTransform: "none",
              borderRadius: "0.5rem",
            }}
          >
            Save
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}
