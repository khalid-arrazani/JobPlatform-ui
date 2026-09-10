import useMediaQuery from "@mui/material/useMediaQuery";

import AuthPc from "./forPc/AuthPc";
import AuthMobile from "./forMobile/AuthMobile";

export default function AuthPage() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

  return (
    <>
      {isMobile && <AuthMobile />}

      {!isMobile && <AuthPc />}
    </>
  );
}
