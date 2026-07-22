import {
  Box,
  Card,
  Typography,

  Button,

  Modal,
} from "@mui/material";




import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { Badge } from "@mui/material";

import { RiDeleteBinLine } from "react-icons/ri";

import { useAuth } from "../../../../logic/context/AuthContext";
import { CancelApplyForAJob } from "../../../../logic/api/apply/Apply";
import { useApply } from "../../../../logic/context/ApplyContext";

export default function ModalWarning ({JobId,open, setOpen}){
 const { setSnackBar } = useAuth();
  const {ApplyJobs} = useApply()


 

  const CancelApplication = async () => {
    try {
      const applyjobs = await CancelApplyForAJob(JobId);

      setSnackBar({
        open: true,
        message: applyjobs?.message,
        severity: "success",
      });
      setOpen(false)
      ApplyJobs();
    } catch (error) {
      console.log(error.response);
      setSnackBar({
        open: true,
        message: error.response?.data.message,
        severity: "error",
      });
    }
  };

  function handleCloose() {
    setOpen(false)
  }
    return <>
    <Modal
        open={open}
        onClose={handleCloose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          sx={{
            width: "28rem",
            height: "18rem",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ height: "75%", width: "100%" ,display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",gap:1 ,boxSizing: "border-box", }}>


            <Box sx={{p:2.5,bgcolor:"#ffd5d5",width:"fit-Content",borderRadius:"50%",textAlign:"center"}} >
            <Badge
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <ErrorRoundedIcon
                  sx={{
                    color: "#ef4444",
                    bgcolor: "#ffffff66",
                    borderRadius: "50%",
                    fontSize: 30,
                  }}
                />
              }
            >
              
              <RiDeleteBinLine  style={{fontSize: 60, color: "#ef4444",}}/>
            </Badge></Box>

            <Typography sx={{textAlign:"center",fontWeight:600}}>Cancel Application?</Typography>
            <Typography sx={{textAlign:"center",width:"85%",fontSize:"0.8rem"}}>Are you sure you want to cancel your application for this job? Thid action cannot be undone.</Typography>








          </Box>

          <Box
            sx={{
              height: "25%",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              boxSizing: "border-box",
              px: 2,
              borderTop: "solid 1px #ddd",
              alignItems: "center",
            }}
          >
            <Button
             onClick={()=>setOpen(false)}
              sx={{
                height: "70%",
                textTransform: "none",
                color: "#080616cf",
                border: "solid 1px #08041d53",
                fontFamily: "system-ui",
                fontWeight: 400,
              }}
            >
              Keep Application
            </Button>
            <Button
             onClick={CancelApplication}
              sx={{
                height: "70%",
                textTransform: "none",
                color: "#ffffff",
                bgcolor: "#bf0000c6",
                fontFamily: "system-ui",
                fontWeight: 400,
              }}
            >
              Yes, Cancel Application
            </Button>
          </Box>
        </Card>
      </Modal></>
}