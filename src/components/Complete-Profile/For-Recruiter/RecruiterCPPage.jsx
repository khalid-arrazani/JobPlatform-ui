import useMediaQuery from "@mui/material/useMediaQuery";
import RecruiterCPPc from "./ForPc/RecruiterCPPc";
import RecruiterCPMobile from "./ForMobile/RecruiterCPMobile";
import { CompleteProfileR } from "../../../logic/api/CompleteProfile/CompleteProfile";
import { AuthContext } from "../../../logic/context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecruiterCPPage() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");

  const [fullName, setFullName] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const { setSnackBar } = useContext(AuthContext);

  const handleCreateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("headline", headline);
      formData.append("location", location);

      if (photo) {
        formData.append("profileImage", photo, "profile.png");
      }

      const data = await CompleteProfileR(formData);
      console.log(data);
      setSnackBar({
        open: true,
        message: data?.message,
        severity: "success",
      });

      navigate("/profile");
    } catch (error) {
      console.log(error?.response?.data);
      setSnackBar({
        open: true,
        message: error?.response?.data?.message,
        severity: "error",
      });
    }
  };

  return (
    <>
      {isMobile && (
        <RecruiterCPMobile
          fullName={fullName}
          setFullName={setFullName}
          headline={headline}
          setHeadline={setHeadline}
          location={location}
          setLocation={setLocation}
          photo={photo}
          setPhoto={setPhoto}
          handleCreateProfile={handleCreateProfile}
        />
      )}

      {!isMobile && (
        <RecruiterCPPc
          fullName={fullName}
          setFullName={setFullName}
          headline={headline}
          setHeadline={setHeadline}
          location={location}
          setLocation={setLocation}
          photo={photo}
          setPhoto={setPhoto}
          handleCreateProfile={handleCreateProfile}
        />
      )}
    </>
  );
}
