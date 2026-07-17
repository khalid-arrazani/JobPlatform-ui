import { useState } from "react";

import {
  Menu,
  MenuItem,
  IconButton,
  Divider,
  ListItemIcon,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";


import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useJob } from "../../../../logic/context/JobContext";
import { useAuth } from "../../../../logic/context/AuthContext";
import { DeleteMyJobs } from "../../../../logic/api/job/Job";
import EditeJobModal from "./EditeDraftModal";






export default function MenuCardDraft({ JobId,  jobInfo }) {
  const [openEditeJobModal, setEditeJobModal] = useState(false);

  const [openMyJobDetailsModal, setMyJobDetailsModal] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const { fetchCompanyWitoutReload } = useJob();
  const { setSnackBar } = useAuth();

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (event, jobId) => {
    console.log(jobId);
    try {
      const deleteJob = await DeleteMyJobs(jobId);

      setSnackBar({
        open: true,
        message: deleteJob.message,
        severity: "success",
      });

      fetchCompanyWitoutReload();
      setAnchorEl(null);
    } catch (err) {
      console.log(err?.response);
      setSnackBar({
        open: true,
        message: err?.response?.data.message,
        severity: "error",
      });
    }
  };


  const handleModalEdite = async () => {
    setEditeJobModal(true);
  };

  return (
    <>
      <IconButton
        onClick={(e) => handleOpen(e, JobId)}
       

        style={{padding:2}} 
        
        sx={{
          ":hover": { bgcolor: "#dddddd00"
           }
           ,bgcolor:"#f5f5f5",borderRadius:"5px",
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              borderRadius: 3,
              minWidth: 220,
              p: 1,
              boxShadow: "0 20px 40px rgba(15,23,42,.15)",
            },
          },
        }}
      >
        <MenuItem onClick={(e) => handleModalEdite(e, JobId, jobInfo)}>
          <ListItemIcon>
            <EditOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Edit Job
        </MenuItem>
        
        <EditeJobModal
          open={openEditeJobModal}
          setOpen={setEditeJobModal}
          jobInfo={jobInfo}
        />



        <Divider sx={{ my: 0.5 }} />

        <MenuItem
          onClick={(e) => handleDelete(e, JobId)}
          sx={{ color: "error.main" }}
        >
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon fontSize="small" color="error" />
          </ListItemIcon>
          Delete Job
        </MenuItem>
      </Menu>
    </>
  );
}
