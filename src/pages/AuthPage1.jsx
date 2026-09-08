import AuthLayout from "../layouts/AuthLayout";
import WelcomePage from "../components/auth/WelcomePanel";
import SignIn from "../components/auth/SignInForm";
import SingUpPage from "../components/auth/SignUpForm";

import {
  
  Card,
  Container,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

import SignInMobile from "../components/auth/forMobile/SignInForm";
import AuthPage from "../components/auth/authPage";

export default function AuthPage1() {

const isMobile = useMediaQuery("(max-width:600px)");

const isTablet = useMediaQuery(
  "(min-width:601px) and (max-width:1024px)"
);



  return (
    <>
      <AuthLayout>

        <AuthPage/>


      </AuthLayout>
    </>
  );
}
