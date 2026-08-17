import "./CompaniesPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CardCompanies from "./CardCompanies";
import CardFilterAndSearch from "./CardFilterAndSearch";

import { GetAllCompanies } from "../../../logic/api/company/Company";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import LoadingList from "./LoadingList";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const data = await GetAllCompanies();
      setCompanies(data);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "#fafdff",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            height: "25%",
            width: "100%",
            bgcolor: "#feffff",
            boxSizing: "border-box",
          }}
        >
          <CardFilterAndSearch />
        </Box>

        <Box
          sx={{
            height: "63%",
            width: "100%",
            bgcolor: "#feffff",
            boxSizing: "border-box",
            p: 2,
            border: "solid 1px #dddddd87",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 1,
            
          }}
        >
          {/* <CardCompanies  companies={companies}  /> */}
          <LoadingList />
        </Box>

        <Box
          sx={{
            height: "12%",
            width: "100%",
            bgcolor: "#feffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <Stack>
            <Pagination count={1} />
          </Stack>
        </Box>
      </Box>
    </>
  );
}
