import { Typography, Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";





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
            
          }}
        >
          <Box  sx={{
            height: "18%",
            width: "100%",
            bgcolor: "#1b0c0c",
            overflow: "hidden",
            boxSizing: "border-box",
           
          }} ></Box>
          <Box></Box>
          <Box></Box>
          
        </Box>
      </Modal>
    
    </>
}