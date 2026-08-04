import { Box } from "@mui/material";

import { Pagination } from "@mui/material";

import Header from "./header";
import { useEffect,  } from "react";

import ListApply from "./ListApply";


import { useApply } from "../../../../logic/context/ApplyContext";
import LoadingList from "./LoadingList";
import ProfileCard from "./ProfileCard";

export default function ApplicationsJs() {
 
 

  const {ApplyJobs,isLoading,felterData,setFelterData,...state} = useApply()

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
          <Header  />

          <Box
            sx={{
              width: "100%",
              height: "60%",
              boxSizing: "border-box",
              placeItems: "center",
              overflow:"hidden"
            }}
          >
            {isLoading ? <LoadingList/>:<ListApply/>}
           
          </Box>

          <Pagination
            onChange={handleChange}
            page={felterData.page}
            count={state?.ListApply?.totalPages}
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
        >
          <ProfileCard/>
        </Box>
      </Box>
    </>
  );
}
