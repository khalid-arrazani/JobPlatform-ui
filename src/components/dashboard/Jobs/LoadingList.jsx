import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function LoadingList() {
  return (
    <Box sx={{ width: "80%" ,display:"flex", flexDirection:"column" , alignItems:"center" }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}