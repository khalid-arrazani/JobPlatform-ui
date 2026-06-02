import {
  Modal,
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Autocomplete,
} from "@mui/material";

import { updateProfileHeader } from "../../../logic/api/profile/GetMe";
import { useProfile } from "../../../logic/context/profileContext";

const platforms = ["LinkedIn", "GitHub", "Twitter", "Facebook", "Instagram"];

import { useEffect, useState } from "react";

export default function SocialLinksModal({
  open,
  setOpen
}) {

  const {dispatch , ...state} = useProfile();

  const [socialLinks, setSocialLinks] = useState([]);


  

  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");




  useEffect(()=>{
    setSocialLinks(state.user?.profile?.socialLinks)
  },[state.user?.profile])

  const handleAdd = () => {
    if (!platform.trim() || !url.trim()) return;
    const isExist = socialLinks.some((item) => item.platform === platform);
    if (isExist) {
      console.log(55);
    } else {
      const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
      const newLink = {
        platform,
        url: formattedUrl,
      };

      setSocialLinks((prev) => [...prev, newLink]);

      setPlatform("");
      setUrl("");
    }
  };


  const handleDelete = (index) => {
    setSocialLinks((prev) => prev.filter((_, i) => i !== index));
  };




  const handleSave = async () => {
      try {
        const data = await updateProfileHeader({
          socialLinks: socialLinks,
        });
  
        dispatch({
          type: "PROFILE",
          payload: data,
        });
  
        setOpen(false);
      } catch (error) {
        console.log(error.response?.data);
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
          {/* Platform */}
          <Autocomplete
            freeSolo
            fullWidth
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
            options={platforms}
            value={platform}
            onInputChange={(event, newValue) => {
              setPlatform(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Platform" size="small" fullWidth />
            )}
          />

          {/* URL */}
          <TextField
            fullWidth
            size="small"
            label="URL"
            placeholder="https://..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
          {socialLinks?.map((item, index) => (
            <Chip
              key={index}
              label={item.platform}
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
