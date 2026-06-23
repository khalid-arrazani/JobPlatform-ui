
 
import {
  Box,
  Card,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  Heart,
  Briefcase,
  Clock3,
  TrendingUp,
  Plus,
  Mail,
  Phone,

  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

const benefits = [
  {
    title: "Health Insurance",
    icon: <Heart size={20} color="#EF4444" />,
    bg: "#FEF2F2",
  },
  {
    title: "Remote Work",
    icon: <Briefcase size={20} color="#06B6D4" />,
    bg: "#ECFEFF",
  },
  {
    title: "Flexible Hours",
    icon: <Clock3 size={20} color="#4F46E5" />,
    bg: "#EEF2FF",
  },
  {
    title: "Career Growth",
    icon: <TrendingUp size={20} color="#F59E0B" />,
    bg: "#FEF3C7",
  },
];


export default function MoreInfo (){


    return <>
    <Box >
   

      {/* Content */}
      <Grid container spacing={3}>
        {/* Benefits */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
              height: "100%",
            }}
          >
            <Typography fontWeight={700}>
              Company Benefits
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mb={3}
            >
              Add benefits your company offers
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mb: 3,
              }}
            >
              {benefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  sx={{
                    width: 95,
                    height: 80,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "14px",
                    border: "1px solid #F1F5F9",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "12px",
                      bgcolor: benefit.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    {benefit.icon}
                  </Box>

                  <Typography
                    fontSize="0.75rem"
                    textAlign="center"
                  >
                    {benefit.title}
                  </Typography>
                </Card>
              ))}
            </Box>

            <Button
              variant="outlined"
              startIcon={<Plus size={16} />}
            >
              Add Benefit
            </Button>
          </Card>
        </Grid>

        {/* Contact */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              p: 3,
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
            }}
          >
            <Typography fontWeight={700} mb={2}>
              Contact Us
            </Typography>

            <Grid container spacing={2}>
              <Grid size={6}>
                <Typography mb={1}>Contact Email</Typography>

                <TextField
                  fullWidth
                  size="small"
                  placeholder="hr@company.com"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail size={16} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>

              <Grid size={6}>
                <Typography mb={1}>Contact Phone</Typography>

                <TextField
                  fullWidth
                  size="small"
                  placeholder="+212 6 98 76 54 32"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone size={16} />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Typography
              fontWeight={600}
              mt={3}
              mb={2}
            >
              Social Links (optional)
            </Typography>

            <TextField
              fullWidth
              size="small"
              placeholder="https://linkedin.com/company/..."
              sx={{ mb: 2 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLinkedin size={16} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              size="small"
              placeholder="https://facebook.com/..."
              sx={{ mb: 2 }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaFacebook size={16} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              size="small"
              placeholder="https://twitter.com/..."
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaXTwitter size={16} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Card>
        </Grid>
      </Grid>

     
    </Box>
    
    </>
}