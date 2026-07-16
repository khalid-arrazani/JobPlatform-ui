import {
  Box,
  Card,
  Skeleton,
  Stack,
} from "@mui/material";

export default function SkeletonJobs (){

    return <>
    <Stack spacing={2} sx={{placeItems:"center"}} >
      {[...Array(2)].map((_, i) => (
        <Card key={i} sx={{ p: 3 ,height:"5rem",border:"dashed 1px #ddd",boxShadow:"none",width:"90%"}}>
          <Stack   sx={{width:"100%"}} spacing={2}>
            <Skeleton variant="rounded" width={60} height={60} />
            <Box sx={{width:"100%"}}>
              <Skeleton sx={{width:"90%"}} height={30} />
              <Skeleton sx={{width:"50%"}} />
              <Skeleton sx={{width:"25%"}} />
            </Box>
          </Stack>
        </Card>
      ))}
    </Stack>
    </>
}