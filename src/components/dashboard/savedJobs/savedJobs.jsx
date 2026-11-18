


import { useMediaQuery } from "@mui/material";
import SavedJobsDesktop from "./Desktop/SavedJobsDesktop";
import SavedJobsMobile from "./Mobile/SavedJobsMobile";

export default function SavedJobsPage() {


  const isMobile = useMediaQuery("(max-width:600px)");


  return (
    <>
    {isMobile
    ? <SavedJobsMobile />
    : <SavedJobsDesktop />}
    </>
  );
}
