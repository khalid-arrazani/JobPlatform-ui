import "./CompaniesPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CardCompanies from "./CardCompanies"
import CardFilterAndSearch from "./CardFilterAndSearch";

import { GetAllCompanies } from "../../../logic/api/company/Company";
import { useEffect } from "react";

export default function CompaniesPage() {

 const fetchCompanies =async ()=>{
  try {
    const data = await GetAllCompanies()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
 }


 useEffect(()=>{ fetchCompanies()},[])
console.log(55);

  return (
    <>

      <div class="Companiesparent">

        <div class="Companiesdiv1">
          <CardFilterAndSearch/>
        </div>

        <div class="Companiesdiv2" >
          <CardCompanies/>
        </div>
        
        <div class="Companiesdiv3">
              <Stack >
                <Pagination count={10} />
              </Stack>
          
        </div>
          
      </div>
    </>
  );
}
