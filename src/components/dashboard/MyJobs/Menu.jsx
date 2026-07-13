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

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DeleteMyJobs, ToggleStatusJob } from "../../../logic/api/job/Job";
import { useJob } from "../../../logic/context/JobContext";
import { useAuth } from "../../../logic/context/AuthContext";

export default function MenuCard({ JobId,Status }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const {fetchCompany} = useJob();
    const { setSnackBar } = useAuth();

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (event, jobId) => {
    try {
      const deleteJob = await DeleteMyJobs(jobId);
      setSnackBar({
        open: true,
        message: deleteJob.message,
        severity: "success",
      });
      fetchCompany()
      setAnchorEl(null);
    } catch (err) {
      console.log(err);
    setSnackBar({
        open: true,
        message: err?.response?.data.message,
        severity: "error",
      });
    }
  };

  const handleStatus = async (event, jobId) => {
    try {
      const deleteJob = await ToggleStatusJob(jobId);
      setSnackBar({
        open: true,
        message: deleteJob.message,
        severity: "success",
      });
      fetchCompany()
      setAnchorEl(null);
    } catch (err) {
      console.log(err);
    setSnackBar({
        open: true,
        message: err?.response?.data.message,
        severity: "error",
      });
    }
  };

  return (
    <>
      <IconButton
        onClick={(e) => handleOpen(e, JobId)}
        sx={{
          position: "absolute",
          top: "13%",
          right: "2%",
          ":hover": { bgcolor: "#dddddd00" },
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Edit Job
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <VisibilityOutlinedIcon fontSize="small" />
          </ListItemIcon>
          View Job
        </MenuItem>

        <MenuItem onClick={(e) => handleStatus(e, JobId)}>
          <ListItemIcon>
            <PauseCircleOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>

          {Status == "closed" ? "Active Job" : "Close Job" }
          
        </MenuItem>

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
