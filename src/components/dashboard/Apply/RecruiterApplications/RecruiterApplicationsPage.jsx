import { useMediaQuery } from "@mui/material";
import ApplicationsDesktopRc from "./Desktop/ApplicationsDesktopPage";
import { useEffect } from "react";
import { useApply } from "../../../../logic/context/ApplyContext";

export default function RecruiterApplicationsPage() {
  const { isLoading, ApplyJobs, felterData, setFelterData, ...state } =
    useApply();
  const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
  };
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    ApplyJobs();
  }, []);


  return (
    <>
      <ApplicationsDesktopRc />
    </>
  );
}
