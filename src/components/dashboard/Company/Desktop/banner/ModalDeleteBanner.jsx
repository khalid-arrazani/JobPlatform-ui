import { Typography, Box, IconButton, Button, Modal, CircularProgress } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAuth } from "../../../../logic/context/AuthContext";
import { deleteCompanyBnner } from "../../../../logic/api/company/Company";

export default function ModalDeleteBanner({ open, setOpen,fetchCompany }) {

      const [reload , setReload] = useState(false)
        const { setSnackBar } = useAuth();

    const DeleteCompanyBanner = async () => {
        setReload(true)
          try {
            const res = await deleteCompanyBnner();
      
            setSnackBar({
              open: true,
              message: res?.message,
              severity: "success",
            });
      
            fetchCompany();

            setOpen(false);
      
          } catch (error) {
            console.log(error?.response?.data);
            setSnackBar({
              open: true,
              message: error?.response?.data?.message,
              severity: "error",
            });
          }finally{
            setReload(false)
          }
        };



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
            height: "19rem",
            width: "28rem",
            bgcolor: "#ffffffc9",
            borderRadius: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
            outline:'none'
          }}
        >
          <Box
            sx={{
              height: "20%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              px: 2,
              boxSizing: "border-box",
            
              justifyContent: "space-between",  bgcolor:"#f3fcff9a"
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "system-ui",
                color: "#050920",
              }}
            >
              Remove background photo?
            </Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              height: "57.5%",
              width: "100%",

              display: "flex",
              alignItems: "center",
              px: 2,
              boxSizing: "border-box",
              justifyContent: "center",
              borderTop: " solid  1px #7b7b7b3b",
              borderBottom: " solid  1px #7b7b7b3b",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontFamily: "system-ui",
                color: "#050920dd",
                display: "flex",
                alignItems: "center",
                px: 3,

                textAlign: "center",
                fontSize: "1.4rem",
              }}
            >
              This background photo helps others get to know you better.
              Deleting it will remove it from your profile.
            </Typography>
          </Box>

          <Box
            sx={{
              height: "23%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",

           
              px: 2,   bgcolor:"#fff4f3"
            }}
          >
            <Button onClick={handleClose}  >Cancel</Button>

            <Button variant="contained" disabled={reload} sx={{ bgcolor: "#de0e0ed6" , display:"flex", gap:2}} onClick={DeleteCompanyBanner} >
              Yes, delete it
               {reload ? <CircularProgress  enableTrackSlot size="25px" aria-label="Loading…" /> :null }
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
