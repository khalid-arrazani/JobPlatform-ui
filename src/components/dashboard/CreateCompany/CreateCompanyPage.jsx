import { Card, Typography, Box, Divider } from "@mui/material";
import createCompany from "./../../../assets/CreateCompany.svg";
import { ShieldCheck, Users, Award, Shield } from "lucide-react";

const companyProfileBenefits = [
  {
    title: "Build trust",
    description: "A verified company profile builds trust with candidates.",
    icon: <Award />,
    iconColor: "#06B6D4",
    bgColor: "#E0F7FA",
  },
  {
    title: "Attract top talent",
    description: "Showcase your company culture and values.",
    icon: <Users />,
    iconColor: "#6366F1",
    bgColor: "#EEF2FF",
  },
  {
    title: "Stand out",
    description: "A complete profile makes your jobs more attractive.",
    icon: <  Shield />,
    iconColor: "#F59E0B",
    bgColor: "#FEF3C7",
  },
  {
    title: "Your information is secure",
    description: "We never share your data with third parties.",
    icon: <ShieldCheck />,
    iconColor: "#6366F1",
    bgColor: "#F3F0FF",
    cardBgColor: "#F5F3FF",
  },
];
export default function CreateCompanyPage() {
  return (
    <>
      <Box
        sx={{
          height: "93vh",
          width: "100vw",
          bgcolor: "#d0cecedb",
          display: "flex",
          boxSizing: "border-box",
          gap: 3,
        }}
      >
         {/* left side */}
        <Box
          sx={{
            height:"100%",
            bgcolor: "#e8e6e6",
            boxSizing:"inherit",
            width: "25%",
            px: 2.5,
            py: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent:"space-around",
            
            
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
              height: "fit-Content",
              bgcolor: "#ffffff",
              width: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              boxSizing: "border-box",
              px: 2,
              py: 2,
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
              Why is this important?
            </Typography>

            {companyProfileBenefits.map((item)=>
                
            <Card key={item.title} sx={{ display: "flex", gap: 2 ,mt:1,p:0.7,borderRadius:"10px",border:"solid 1px #e7e1e1",boxShadow:"-moz-initial"}}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  backgroundColor: item.bgColor,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
               {item.icon}
              </Box>

              <Box>
                <Typography sx={{fontSize:"0.8rem",fontWeight:600,color:"#111220ef",fontFamily:"system-ui"}}>{item.title}</Typography>

                <Typography sx={{fontSize:"0.7rem",color:"#4e4d4d"}}>
                  {item.description}
                </Typography>
              </Box>
            </Card>
           )}

          </Card>
        </Box>

        {/* right side */}
        <Box sx={{ height: "100%", bgcolor: "#fff", width: "75%" }}></Box>
      </Box>
    </>
  );
}
