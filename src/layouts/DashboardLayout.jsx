import { Box } from "@mui/material";
import Navbar from "../components/dashboard/Navbar.jsx";

export default function DashboardLayout({ children, part, setPart }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#ebeaea",
        padding: 0,
      }}
    >
      <Navbar part={part} setPart={setPart} />

      {children}
    </Box>
  );
}
