import { useMediaQuery, useTheme } from "@mui/material";
// import DesktopNavbar from "./DesktopNavbar";
// import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

//   return isMobile
//     ? <MobileNavbar />
//     : <DesktopNavbar />;
}