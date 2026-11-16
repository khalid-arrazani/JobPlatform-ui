import { Box } from "@mui/material";

import { Pagination } from "@mui/material";

import { useEffect } from "react";

import Header from "./header";
import ListGrid from "./ListGrid";

import LoadingList from "./LoadingList";
import Profile from "./ProfileCard";
import { useApply } from "../../../../../logic/context/ApplyContext";

export default function ApplicationsMobileRc() {
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
            width: "100%",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            borderRight: "solid 0.5px #6160601c",
            boxSizing: "border-box",
            px: 1,
            pb:'5.5rem'
          }}
        >
          <Header />

          <Box
            sx={{
              width: "100%",
              flex: 1,
              boxSizing: "border-box",
              placeItems: "center",
              overflow: "auto",
              border: "solid 0.1px #8d8d8d3a",
            }}
          >
            
            {isLoading ? <LoadingList /> : <ListGrid />}


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
          
        </Box>

      
      </Box>
    </>
  );
}
