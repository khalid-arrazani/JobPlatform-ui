import {
  Modal,
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Autocomplete,
  Divider,
} from "@mui/material";





const platforms = ["LinkedIn", "GitHub", "Twitter", "Facebook", "Instagram"];

import {  useState } from "react";
import { useAuth } from "../../../../../../logic/context/AuthContext";





export default function SocialLinksP() {

  const { setSnackBar } = useAuth();

  const [socialLinks, setSocialLinks] = useState([]);

  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");




  const handleAdd = () => {
    if (!platform.trim() || !url.trim()) return;
    const isExist = socialLinks.some((item) => item.platform === platform);

    if (isExist) {

      setSnackBar({
        open: true,
        message: "Platform already exist",
        severity: "error",
      });
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



  

  

  return (
   
  )
}
