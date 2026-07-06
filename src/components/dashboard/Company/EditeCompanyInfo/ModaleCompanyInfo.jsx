import { Typography, Box, IconButton, Button, Modal, CircularProgress } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAuth } from "../../../../logic/context/AuthContext";


export default function ModalInfo({ open, setOpen , fetchCompany }) {

      const [reload , setReload] = useState(false)
        const { setSnackBar } = useAuth();

    // const DeleteCompanyBanner = async () => {
    //     setReload(true)
    //       try {
    //         const res = await deleteCompanyBnner();
      
    //         setSnackBar({
    //           open: true,
    //           message: res?.message,
    //           severity: "success",
    //         });
      
    //         fetchCompany();

    //         setOpen(false);
      
    //       } catch (error) {
    //         console.log(error?.response?.data);
    //         setSnackBar({
    //           open: true,
    //           message: error?.response?.data?.message,
    //           severity: "error",
    //         });
    //       }finally{
    //         setReload(false)
    //       }
    //     };



  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
            outline:'none'
          }}
        >
            <Box sx={{width:"100%", height:"10%",bgcolor:"#eeecec",borderBottom:"solid 1px #c9c9c9c6"}}>

            </Box>



            <Box sx={{width:"100%", height:"90%",bgcolor:"#eeecec",display:"flex",boxSizing:"border-box"}}>

                <Box sx={{width:"30%", height:"100%",borderRight:"solid 1px #c9c9c9c6"}}></Box>

                <Box sx={{width:"70%", height:"100%"}}></Box>

            </Box>

        </Box>
      </Modal>
    </>
  );
}
