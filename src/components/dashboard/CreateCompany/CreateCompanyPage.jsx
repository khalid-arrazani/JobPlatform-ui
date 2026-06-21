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
              boxSizing: "border-box",
              px: 1,
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

            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "ui-monospace",
                fontWeight: 600,
                color: "#1a1a25e4",
                mb: 1,
              }}
            >
              {" "}
              Create your company profile
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "ui-rounded",
                fontWeight: 600,
                color: "#010101a8",
                textWrap: "wrap",
                fontSize: "0.8rem",
              }}
            >
              {" "}
              A complete profile helps candidates learn more about your company.
            </Typography>
          </Card>

          <Card
            sx={{
              height: "50%",
              bgcolor: "#ffffff",
              width: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              boxSizing: "border-box",
              px: 2.5,py:2
            }}
          >
           <Typography
              sx={{
                
                fontFamily: "ui-monospace",
                fontWeight: 600,
                color: "#1a1a25de",
                mb: 1,
                
              }}
            >
              {" "}
              Why is this important?
            </Typography>
          </Card>
        </Box>

        <Box sx={{ height: "100%", bgcolor: "#fff", width: "75%" }}></Box>
      </Box>
    </>
  );
}
