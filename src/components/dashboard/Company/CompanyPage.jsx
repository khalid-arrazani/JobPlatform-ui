 import { useMediaQuery } from "@mui/material";
import CompanyDesktop from "./Desktop/CompanyDesktop";



export default function CompanyPage() {
    const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <CompanyDesktop/>
    </>
  );
}
