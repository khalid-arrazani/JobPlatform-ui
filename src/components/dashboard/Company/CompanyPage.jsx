
import { Box } from "@mui/material"

import CompanyHeader from "./CompanyHeader.jsx"

export default function CompanyPage (){

    return <>
    <Box sx={{width:"100vw" , height:"92.4vh" , bgcolor:"#f3f5f9" ,boxSizing:"border-box",paddingX:5,pt:3}}>
   
          <CompanyHeader/>
    </Box>
    
    </>
}