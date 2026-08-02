import { Card, CardContent, Typography, Box, Chip, Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

 

 

export default function TopSkillsCard({data}) {

 
  

  return (
    <Card
      sx={{
        borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f7ff 100%)",
        width: "44vw",
        m: 1,
      }}
    >
 

      <CardContent sx={{ p: "0.3rem !important" }}>

        {/* Title */}

        
      <Box
        sx={{
          pb: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              bgcolor: "#eef4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AutoAwesomeOutlinedIcon
              sx={{
                color: "#2563eb",
                fontSize: "1.3rem",
              }}
            />
          </Box>

          <Typography variant="h6">
            Top Skills
          </Typography>
        </Box>
      </Box>

      <Divider/>
        {/* Skills */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            pt:'1rem'
          }}
        >
          {data?.profile?.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                borderRadius: "0.5rem",
                fontWeight: 500,
                fontSize: "0.75rem",
                height: "1.8rem",
                px: "0.3rem",

                background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",

                color: "#4338ca",

                "&:hover": {
                  transform: "translateY(-0.12rem)",
                  transition: "0.3s",
                  boxShadow: "0 0.3rem 0.8rem rgba(99,102,241,0.2)",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
