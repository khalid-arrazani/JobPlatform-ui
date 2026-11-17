import { useMediaQuery } from "@mui/material";
import ApplicationsDesktopRc from "./Desktop/ApplicationsDesktopPage";
import ApplicationsMobileRc from "./Mobile/ApplicationsMobilePage";

export default function RecruiterApplicationsPage() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <> {isMobile ? <ApplicationsMobileRc /> : <ApplicationsDesktopRc />}</>
  );
}
