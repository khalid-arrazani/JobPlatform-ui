import { Card, Typography, Box, Divider } from "@mui/material";
import createCompany from "./../../../assets/CreateCompany.svg";
import { ShieldCheck, Users, Award, Shield } from "lucide-react";

const companyProfileBenefits = [
  {
    title: "Build trust",
    description: "A verified company profile builds trust with candidates.",
    icon: <ShieldCheck color="#0891B2" size={20} />,
    bgColor: "#ECFEFF",
  },
  {
    title: "Attract top talent",
    description: "Showcase your company culture and values.",
    icon: <Users color="#4F46E5" size={20} />,
    bgColor: "#EEF2FF",
  },
  {
    title: "Stand out",
    description: "A complete profile makes your jobs more attractive.",
    icon: <Award color="#F59E0B" size={20} />,
    bgColor: "#FEF3C7",
  },
  {
    title: "Your information is secure",
    description: "We never share your data with third parties.",
    icon: <Shield color="#9333EA" size={20} />,
    bgColor: "#F3E8FF",
  },
];
export default function CreateCompanyPage() {
  return (
    <>
      <Box
        sx={{
          height: "92.3vh",
          width: "100vw",
          bgcolor: "#F8FAFC",
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        {/* left side */}
        <Box
          sx={{
            height: "100%",
            bgcolor: "#FFFFFF",
            boxSizing: "inherit",
            width: "25%",
            px: 2.5,
            py: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Card
            sx={{
              height: "35%",
              width: "100%",
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.08)",
              bgcolor: "#FFFFFF",
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
                fontWeight: 700,
                color: "#0f172ae2",
                mb: 1,
                fontSize: "1.25rem",
              }}
            >
              Create your company profile
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "ui-rounded",
                fontWeight: 600,
                color: "#64748B",
                textWrap: "wrap",
                fontSize: "0.9rem",
              }}
            >
              A complete profile helps candidates learn more about your company.
            </Typography>
          </Card>

          <Card
            sx={{
              height: "fit-Content",
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              boxSizing: "border-box",
              p: 2,
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
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

            {companyProfileBenefits.map((item) => (
              <Card
                key={item.title}
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 1,
                  p: 0.7,
                  borderRadius: "10px",
                  border: "solid 1px #f2f2f2",
                  transition: "all .25s ease",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
                  bgcolor: item.cardBgColor,
                  "&:hover": {
                    backgroundColor: item.bgColor,
                  transform: "translateX(4px)",
                  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.10)",
                  },
                }}
              >
                <Box
                  sx={{
                   minWidth: 45,
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  backgroundColor: item.bgColor,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                     fontWeight: 600,
                    color: "#0F172A",
                    mb: 0.1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography sx={{ fontSize: "0.7rem",  color: "#64748B", }}>
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Card>
        </Box>

        {/* right side */}

        <Box
          sx={{
            height: "100%",
        bgcolor: "#F8FAFC",
            width: "75%",
            borderLeft: "solid 0.5px #d5d5d5",
          }}
        ></Box>
      </Box>
    </>
  );
}
