import { Card, Typography, Box, Button, Collapse } from "@mui/material";






export default function EmptyBenefits() {
  return (
    <>
      <Box sx={{height:"10rem",width:"100%",border:"dashed 1px #d0d0d0",borderStyle:"dashed"}} >
        <Typography sx={{fontWeight:600,fontFamily:"-apple-system",color:"#0b0b14",fontSize:"2rem"}}>Add Benefits </Typography>
        <Button>Add</Button>

      </Box>
    </>
  );
}
