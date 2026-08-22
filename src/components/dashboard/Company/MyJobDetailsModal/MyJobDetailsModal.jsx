import { Box, Button, Divider,Modal } from "@mui/material";
import { useParams } from "react-router-dom";
 
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';

import CardCompany from "./CardCompany";
import JobOverview from "./CardJobOverview";
import SkillsCard from "./SkillsCard";
import DescriptionSection from "./DescriptionSection";
import AbouttheCompany from "./AbouttheCompany";



export default function MyJobDetailsModal({open , setOpen,jobInfo}) {
 

  const { JobId } = useParams();



  const onClose = ()=>{
    setOpen(false)
  }

  return <>
   
    <Modal
    open={open}
    onClose={onClose}
    sx={{display:"flex",alignItems:"center",justifyContent:"center"}}
    >
    
    <Box
      sx={{
        width: "95%",
        height: "95%",

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "auto",
        borderRadius:"20px"
      }}
    >
      <Box
        sx={{
          width: "100%",
          flex: 1,
          background: "#f7f7f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          pt: 1,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "70%",
            background: "#f7f7f7",
            pl: "1.9rem",
          }}
        >
          <Button
            startIcon={<UndoOutlinedIcon />}
            onClick={()=>setOpen(false)}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              color: "#ae2eb0ec",
              borderRadius: "12px",
              px: 1.5,

              mb: 0.8,
              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "rgba(139, 92, 246, 0.08)",
                color: "#f02bf3dc",
                transform: "translateX(-3px)",
              },
              display: "flex",
              alignContent: "center",
            }}
          >
            Back
          </Button>


          <CardCompany jobInfo={jobInfo} JobId={JobId}/>
          <DescriptionSection jobInfo={jobInfo}/>
          <AbouttheCompany jobInfo={jobInfo}/>
          <Divider />
        </Box>

        <Box sx={{ height: "100%", width: "28%" }}>
          <JobOverview jobInfo={jobInfo}/>
          <SkillsCard jobInfo={jobInfo}/>
          <Divider />
        </Box>
      </Box>
    </Box> 
    </Modal> 
 </>
}
