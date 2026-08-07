import "./CompaniesPage.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CardCompanies from "./CardCompanies"
import CardFilterAndSearch from "./CardFilterAndSearch";

export default function CompaniesPage() {


  

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
