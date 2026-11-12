 

import { Box, Button,Modal   } from "@mui/material";
import { useParams } from "react-router-dom";
 
 

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



  return (
    <>
    <Modal
    open={open}
    onClose={onClose}
    sx={{display:"flex",alignItems:"center",justifyContent:"center"}}
    >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            overflow: "auto",boxSizing:"border-box"  

          }}
        >
         
            <Box
              sx={{
                height: "auto",
                width: "100%",
                background: "#f7f7f7e9" ,
                pb:"6rem",
                boxSizing:"border-box"
              }}
            >
              <Box
              sx={{

                width: "100%",
                background: "#f7f7f7",
                display:"flex",
               
              }}
            >
              <Button
                startIcon={<KeyboardBackspaceIcon sx={{width:"0.8rem"}} />}
                onClick={() => navigate(-1)}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#ae2eb0ec",
                  borderRadius: "12px",
                  px: 1.5,

                  mb: 0.8,
                  ml: 1.5,
                  transition: "all 0.2s ease",

                  "&:hover": {
                    backgroundColor: "rgba(139, 92, 246, 0.08)",
                    color: "#f02bf3dc",
                    transform: "translateX(-3px)",
                  },
                  display: "flex",
                  alignContent: "center",
                  fontSize:"0.78rem"
                }}
              >
                Go Back
              </Button>

            </Box>

              <CardCompany jobInfo={jobInfo} JobId={JobId} />
              <JobOverview  jobInfo={jobInfo} />


              <DescriptionSection jobInfo={jobInfo} />
              <AbouttheCompany jobInfo={jobInfo} />
              <SkillsCard jobInfo={jobInfo} />

              {/* <Divider /> */}
            </Box>

            
        </Box>
       </Modal>
      
    </>
  );
}
