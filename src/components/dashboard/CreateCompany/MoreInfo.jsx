import {
  Box,
  Card,
  Typography,
  Button,
  TextField,
  InputAdornment,
  MenuItem,
  Autocomplete,
  Chip,
} from "@mui/material";

import { Heart, Clock3, TrendingUp, Plus } from "lucide-react";

import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

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
import { useState } from "react";
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

// const companyBenefits = [
//   {
//     label: "Remote Work",
//     icon: Laptop,
//     color: "#06B6D4",
//     bg: "#ECFEFF",
//   },
//   {
//     label: "Hybrid Work",
//     icon: Laptop,
//     color: "#06B6D4",
//     bg: "#ECFEFF",
//   },
//   {
//     label: "Flexible Hours",
//     icon: Briefcase,
//     color: "#4F46E5",
//     bg: "#EEF2FF",
//   },
//   {
//     label: "Health Insurance",
//     icon: HeartPulse,
//     color: "#EF4444",
//     bg: "#FEF2F2",
//   },
//   {
//     label: "Dental Insurance",
//     icon: HeartPulse,
//     color: "#EF4444",
//     bg: "#FEF2F2",
//   },
//   {
//     label: "Vision Insurance",
//     icon: HeartPulse,
//     color: "#EF4444",
//     bg: "#FEF2F2",
//   },
//   {
//     label: "Performance Bonus",
//     icon: DollarSign,
//     color: "#16A34A",
//     bg: "#F0FDF4",
//   },
//   {
//     label: "Annual Bonus",
//     icon: DollarSign,
//     color: "#16A34A",
//     bg: "#F0FDF4",
//   },
//   {
//     label: "Stock Options",
//     icon: DollarSign,
//     color: "#16A34A",
//     bg: "#F0FDF4",
//   },
//   {
//     label: "Retirement Plan",
//     icon: DollarSign,
//     color: "#16A34A",
//     bg: "#F0FDF4",
//   },
//   {
//     label: "Training Budget",
//     icon: GraduationCap,
//     color: "#F59E0B",
//     bg: "#FEF3C7",
//   },
//   {
//     label: "Learning & Development",
//     icon: GraduationCap,
//     color: "#F59E0B",
//     bg: "#FEF3C7",
//   },
//   {
//     label: "Career Growth",
//     icon: GraduationCap,
//     color: "#F59E0B",
//     bg: "#FEF3C7",
//   },
//   {
//     label: "Gym Membership",
//     icon: Dumbbell,
//     color: "#8B5CF6",
//     bg: "#F3E8FF",
//   },
//   {
//     label: "Wellness Program",
//     icon: Dumbbell,
//     color: "#8B5CF6",
//     bg: "#F3E8FF",
//   },
//   {
//     label: "Free Lunch",
//     icon: Utensils,
//     color: "#F97316",
//     bg: "#FFF7ED",
//   },
//   {
//     label: "Free Snacks",
//     icon: Utensils,
//     color: "#F97316",
//     bg: "#FFF7ED",
//   },
//   {
//     label: "Transportation Allowance",
//     icon: Plane,
//     color: "#0EA5E9",
//     bg: "#F0F9FF",
//   },
//   {
//     label: "Relocation Assistance",
//     icon: Plane,
//     color: "#0EA5E9",
//     bg: "#F0F9FF",
//   },
//   {
//     label: "Team Events",
//     icon: Users,
//     color: "#EC4899",
//     bg: "#FDF2F8",
//   },
//   {
//     label: "Employee Discounts",
//     icon: Users,
//     color: "#EC4899",
//     bg: "#FDF2F8",
//   },
//   {
//     label: "Life Insurance",
//     icon: Shield,
//     color: "#6366F1",
//     bg: "#EEF2FF",
//   },
//   {
//     label: "Mental Health Support",
//     icon: HeartPulse,
//     color: "#EF4444",
//     bg: "#FEF2F2",
//   },
// ];

// const benefits = [
//   {
//     title: "Health Insurance",
//     icon: <Heart color="#EF4444" />,
//     bg: "#FEF2F2",
//   },
//   {
//     title: "Remote Work",
//     icon: <Briefcase size={25} color="#06B6D4" />,
//     bg: "#ECFEFF",
//   },
//   {
//     title: "Flexible Hours",
//     icon: <Clock3 size={25} color="#4F46E5" />,
//     bg: "#EEF2FF",
//   },
//   {
//     title: "Career Growth",
//     icon: <TrendingUp size={25} color="#F59E0B" />,
//     bg: "#FEF3C7",
//   },
// ];

export default function MoreInfo() {
  const [selectedBenefits, setSelectedBenefits] = useState([]);



  


  const selectedBenefitObjects = companyBenefits.filter(
  (benefit) => selectedBenefits.includes(benefit.label)
);


console.log(selectedBenefits,selectedBenefitObjects);

  return (
    <>
      <Box
        sx={{
          height: "70%",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          gap: 2,
        }}
      >
        {/* Benefits */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            borderRadius: "15px",
            border: "solid 0.5px #b3b0b069",
            boxSizing: "border-box",
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#020314d2",
              fontFamily: "ui-serif",
            }}
          >
            Company Benefits
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#06051cb7",
              mb: 3,
            }}
          >
            Add benefits your company offers
          </Typography>

          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 3,
              width:"100%",
              height:"65%",
              border:"dashed 0.5px #c8c8c8",
              p:1,
              boxSizing:"border-box"
            }}
          >
            {selectedBenefitObjects?.map((benefit) => {
              return (
                <Card
                  key={benefit.label}
                  sx={{
                    boxSizing: "border-box",
                    width: "7.8rem",
                    height: "7.5rem",
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
                      width: "2.2rem",
                      height: "2.2rem",
                      p: "0.7rem",
                      borderRadius: "12px",
                      bgcolor: benefit.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    { <benefit.icon color={benefit.color}/>}
                  </Box>

                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "1rem",
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
            value={selectedBenefits}
            onChange={(event, newValue) => {
              if (newValue.length <= 6) {
                setSelectedBenefits(newValue);
              }
            }}
            getOptionDisabled={(option) =>
              selectedBenefits.length >= 6 && !selectedBenefits.includes(option)
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
              <TextField {...params} placeholder={`${selectedBenefits.length}/6 benefits selected`} />
            )}
          />
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            borderRadius: "15px",
            border: "solid 0.5px #b3b0b069",
            boxSizing: "border-box",
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#020314d2",
              fontFamily: "ui-serif",
            }}
          >
            Social Links (optional)
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#06051cb7",
              mb: 3,
            }}
          >
            Add benefits your company social media profiles
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 2.5,
            }}
          >
            {/* LinkedIn */}
            <TextField
              fullWidth
              placeholder="https://linkedin.com/company/..."
              sx={inputStyle}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLinkedin size={30} color="#3376d5" />
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* Facebook */}
            <TextField
              fullWidth
              placeholder="https://facebook.com/..."
              sx={inputStyle}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaFacebook size={30} color="#1f62c1" />
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* Instagram */}
            <TextField
              fullWidth
              placeholder="https://instagram.com/..."
              sx={inputStyle}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaInstagram size={30} color="#E1306C" />
                    </InputAdornment>
                  ),
                },
              }}
            />

            {/* X / Twitter */}
            <TextField
              fullWidth
              placeholder="https://twitter.com/..."
              sx={inputStyle}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaXTwitter size={30} color="#353d49" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

const inputStyle = {
  border: "none",
  outline: "none",
  width: "100%",
  background: "transparent",
  fontSize: "13px",
};
