import { Box } from "@mui/material";



import { useEffect } from "react";
import {
  getCompanyById,
  getmyCompany,
} from "../../../logic/api/company/Company";

import { useCompany } from "../../../logic/context/CompanyContext";

export default function MyJobsPage() {
  const { dispatch, ...state } = useCompany();

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const data = await getmyCompany();

      dispatch({
        type: "SETCOMPANY",
        payload: data,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };


  return (
    <>
      <Box
        sx={{
          height: "93%",
          width: "100vw",
          bgcolor: "#f2f2f5",
          boxSizing: "border-box",
       
          pt: 3,
          px: 2,
          overflow: "auto",
          display:"flex",
          gap:1.5,
        }}
      >
        {/* left side */}
        <Box sx={{width:"75%",height:"100%",bgcolor:"#ddd",borderRadius:"10px 10px 0px 0px"}} ></Box>





    
        {/* right side */}
        
        <Box sx={{width:"25%",height:"100%",bgcolor:"#ddd",borderRadius:"10px 10px 0px 0px"}}></Box>
      </Box>
    </>
  );
}
