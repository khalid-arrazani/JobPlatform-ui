
import { useEffect, useState } from "react";
import { getSavedJobs } from "../../../logic/api/job/Job";
import { useMediaQuery } from "@mui/material";
import SavedJobsDesktop from "./Desktop/SavedJobsDesktop";
import SavedJobsMobile from "./Mobile/SavedJobsMobile";

export default function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (event, value) => {
    SavedJobs(value);
  };

  useEffect(() => {
    SavedJobs();
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");
  const SavedJobs = async (value) => {
    setLoading(true);
    try {
      const SavedJobs = await getSavedJobs(value);

      setSavedJobs(SavedJobs);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {isMobile
    ? <SavedJobsMobile />
    : <SavedJobsDesktop />}
    </>
  );
}
