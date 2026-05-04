import AuthLayout from "../components/layout/AuthLayout";
import WelcomePage from "../components/layout/WelcomePanel";
import SignIn from "../components/auth/SignInForm";
import SingUpPage from "../components/auth/SignUpForm";

export default function AuthPage1() {
  return (
    <>
      <AuthLayout>
        <SingUpPage />
        <WelcomePage />
        <SignIn />
      </AuthLayout>
    </>
  );
}
