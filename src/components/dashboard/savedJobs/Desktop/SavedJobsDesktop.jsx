import { Box, Pagination } from "@mui/material";

import Header from "./header";

import ListJobsSaved from "./ListJobsSaved";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";

import LoadingList from "./LoadingList";
import { getSavedJobs } from "../../../../logic/api/job/Job";

export default function SavedJobsDesktop() {
 
  const [felterData, setFelterData] = useState({
    search: "",
    sort: "Newest First",
    page: 1,
  });


  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(52555);
      setFelterData((prev) => {
        if (prev.search === search) return prev;
        return {
          ...prev,
          search,
          page: 1,
        };
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);


 const [savedJobs, setSavedJobs] = useState();
  const [loading, setLoading] = useState(false);

   const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
    SavedJobs();
  }, []);


  useEffect(() => {
    SavedJobs();
  }, [felterData]);

  const SavedJobs = async () => {
    setLoading(true);
    try {
      const SavedJobs = await getSavedJobs(felterData);
      setSavedJobs(SavedJobs);
    } catch (err) {
      console.log(err.message);
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
          <Header setSearch={setSearch} search={search} />
          {loading ? (
            <LoadingList />
          ) : (
            <ListJobsSaved  savedJobs={savedJobs} handleChange={handleChange} />
          )}
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
        >
          <ProfileCard />
        </Box>
      </Box>
    </>
  );
}
