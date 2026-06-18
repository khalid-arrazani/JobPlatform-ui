import { Box } from "@mui/material";
export default function CompanyPage() {
  return (
    <>
      <Box
        sx={{
          height: "92.3vh ",
          width: "100vw",
          bgcolor: "#bebfcd",
          boxSizing: "border-box",
          px: 10,
          pt: 3,
        }}
      >
        <Box
          sx={{
            height: "50vh ",
            width: "100%",
            bgcolor: "#ffffff",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "65% ",
              width: "100%",
              bgcolor: "#544f4f",
              backgroundImage: `url(https://images.openai.com/static-rsc-4/PHTER0Rl3I33Op-D5zV-G2DiAvA8q7wWIyh26XkgQPQDLkaVy0ninCSxtw5D84s1R3QZ2RlIrTKyfqdScSXR0daTG49X5_ZoLulPPtadkou9hOtdjL9scDKcdLqAM07zM78smzlRZ8qulEA13D47BhrNhtWd9zjCWkC6DNX83nqnJ71glVmKZiVmMG64pN4f?purpose=fullsize)`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          ></Box>

          <Box sx={{ height: "35% ", width: "100%", bgcolor: "#ffffff" }}>
           
           <Box sx={{ height: "9.5rem ", width: "9.5rem", bgcolor: "#2e2c2c" ,position:"absolute", top:"30%",left:"9%",borderRadius:"20px" }}></Box>
          </Box>

        </Box>
      </Box>
    </>
  );
}
