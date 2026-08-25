import { Typography, Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";





export default function ModalOpenPositions ( ){
  const  [open , setOpen ] = useState(false)

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
            width: "95%",
            bgcolor: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
            outline: "none",
          }}
        >
          
        </Box>
      </Modal>
    
    </>
}