import { Box,Typography,Button } from "@mui/material";



import { useEffect } from "react";
import {
  getCompanyById,
  getmyCompany,
} from "../../../logic/api/company/Company";

import { useCompany } from "../../../logic/context/CompanyContext";

import AddIcon from '@mui/icons-material/Add';


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
        <Box sx={{width:"75%",height:"100%",bgcolor:"#ffffff",boxSizing: "border-box",overflow:"hidden",borderRadius:"10px 10px 0px 0px",pt:1.5}} >
           <Box sx={{width:"100%",height:"6rem" ,px:2.5,boxSizing: "border-box",display:"flex",alignContent:"center"}} >

             <Box>
                <Typography sx={{fontSize:"2rem",fontWeight:600,color:"#050713e7"}} >
                    My Jobs
                </Typography>
                 <Typography sx={{fontSize:"1rem",fontWeight:400,color:"#373737e7"}}>
                    Manage and track all the job positions you have posted.
                </Typography>
             </Box>



             <Button variant="contained"  sx={{gap:1.5 ,textTransform:"none"}}
             style={{flexShrink:0}} >
                <AddIcon/> Post a New Job
             </Button>


             
           </Box>

        </Box>





    
        {/* right side */}
        
        <Box sx={{width:"25%",height:"100%",bgcolor:"#ddd",borderRadius:"10px 10px 0px 0px"}}></Box>
      </Box>
    </>
  );
}
