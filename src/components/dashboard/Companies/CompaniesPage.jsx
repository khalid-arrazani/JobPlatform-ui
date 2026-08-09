import "./CompaniesPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CardCompanies from "./CardCompanies"
import CardFilterAndSearch from "./CardFilterAndSearch";

import { GetAllCompanies } from "../../../logic/api/company/Company";
import { useEffect, useState } from "react";

import { Box, Card, Avatar, Typography, Button } from "@mui/material";


export default function CompaniesPage() {

  const [companies , setCompanies ] = useState(null)

 const fetchCompanies =async ()=>{
  try {
    const data = await GetAllCompanies()

    setCompanies(data)
  } catch (error) {
    console.log(error.response.data);
  }
 }

 useEffect(()=>{fetchCompanies()},[])


console.log(companies);

  return (
    <>

      <Box class="Companiesparent">

        <Box class="Companiesdiv1">
          <CardFilterAndSearch/>
        </Box>

        <Box class="Companiesdiv2" >
          <CardCompanies  companies={companies}  />
        </Box>
        
        <Box class="Companiesdiv3">
              <Stack >
                <Pagination count={10} />
              </Stack>
          
        </Box>
          
      </Box>
    </>
  );
}
