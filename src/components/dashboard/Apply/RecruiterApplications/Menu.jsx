import { useState } from "react";

import {
  Menu,
  MenuItem,
  IconButton,
  Divider,
  ListItemIcon,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { MdOutlineCancelScheduleSend } from "react-icons/md"
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';


import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useNavigate } from "react-router-dom";
import ModalWarning from "../JoobSeekerApplications/ModalWarning";
import SelectStatus from "./selectStatus";







export default function MenuApply({ JobId ,ApplyId}) {
    const navigate = useNavigate();
  


  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={ ()=> navigate(`/Dashboard/Jobs/Details/${JobId}`)}>
          <ListItemIcon>
         <VisibilityOutlinedIcon fontSize="small" />

          </ListItemIcon>
          View Job
        </MenuItem>
        
        
        
        <Divider sx={{ my: 0.5 }} />
        
        <MenuItem
       
          sx={{ color: "error.main" }}
        >
          <ListItemIcon>
            <ScheduleSendIcon  />
          </ListItemIcon>
          < SelectStatus  ApplyId={ApplyId}  />
        </MenuItem>

        

       
      </Menu>
    </>
  );
}
