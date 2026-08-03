import { Card, CardContent, Typography, Box} from "@mui/material";





import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";


export default function AboutMeCard({data}) {

  return (
    <Card
      sx={{
        width: "44vw",
        borderRadius: "1rem",
        p: "1rem",
        background: "#fff",
        boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
        mx: 1,
        mt: 1,
      }}
    >



      <CardContent sx={{ p: "0.5rem !important" }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            mb: "1rem",
          }}
        >
          <Box
            sx={{
              width: "2.4rem",
              height: "2.4rem",
              borderRadius: "0.8rem",
              background: "#f5f3ff",
              color: "#5b21b6",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonOutlineOutlinedIcon />
          </Box>

          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            About Me
             
          </Typography>
        </Box>
        {/* Description */}
        <Typography
          sx={{
            fontSize: "0.85rem",
            lineHeight: 1.8,
            color: "#666",
          }}
        >
          {data?.profile?.aboutMe || "info"}
        </Typography>
      </CardContent>
    </Card>
  );
}
