import { Box} from "@mui/material";

import { Pagination } from "@mui/material";

import { useEffect } from "react";

import Header from "./header";
import ListGrid from "./ListGrid";
import { useApply } from "../../../../logic/context/ApplyContext";
import LoadingList from "./LoadingList";
import Profile from "./ProfileCard";

export default function ApplicationsRc() {
  const { isLoading, ApplyJobs, felterData, setFelterData, ...state } =
    useApply();
  const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
  };


  
  useEffect(() => {
    ApplyJobs();
  }, []);



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
              height: "62%",
              boxSizing: "border-box",
              placeItems: "center",
              overflow: "hidden",
              border: "solid 0.1px #8d8d8d3a",
            }}
          >
            {isLoading ? <LoadingList /> : <ListGrid />}
          </Box>
          <Pagination
            onChange={handleChange}
            page={felterData.page}
            count={state?.ListApply?.totalPages}
            sx={{
              mt: "auto",
              alignSelf: "center",
              mb: 1,
            }}
          />
        </Box>

        {/* right side profile card  */}
        <Profile/>



      </Box>
    </>
  );
}
