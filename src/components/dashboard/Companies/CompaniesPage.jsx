import "./CompaniesPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CardCompanies from "./CardCompanies"
import CardFilterAndSearch from "./CardFilterAndSearch";

import { GetAllCompanies } from "../../../logic/api/company/Company";
import { useEffect, useState } from "react";

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

      <div class="Companiesparent">

        <div class="Companiesdiv1">
          <CardFilterAndSearch/>
        </div>

        <div class="Companiesdiv2" >
          <CardCompanies  companies={companies}  />
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
