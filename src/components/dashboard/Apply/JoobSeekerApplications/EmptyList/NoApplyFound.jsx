import { Box, Typography } from "@mui/material";
import { useApply } from "../../../../../logic/context/ApplyContext";

export default function NoApplyFound() {
    const {felterData} = useApply()


   
  return (
    <>
      <Box
        sx={{
          border: "dashed 1px #ddd",
          width: "95%",
          height: "90%",
          placeSelf: "center",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          bgcolor: "#fff9f891",
          my:2
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "2rem",
            color: "#010214ce",
            fontFamily: "ui-rounded",
          }}
        >
          No {felterData.status} applications
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "#5f5f5fd6",
            fontFamily: "ui-rounded",
          }}
        >
          No {felterData.status} applications found.
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1rem",
            color: "#5f5f5fd6",
            fontFamily: "ui-rounded",
          }}
        >
          Try adjusting your filters or apply to more jobs to see applications here.
        </Typography>
      </Box>
    </>
  );
}
