import {
  Typography,
  Box,
  Divider,
  TextField,
  MenuItem,
  InputAdornment,
  Autocomplete,
  Button,
  Card,
} from "@mui/material";

import { Building2, BriefcaseBusiness, MapPin } from "lucide-react";

import CompanyFounded from "./CompanyFounded";

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
import { useEffect, useState } from "react";
import { useAuth } from "../../../../logic/context/AuthContext";
import { UpdateMyCompany } from "../../../../logic/api/company/Company";

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

const companyBenefit = [
  "Remote Work",
  "Hybrid Work",
  "Flexible Hours",
  "Health Insurance",
  "Dental Insurance",
  "Vision Insurance",
  "Paid Time Off",
  "Paid Sick Leave",
  "Parental Leave",
  "Performance Bonus",
  "Annual Bonus",
  "Retirement Plan",
  "Stock Options",
  "Gym Membership",
  "Free Lunch",
  "Free Snacks",
  "Transportation Allowance",
  "Company Laptop",
  "Training Budget",
  "Learning & Development",
  "Career Growth",
  "Team Events",
  "Work From Home Stipend",
  "Wellness Program",
  "Employee Discounts",
  "Relocation Assistance",
  "Life Insurance",
  "Mental Health Support",
];

export default function CompanyBenefits({ CompanyInfo,fetchCompany }) {

  const { setSnackBar } = useAuth();
  const [reload , setReload]= useState(false)


  const [company_benefit, setCompany_benefit] = useState([]);

  console.log("111",company_benefit);

  const selectedBenefitObjects = companyBenefits.filter((benefit) =>
    company_benefit.includes(benefit.label),
  );


  useEffect(() => {
    setCompany_benefit(CompanyInfo?.benefits);
  }, [CompanyInfo]);



  const UpdateMyCompanyBenefits = async () => {
  
      setReload(true)

      try {
        const formData = new FormData();
  
        formData.append("benefits",company_benefit);
  
        const res = await UpdateMyCompany(formData);
  
       setSnackBar({
          open: true,
          message: res?.message,
          severity: "success",
        });
  
        fetchCompany()
      } catch (error) {
        setSnackBar({
          open: true,
          message: error?.response?.data?.message,
          severity: "error",
        });
      }finally{
        setReload(false)
      }
    };


  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "85%",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#050318d2",
            fontFamily: "system-ui",
            py: 2,
            boxSizing: "border-box",
            ml: 1,
          }}
        >
          Edite Company Benefits
        </Typography>

        <Divider />

        <Box
          sx={{
            width: "100%",
            height: "84%",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "95%",
              height: "100%",
              boxSizing: "border-box",
              p: 2.5,
            }}
          >
            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                mb: 1.5,
                width: "100%",
                height: "90%",
                border: "dashed 0.5px #c8c8c8",
                p: 2,
                px: 3,
                boxSizing: "border-box",
                overflow: "auto",
                borderRadius: "25px",
              }}
            >
              {selectedBenefitObjects?.map((benefit) => {
                return (
                  <Card
                    key={benefit.label}
                    sx={{
                      boxSizing: "border-box",
                      width: "11.5rem",
                      height: "8.5rem",
                      px: 1.8,
                      py: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "14px",
                      border: "1px solid #b8b8b89b",
                      cursor: "pointer",
                      boxShadow: "0 8px 24px rgba(39, 38, 38, 0)",
                      transition: "0.5s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 10px rgba(15, 23, 42, 0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "4rem",
                        height: "3.2rem",
                        p: "0.7rem",
                        borderRadius: "12px",
                        bgcolor: benefit.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1,
                      }}
                    >
                      {<benefit.icon size={"2rem"} color={benefit.color} />}
                    </Box>

                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "#06051cd1",
                      }}
                    >
                      {benefit.label}
                    </Typography>
                  </Card>
                );
              })}
            </Box>

            <Autocomplete
              multiple
              size="small"
              disableCloseOnSelect
              options={companyBenefit}
              value={company_benefit}
              onChange={(event, newValue) => {
                if (newValue.length <= 6) {
                  setCompany_benefit(newValue);
                }
              }}
              getOptionDisabled={(option) =>
                company_benefit.length >= 6 && !company_benefit.includes(option)
              }
              renderTags={() => null}
              sx={{
                "& .MuiAutocomplete-tag": {
                  display: "none",
                },
              }}
              slotProps={{
                popper: { sx: { transition: "none", animation: "none", m: 5 } },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={`${company_benefit.length}/6 benefits selected`}
                />
              )}
            />
          </Box>
        </Box>

        {/* Benefits */}
      </Box>

      <Box
        sx={{
          height: "15%",
          boxSizing: "border-box",
          alignSelf: "end",
          borderTop: " solid 1px #d0d0d0",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          pb: 1.5,
          px: 4,
        }}
      >
        <Button
          onClick={UpdateMyCompanyBenefits}
          variant="contained"
          size="large"
          sx={{ display: "flex", gap: 2, height: "2.5rem", fontSize: "1.1rem" }}
        >
          Save
        </Button>
      </Box>
    </>
  );
}
