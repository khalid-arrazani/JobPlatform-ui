import { Card, Typography, Box, Button, Collapse } from "@mui/material";

import { Pagination } from "@mui/material";

import Header from "./header";
import { useEffect, useState } from "react";
import { getSavedJobs } from "../../../../logic/api/job/Job";
export default function ApplicationsJs() {
  const [savedJobs, setSavedJobs] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (event, value) => {
    SavedJobs(value);
  };

  useEffect(() => {
    SavedJobs();
  }, []);

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
      <Box
        sx={{
          width: "100vw",
          height: "92.4vh",
          bgcolor: "#dcdbdb",
          display: "flex",
        }}
      >
        {/* left side header and SavedJobsList */}
        <Box
          sx={{
            width: "70vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            borderRight: "solid 0.5px #6160601c",
            boxSizing: "border-box",
            px: 5,
          }}
        >
          <Header />

          <Box sx={{width:"100%",height:"60%" , boxSizing:"border-box"}} >
           <Card sx={{ height:"5rem"}} ></Card>
          </Box>


          <Pagination
            onChange={handleChange}
            count={savedJobs?.totalPages}
            sx={{
              mt: "auto",
              alignSelf: "center",
              mb: 2,
            }}
          />
        </Box>

        {/* right side profile card  */}
        <Box
          sx={{
            width: "30vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
      </Box>
    </>
  );
}
