import { useMediaQuery, useTheme } from "@mui/material";
import DesktopNavbar from "./variants/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./variants/MobileNavbar/MobileNavbar";


export default function Navbar() {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  return isMobile
    ? <MobileNavbar />
    : <DesktopNavbar />;
}