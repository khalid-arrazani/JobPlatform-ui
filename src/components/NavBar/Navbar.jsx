import { useMediaQuery } from "@mui/material";
import DesktopNavbar from "./variants/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./variants/MobileNavbar/MobileNavbar";


export default function Navbar() {
 

 

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

  return isMobile
    ? <MobileNavbar />
    : <DesktopNavbar />;
}