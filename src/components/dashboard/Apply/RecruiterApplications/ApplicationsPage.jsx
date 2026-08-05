import { Box,Avatar ,Typography} from "@mui/material";

import { Pagination } from "@mui/material";

import { useEffect } from "react";

import Header from "./header";
import ListGrid from "./ListGrid";
import { useApply } from "../../../../logic/context/ApplyContext";
import LoadingList from "./LoadingList";

export default function ApplicationsRc() {
  const { isLoading, ApplyJobs, felterData, setFelterData, ...state } =
    useApply();
  const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
    ApplyJobs();
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "92.4vh",
          bgcolor: "#dcdbdb",
          display: "flex",
        }}
      >
        {/* left side header and SavedJobsList */}
        <Box
          sx={{
            width: "70vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            borderRight: "solid 0.5px #6160601c",
            boxSizing: "border-box",
            px: 5,
          }}
        >
          <Header />

          <Box
            sx={{
              width: "100%",
              height: "62%",
              boxSizing: "border-box",
              placeItems: "center",
              overflow: "hidden",
              border: "solid 0.1px #8d8d8d3a",
            }}
          >
            {isLoading ? <LoadingList /> : <ListGrid />}
          </Box>
          <Pagination
            onChange={handleChange}
            page={felterData.page}
            count={state?.ListApply?.totalPages}
            sx={{
              mt: "auto",
              alignSelf: "center",
              mb: 1,
            }}
          />
        </Box>

        {/* right side profile card  */}
        <Box
          sx={{
            width: "30vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing:"border-box",
            p:2
          }}
        >
         <Box sx={{boxSizing:"border-box",border:"1px #ddd dashed",height:"100%",width:"100%", borderRadius:"15px",px:1}}>



             <Box sx={{height:"40%",width:"100%",borderBottom:"1px dashed #ddd",placeItems:"center",boxSizing:"border-box",p:2}} >

              <Avatar sx={{height:"8rem",width:"8rem"}}/>

              <Typography sx={{fontSize:"1.6rem",fontFamily:"system-ui",fontWeight:600,color:"#00010ed0",bt:1}} > Khalid Arazani </Typography>
              <Typography sx={{fontSize:"0.9rem",fontFamily:"monospace",fontWeight:600,color:"#00010eac",bt:1}} > Frontend React Developer </Typography>
             </Box>

             <Box sx={{height:"60%",width:"100%",placeItems:"center",boxSizing:"border-box",p:2}}>

              
             </Box>



         </Box>
          
        </Box>
      </Box>
    </>
  );
}
