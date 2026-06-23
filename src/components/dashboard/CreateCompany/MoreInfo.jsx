import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  Heart,
  Briefcase,
  Clock3,
  TrendingUp,
  Plus,
  Mail,
  Phone,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

const benefits = [
  {
    title: "Health Insurance",
    icon: <Heart size={20} color="#EF4444" />,
    bg: "#FEF2F2",
  },
  {
    title: "Remote Work",
    icon: <Briefcase size={20} color="#06B6D4" />,
    bg: "#ECFEFF",
  },
  {
    title: "Flexible Hours",
    icon: <Clock3 size={20} color="#4F46E5" />,
    bg: "#EEF2FF",
  },
  {
    title: "Career Growth",
    icon: <TrendingUp size={20} color="#F59E0B" />,
    bg: "#FEF3C7",
  },
];

export default function MoreInfo() {
  return (
    <>
    <Box
            sx={{
              height: "70%",
              width: "100%",
              border: "solid 0.5px #b3b0b069",
              borderRadius: "15px",
              boxSizing: "border-box",p: 3,
              
            }}>


    </Box>
    </>
  );
}
