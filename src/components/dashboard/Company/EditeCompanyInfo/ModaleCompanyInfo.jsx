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
            bgcolor: "#ffffffc9",
            borderRadius: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
            outline:'none'
          }}
        >

        </Box>
      </Modal>
    </>
  );
}
