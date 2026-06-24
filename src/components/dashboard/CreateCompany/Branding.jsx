import { Box,Card } from "@mui/material"
import DomainIcon from '@mui/icons-material/Domain';

export default function Branding (){


    return <>
     <Box
        sx={{
          height: "70%",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems:"center",
          gap: 2,
          borderTop: "solid 0.5px #b3b0b069",
        }}
      >
        <Box sx={{width:"100%",height:"70%",borderRadius:"15px",overflow:"hidden",border: "solid 0.5px #b3b0b069",}}>
            <Box sx={{width:"100%",height:"68%",bgcolor:"#ffffff"}}></Box>
            <Box sx={{width:"100%",height:"32%",bgcolor:"#ffffff",position:"relative",borderTop: "solid 0.5px #b3b0b069",}}>

                <Box sx={{width:"8rem",height:"8rem",position:"absolute",top:-75,left:25,p:0,bgcolor:"#fff",borderRadius:"25px",border: "solid 0.5px #b3b0b069",display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <DomainIcon sx={{width:"70%",height:"70%",color:"#d3d3d3"}} />
                </Box>
            </Box>
        </Box>

      




      </Box>
    </>
}