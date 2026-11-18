import { Box,Typography,TextField,Button} from "@mui/material";

import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


export default function Header (){
  

    return <>
      <Box
            sx={{
              height: "fit-content",
              width: "100%",
              display:"flex",
              justifyContent:"space-between",
              borderBottom:"solid 0.1px #8d8d8d3a",
              boxSizing:"border-box",flexDirection:"column",p:1
            }}
          >
    
             
            <Box  sx={{display:"flex",justifyContent:"space-between",mb:1}} >
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "#050713c3",
                  fontFamily:"monospace"
                }}
              >
                 Saved Jobs
              </Typography>
              
            </Box>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#6f6e6ee7",
                fontFamily:"monospace"
              }}
            >
              Jobs you've saved for later.
            </Typography>
          
          </Box></>
}