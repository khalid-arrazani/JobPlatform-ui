import "./CompaniesPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CardCompanies from "./CardCompanies"
import CardFilterAndSearch from "./CardFilterAndSearch";

import { GetAllCompanies } from "../../../logic/api/company/Company";

export default function CompaniesPage() {

 const fetchCompanies =async ()=>{
  try {
    const data = await GetAllCompanies()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
 }

 fetchCompanies()


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
