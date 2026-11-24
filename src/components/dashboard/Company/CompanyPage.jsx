import { useMediaQuery } from "@mui/material";
import CompanyDesktop from "./Desktop/CompanyDesktop";
import CompanyMobile from "./Mobile/CompanyMobile";

export default function CompanyPage() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return <>{isMobile ? <CompanyMobile /> : <CompanyDesktop />}</>;
}
