import "./CompaniesPage.css";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

import CardCompanies from "./CardCompanies"

export default function CompaniesPage() {

  return (
    <>
      <div class="Companiesparent">
        <div class="Companiesdiv1">1</div>
        <div class="Companiesdiv2" >
          <CardCompanies/>
        </div>
        
        <div class="Companiesdiv3">3</div>
      </div>
    </>
  );
}
