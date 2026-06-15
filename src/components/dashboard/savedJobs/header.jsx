import { Box,Typography,TextField,Button,InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


export default function Header (){

    return <>
      <Box
            sx={{
              height: "18%",
              width: "100%",
              display:"flex",
              justifyContent:"space-between",
              borderBottom:"solid 0.1px #8d8d8d3a"
            }}
          >
            {/* Left */}
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Typography
                sx={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Saved Jobs
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64748B",
                  fontSize: "0.95rem",
                }}
              >
                Jobs you've saved for later.
              </Typography>
            </Box>

            {/* Right */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <TextField
                placeholder="Search saved jobs..."
                size="small"
               
                sx={{
                  width: 280,

                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    bgcolor: "#fff",
                    height: 40,
                  },
                }}
              />

              <Button
                variant="outlined"
                size="small"
                startIcon={<TuneOutlinedIcon />}
                sx={{
                  height: 45,
                  px: 3,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#475569",
                  borderColor: "#E2E8F0",

                  "&:hover": {
                    borderColor: "#8B5CF6",
                    bgcolor: "#FAF5FF",
                  },
                }}
              >
                Filters
              </Button>
            </Box>

          </Box></>
}