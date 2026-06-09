import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingList() {
  return (
    <Box sx={{ height: "70vh", width: "100%" ,display:"flex", flexDirection:"column" , alignItems:"center" }}>
        {[...Array(4)].map((_, index) => (
  <Skeleton sx={{width:"80%",height:"40%" }} key={index} />
))}
      
    </Box>
  );
}