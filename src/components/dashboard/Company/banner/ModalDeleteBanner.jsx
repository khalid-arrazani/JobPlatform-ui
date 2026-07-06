

import { Typography, Box, IconButton, Button,Modal } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";



export default function ModalDeleteBanner ({open , setOpen}){
     
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
      }} >
      <Box sx={{height:"19rem" , width:"28rem" , bgcolor: "#fff",borderRadius:"20px",overflow:"hidden",boxSizing:"border-box"}}>

        <Box  sx={{height:"20%" , width:"100%" , bgcolor: "#242323"}}  >
            <Typography>
              Remove background photo?
            </Typography>

            <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
     
        <Box  sx={{height:"57.5%" , width:"100%" , bgcolor: "#776464"}}  ></Box>


        <Box  sx={{height:"23%" , width:"100%" , bgcolor: "#aea1a1"}}  >
            <Button>Cancel</Button>

            <Button>Yes, delete it</Button>
        </Box>

      </Box>

    </Modal>
    
    </>
}