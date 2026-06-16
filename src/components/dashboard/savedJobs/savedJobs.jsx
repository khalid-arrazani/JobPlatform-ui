import { Box } from "@mui/material";

import Header from "./header";

import ListJobsSaved from "./ListJobsSaved";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import { getSavedJobs } from "../../../logic/api/job/Job";

export default function SavedJobs() {



  const [savedJobs , setSavedJobs] = useState()

 const handleChange = (event, value) => {
     SavedJobs(value)
  };

  useEffect(()=>{
   SavedJobs()
  },[])

  const SavedJobs = async(value)=>{
     try{

      const SavedJobs = await getSavedJobs(value)
      
      setSavedJobs(SavedJobs)
      
    }catch (err){

      console.log(err);
    }}


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
          <ListJobsSaved savedJobs={savedJobs}  handleChange={handleChange}/>
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
