import { Card, Typography, Box } from "@mui/material";
import {
  Laptop,
  Briefcase,
  HeartPulse,
  DollarSign,
  Dumbbell,
  Utensils,
  Plane,
  GraduationCap,
  Users,
  Shield,
  CalendarDays,
  Baby,
  Monitor,
} from "lucide-react";

const companyBenefits = [
  {
    label: "Remote Work",
    icon: Laptop,
    color: "#06B6D4",
    bg: "#ECFEFF",
  },
  {
    label: "Hybrid Work",
    icon: Laptop,
    color: "#0891B2",
    bg: "#E0F2FE",
  },
  {
    label: "Flexible Hours",
    icon: Briefcase,
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    label: "Health Insurance",
    icon: HeartPulse,
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    label: "Dental Insurance",
    icon: HeartPulse,
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    label: "Vision Insurance",
    icon: HeartPulse,
    color: "#B91C1C",
    bg: "#FEF2F2",
  },
  {
    label: "Paid Time Off",
    icon: CalendarDays,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    label: "Paid Sick Leave",
    icon: CalendarDays,
    color: "#15803D",
    bg: "#F0FDF4",
  },
  {
    label: "Parental Leave",
    icon: Baby,
    color: "#EC4899",
    bg: "#FDF2F8",
  },
  {
    label: "Performance Bonus",
    icon: DollarSign,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    label: "Annual Bonus",
    icon: DollarSign,
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    label: "Retirement Plan",
    icon: DollarSign,
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    label: "Stock Options",
    icon: DollarSign,
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    label: "Gym Membership",
    icon: Dumbbell,
    color: "#8B5CF6",
    bg: "#F3E8FF",
  },
  {
    label: "Free Lunch",
    icon: Utensils,
    color: "#F97316",
    bg: "#FFF7ED",
  },
  {
    label: "Free Snacks",
    icon: Utensils,
    color: "#EA580C",
    bg: "#FFF7ED",
  },
  {
    label: "Transportation Allowance",
    icon: Plane,
    color: "#0EA5E9",
    bg: "#F0F9FF",
  },
  {
    label: "Company Laptop",
    icon: Monitor,
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    label: "Training Budget",
    icon: GraduationCap,
    color: "#F59E0B",
    bg: "#FEF3C7",
  },
  {
    label: "Learning & Development",
    icon: GraduationCap,
    color: "#D97706",
    bg: "#FEF3C7",
  },
  {
    label: "Career Growth",
    icon: GraduationCap,
    color: "#CA8A04",
    bg: "#FEF9C3",
  },
  {
    label: "Team Events",
    icon: Users,
    color: "#EC4899",
    bg: "#FDF2F8",
  },
  {
    label: "Work From Home Stipend",
    icon: Laptop,
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    label: "Wellness Program",
    icon: Dumbbell,
    color: "#7C3AED",
    bg: "#F3E8FF",
  },
  {
    label: "Employee Discounts",
    icon: Users,
    color: "#DB2777",
    bg: "#FDF2F8",
  },
  {
    label: "Relocation Assistance",
    icon: Plane,
    color: "#0284C7",
    bg: "#F0F9FF",
  },
  {
    label: "Life Insurance",
    icon: Shield,
    color: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    label: "Mental Health Support",
    icon: HeartPulse,
    color: "#E11D48",
    bg: "#FFF1F2",
  },
];

import { CircleCheckBig } from "lucide-react";
import EmptyBenefits from "./IfEmpty/EmptyBenefits";

const CompanyBenefits = ({ CompanyInfo }) => {
  const selectedBenefitObjects = companyBenefits.filter((benefit) =>
    CompanyInfo?.benefits.includes(benefit.label),
  );

  return (
    <Box sx={{
          width: "100%",
          borderRadius: "10px",
          p: 1.5,
          boxSizing: "border-box",
          bgcolor:"#fff"
        }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1,mb:'8px' }}>  <CircleCheckBig size={"1.2rem"} color="#66a8f4"  />
      <Typography
        variant="h6"
         sx={{
            fontWeight: 600,
            fontFamily: "monospace",
            color: "#0c031fb2",
            fontSize: "1rem",
            
          }}
      >
        
        Company Benefits
      </Typography></Box>

      { CompanyInfo?.benefits?.length === 0 ? (
        <EmptyBenefits />
      ) : (

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.8,
            justifyContent: "space-around",
          }}
        >
          {selectedBenefitObjects.map((item) => {
            const Icon = item.icon;

            return (
              <Box>
                <Card
                  sx={{
                    p:1,
                    borderRadius: "8px",
                    display: "flex",
                    transition: "0.5s",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 30px rgba(15, 23, 42, 0.28)",
                      borderColor: "#dbeafe",
                    },
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: `${item.bg}`,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    border: "solid 0.5px #8d8d8d1f",
                  }}
                >
                  <Box sx={{ color: item.color }}>
                    <Icon color={item.color} width={"1.2rem"} />
                  </Box>

                  <Typography sx={{fontSize:"0.8rem",fontFamily:"monospace"}}>
                    {item.label}
                  </Typography>
                </Card>
              </Box>
            );
          })}
        </Box>

      )}
    </Box>
  );
};


export default CompanyBenefits;
