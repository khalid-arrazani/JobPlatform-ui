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

      <Box sx={{height:"100%", width:"100%",bgcolor:"#fafdff"}}>

        <Box  sx={{height:"25%", width:"100%",bgcolor:"#feffff"}}>
          <CardFilterAndSearch/>
        </Box>

        <Box  sx={{height:"60%", width:"100%",bgcolor:"#feffff"}} >
          <CardCompanies  companies={companies}  />
        </Box>
        
        <Box  sx={{height:"15%", width:"100%",bgcolor:"#feffff",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Stack >
                <Pagination count={10} />
              </Stack>
          
        </Box>
          
      </Box>
    </>
  );
}
