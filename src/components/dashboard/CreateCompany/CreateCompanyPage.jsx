import { Card, Typography, Box, Divider } from "@mui/material";
import createCompany from "./../../../assets/CreateCompany.svg";

export default function CreateCompanyPage() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100vw",
          bgcolor: "#dfdfdf",
          display: "flex",
          boxSizing: "border-box",
          gap: 1,
        }}
      >
        <Box
          sx={{
            height: "100%",
            bgcolor: "#e8e6e6",
            boxSizing: "border-box",
            width: "25%",
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Card
            sx={{
              height: "35%",
              width: "100%",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
             
              <img src={createCompany} alt="Idea" />
             
              
            </Box>

             <Typography sx={{textAlign:"center",fontFamily:'ui-monospace',fontWeight:600,color:"#1a1a25e4"}}> Create your company profile</Typography>

          </Card>

          <Box
            sx={{
              height: "50%",
              bgcolor: "#424141",
              width: "100%",
              borderRadius: "10px",
            }}
          ></Box>
        </Box>

        <Box sx={{ height: "100%", bgcolor: "#fff", width: "75%" }}></Box>
      </Box>
    </>
  );
}
