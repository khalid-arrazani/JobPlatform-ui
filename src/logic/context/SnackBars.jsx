import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { AuthContext } from "../context/AuthContext";

export default function SimpleSnackbar() {

 const { snackBar ,setSnackBar } = React.useContext(AuthContext);

 
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar({
      open: false,
      message: "",
      severity: "",
    });
  };

  return (
    <Snackbar
      open={snackBar.open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        onClose={handleClose}
        severity={snackBar.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackBar.message}
      </Alert>
    </Snackbar>
  );
}