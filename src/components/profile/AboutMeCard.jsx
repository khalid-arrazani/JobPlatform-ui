import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,

} from "@mui/material";
import {  IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
export default function AboutMeCard() {
  return (
    <Card
      sx={{
        borderRadius: "1rem",
       p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        width: "44vw",
        m:1
      }}
    >
      
      <CardContent sx={{ p: 0.5 }} style={{ paddingBottom: "0" }}>
        
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: "0.3rem", fontSize: "1.1rem",display:"flex",justifyContent:"space-between" }}
        >
          About Me
<IconButton
  sx={{
    background: "#160a7e00",
    color: "#6e6e6e",

    "&:hover": {
      background: "#37373849",
    },
    width:"2rem",
    height:"2rem",
    p:0.5
  }}
>
  <EditIcon sx={{width:"100%",m:0}} />
</IconButton>
          
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#555", mb: "0.9rem", fontSize: "0.9rem" }}
        >
          I'm a motivated web developer focused on building clean, fast and
          scalable web applications. I enjoy turning ideas into real products.
        </Typography>

        <Divider sx={{ my: "0.9rem" }} />

        {/* Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.2rem",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Box sx={{mt:1}}>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.95rem" }}
              >
                Availability
              </Typography>

              <Typography sx={{ fontWeight: 500, fontSize: "0.85rem" }}>
                Available
              </Typography>
            </Box>

            <Box sx={{mt:1}}>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.95rem" }}
              >
                Experience Level
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: "0.85rem" }}>
                Mid-Level
              </Typography>
            </Box>
          </div>

          <div>
            
            <Box sx={{ width: "100%",mb:"0.2rem",mt:1 }}>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.9rem" }}
              >
                Languages
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: "0.4rem",
                  flexWrap: "wrap",
                  mt: "0.3rem",
                }}
              >
                <Chip label="Arabic" size="small" sx={{ fontSize: "0.7rem" }} />
                <Chip
                  label="English"
                  size="small"
                  sx={{ fontSize: "0.7rem" }}
                />
                <Chip label="French" size="small" sx={{ fontSize: "0.7rem" }} />
              </Box>
            </Box>
            <Box>

              <Box sx={{mt:1}}>
                <Typography
                  variant="caption"
                  sx={{ color: "#888", fontSize: "0.90rem"}}
                >
                  Preferred Job Type
                </Typography>
                <Typography sx={{ fontWeight: 500, fontSize: "0.85rem" }}>
                  Full-Time
                </Typography>
              </Box>
            </Box>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
