import { Typography, Box, IconButton, Modal,Avatar } from "@mui/material";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";




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
            width: "70%",
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
            height: "18%",
            width: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
            px:"1rem",
            alignContent:"center"
          }} >


         <Avatar 
         src="https://res.cloudinary.com/dzppmepd9/image/upload/v1786651831/profile-images/rppnczrtt7z2zdvjehe0.png"
         sx={{height:"5rem",width:"5rem",borderRadius:"18px",boxSizing: "border-box",border:"1px solid #ddd",p:1}}
         />
         <Box>
          
         </Box>



          </Box>











          <Box  sx={{
            height: "72%",
            width: "100%",
   
            overflow: "hidden",
            boxSizing: "border-box",borderTop:"1px solid #ddd",
            borderBottom:"1px solid #ddd"
           
          }} ></Box>




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