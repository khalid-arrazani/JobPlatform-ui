import { Typography, Box, IconButton, Modal,Avatar } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


import SearchAndFilter from "./CardFilterAndSearch";




export default function ModalOpenPositions ( {open , setOpen }){
 

 const handleClose = ()=>{
    setOpen(false)
  }

    return <>

     <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "95%",
            width: "60%",
            bgcolor: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
            outline: "none",
            display:"flex",
            flexDirection:"column"
          }}
        >
          
          <Box  sx={{
            height: "20%",
            width: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
            px:"1rem",
            py:"1rem",
            alignItems:"center",
            display:"flex",flexDirection:"column",pt:0.5,justifyContent:"space-between"
          }} >

         <Box sx={{
            boxSizing: "border-box",
            alignContent:"center",
            width:"100%",height:"fitContent",display:"flex",gap:1
          }}>

            <Avatar 
         src="https://res.cloudinary.com/dzppmepd9/image/upload/v1786651831/profile-images/rppnczrtt7z2zdvjehe0.png"
         sx={{height:"3.5rem",width:"3.5rem",borderRadius:"10px",boxSizing: "border-box",border:"1px solid #ddd",p:1}}
         />


         <Box sx={{
            boxSizing: "border-box",
            alignContent:"center",
            
          }}>
            <Typography sx={{fontFamily:"system-ui",color:"#010318d0",fontWeight:600,fontSize:"1.1rem"}} >Google Open Positions</Typography>

            <Typography sx={{fontFamily:"monospace",color:"#0205226f"}} >Explore all current job openings at Google. </Typography>

         </Box>
        

         </Box>

          <SearchAndFilter/>


         







          </Box>











          <Box  sx={{
            height: "72%",
            width: "100%",
   
            overflow: "hidden",
            boxSizing: "border-box",borderTop:"1px solid #ddd",
            borderBottom:"1px solid #ddd"
           
          }} >



          </Box>




          <Box  sx={{
            height: "10%",
            width: "100%",

            overflow: "hidden",
            boxSizing: "border-box",display:"flex" , justifyContent:"center",alignItems:"center"
           
          }} >
            <Stack spacing={2}>
            <Pagination
              // onChange={handleChange}
              // count={state.JobInfo?.totalPages}
            />
          </Stack>
          </Box>


          
        </Box>
      </Modal>
    
    </>
}