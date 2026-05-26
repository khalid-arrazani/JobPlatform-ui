import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleSnackbar() {

  const [open, setOpen] = React.useState(true);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
    </>
  );

  return (
    <div style={{}}>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        sx={{m:0,p:0}}
      />
    </div>
  );
}