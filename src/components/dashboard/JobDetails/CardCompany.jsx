import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
  Stack,
} from "@mui/material";

import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import { millify } from "millify";
import { formatDistanceToNow } from "date-fns";

export default function CardCompany({ jobInfo }) {
  return (
    <>
      <Card
        sx={{
          flex: 1,
          height: "auto",

          borderRadius: "10px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#fff",
          pr: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={jobInfo?.createdBy.companyLogo.url}
            sx={{
              width: 90,
              height: 90,
              bgcolor: "#fff",
              border: "1px solid #eee",
              borderRadius: "10px",
              m: "2rem",
              p: 2,
            }}
          />

          {/* Left Side */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "solid 1px #d4d3d3",
              pl: "1.2rem",
              height: "fit-Content",
            }}
          >
            <Box>
              <Stack direction="row" spacing={1.5}>
                <Chip
                  label="Verified Company"
                  size="small"
                  sx={{
                    bgcolor: "#e8ffea",
                    color: "#238a3f",
                    fontWeight: 400,
                  }}
                />
                <Chip
                  label={`Posted ${jobInfo?.createdAt
                      ? formatDistanceToNow(new Date(jobInfo.createdAt), {
                          addSuffix: true,
                        })
                      : ""}`
                  }
                  size="small"
                  sx={{
                    bgcolor: "#f2f0f0",
                    color: "#404040c5",
                    fontWeight: 400,
                  }}
                />
              </Stack>
              <Typography
                sx={{
                  fontSize: "1.7rem",
                  fontWeight: 700,
                  color: "#060505e8",
                }}
              >
                {jobInfo?.title}
              </Typography>

              <Typography
                sx={{
                  color: "#000000",
                  mt: 0.5,
                  fontSize: "0.95rem",
                  mb: 1.5,
                }}
              >
                {jobInfo?.createdBy.companyName} • {jobInfo?.location}
              </Typography>

              <Stack direction="row" spacing={1.5}>
                <Chip
                  label={jobInfo?.jobType}
                  size="small"
                  sx={{
                    bgcolor: "#fce8ff",
                    color: "#7C3AED",
                    fontWeight: 400,
                  }}
                />

                <Chip
                  label={`${jobInfo?.experienceLevel} Level`}
                  size="small"
                  sx={{
                    bgcolor: "#fce8ff",
                    color: "#7C3AED",
                    fontWeight: 400,
                  }}
                />
                <Chip
                  label={`${millify(jobInfo?.minSalary)} - ${millify(jobInfo?.maxSalary)} ${jobInfo?.salaryCurrency} / ${jobInfo?.salaryPeriod}`}
                  size="small"
                  sx={{
                    bgcolor: "#e9fcf1",
                    color: "#27a25e",
                    fontWeight: 500,
                    fontFamily: "-apple-system",
                  }}
                />

                
              </Stack>
            </Box>
          </Box>
        </Box>
        {/* Right Side */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<TurnedInNotOutlinedIcon />}
            sx={{
              borderRadius: "14px",
              textTransform: "none",
              px: 1,
              py: 1,
              borderColor: "#DDD",
              color: "#a320e5",
              fontSize: "0.8rem",
            }}
          >
            Save Job
          </Button>

          <Button
            variant="contained"
            startIcon={<TelegramIcon />}
            sx={{
              borderRadius: "14px",
              textTransform: "none",
              px: 2,
              py: 1.2,
              fontWeight: 300,
              background:
                "linear-gradient(30deg, #8e1ef8 0%, #be81fa 35%, #8518fa 100%)",

              "&:hover": {
                background: "linear-gradient(90deg, #AA6EEA 0%, #7F28E3 100%)",
              },
              fontSize: "0.8rem",
            }}
          >
            Apply Now
          </Button>
        </Stack>
      </Card>
    </>
  );
}
