import { Box } from "@mui/material";

import { Pagination } from "@mui/material";

import Header from "./header";
import { useEffect, useState } from "react";
import { getSavedJobs } from "../../../../logic/api/job/Job";
import ListApply from "./ListApply";
import { GetMyApply } from "../../../../logic/api/apply/Apply";

export default function ApplicationsJs() {
  const [loading, setLoading] = useState(false);




  useEffect(() => {
    ApplyJobs();
  }, []);

  const ApplyJobs = async () => {

    setLoading(true);

    try {
      const MyApply = await GetMyApply();
       console.log(MyApply);
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

          <Box
            sx={{
              width: "100%",
              height: "60%",
              boxSizing: "border-box",
              placeItems: "center",
            }}
          >
            <ListApply />
          </Box>

          <Pagination
            // onChange={}
            count={5}
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
